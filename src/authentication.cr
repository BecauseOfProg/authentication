require "./exceptions"
require "crypto/bcrypt"
require "crypto/subtle"

# A class authentication library
module Authentication
  VERSION = "0.1.1"

  class Base
    @@cost = Crypto::Bcrypt::DEFAULT_COST

    @bcrypt : (Crypto::Bcrypt::Password | Nil)

    # Create an instance
    # NOTE: You can set password hash with `set_password_hash: "password_hash"`` or set password with `set_password: "password"`
    # ```crystal
    # authentication = Authentication::Base.new set_password_hash: "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K"
    # authentication2 = Authentication::Base.new set_password: "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K"
    # ```
    def initialize(set_password_hash = "", set_password = "")
      check
      if set_password_hash.size > 0
        self.password_hash = set_password_hash
      elsif set_password.size > 0
        self.password = set_password
      end
    end

    # Set password
    # ```crystal
    # authentication = Authentication::Base.new
    # authentication.password = "test" # => "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K"
    # ```
    def password=(password : String) : String
      check
      @bcrypt = Crypto::Bcrypt::Password.create(password, cost: @@cost)
      @bcrypt.to_s
    end

    # Get password_hash
    # ```crystal
    # authentication = Authentication::Base.new set_password_hash: "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K"
    # authentication.password_hash # => "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K"
    # ```
    def password_hash : String
      @bcrypt.to_s
    end

    # Set password_hash
    # ```crystal
    # authentication = Authentication::Base.new
    # authentication.password_hash = "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K"
    # ```
    def password_hash=(set_password_hash : String) : String
      @bcrypt = Crypto::Bcrypt::Password.new(set_password_hash)
      @bcrypt.to_s
    end

    # Authenticate
    # NOTE: You can set the password_hash here with `set_password_hash: password_hash`
    # ```crystal
    # authentication = Authentication::Base.new set_password: test
    # authentication.authenticate "test"
    # ```
    def authenticate(password : String, set_password_hash = "") : Bool
      check
      if set_password_hash.size > 0
        self.password_hash = set_password_hash
      end
      if @bcrypt.class != Crypto::Bcrypt::Password
        raise PasswordHashNotSet.new("Password hash not set")
      else
        @bcrypt.as(Crypto::Bcrypt::Password).verify password
      end
    end

    # Get cost
    # ```crystal
    # Authentication::Base.cost = 15 # => Bool(true)
    # Authentication::Base.cost      # => 15
    # ```
    def self.cost
      @@cost
    end

    # Set cost
    # ```crystal
    # Authentication::Base.cost = 15 # => Bool(true)
    # Authentication::Base.cost = 3  # raise CostTooLow("Cost too low, 4 minimum is required (current cost 3)") exception
    # ```
    def self.cost=(cost : Int32)
      @@cost = cost
      check_cost
    end

    private def check : Bool
      Authentication::Base.check_cost
    end

    def self.check_cost : Bool
      if @@cost < Crypto::Bcrypt::COST_RANGE.begin
        raise CostTooLow.new("Cost too low, #{Crypto::Bcrypt::COST_RANGE.begin} minimum is required (current cost #{@@cost})")
      elsif @@cost > Crypto::Bcrypt::COST_RANGE.end
        raise CostTooHigh.new("Cost too high, #{Crypto::Bcrypt::COST_RANGE.end} maximum is required (current cost #{@@cost})")
      end
      true
    end

    private def check_password(password : String) : Bool
      if password.size < Crypto::Bcrypt::PASSWORD_RANGE.begin
        raise PasswordTooShort.new("Password too short, #{Crypto::Bcrypt::PASSWORD_RANGE.begin} length minimum is required (current length #{password.size})")
      elsif password.size > Crypto::Bcrypt::PASSWORD_RANGE.end
        raise PasswordTooLong.new("Password too long, #{Crypto::Bcrypt::PASSWORD_RANGE.end} length maximum is required (current length #{password.size})")
      end
    end
  end
end
