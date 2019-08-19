require "./exceptions/*"
require "crypto/bcrypt"
require "crypto/subtle"

# A class authentication library
module Authentication
  VERSION = "0.1.0"

  class Base
    @@cost = Crypto::Bcrypt::DEFAULT_COST
    @@salt = ""

    @password_hash = ""

    # Create an instance
    # NOTE: You can set password hash with `set_password_hash: "password_hash"`` or set password with `set_password: "password"`
    # ```crystal
    # authentication = Authentication::Base.new set_password_hash: "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K"
    # authentication2 = Authentication::Base.new set_password: "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K"
    # ```
    def initialize(set_password_hash = "", set_password = "")
      check
      self.password_hash = set_password_hash
      if set_password.size > 0
        self.password = set_password
      end
    end

    # Set password
    # ```crystal
    # authentication = Authentication::Base.new
    # authentication.password = "test" #=> "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K"
    # ```
    def password=(password : String) : String
      check
      bcrypt = Crypto::Bcrypt.new(password: password, salt: @@salt, cost: @@cost)
      @password_hash = bcrypt.to_s
    end

    # Get password_hash
    # ```crystal
    # authentication = Authentication::Base.new set_password_hash: "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K"
    # authentication.password_hash #=> "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K"
    # ```
    def password_hash : String
      @password_hash
    end

    # Set password_hash
    # ```crystal
    # authentication = Authentication::Base.new
    # authentication.password_hash = "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K"
    # ```
    def password_hash=(set_password_hash : String) : String
      @password_hash = set_password_hash
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
      hashed_password = Crypto::Bcrypt.new(password: password, salt: @@salt, cost: @@cost)
      Crypto::Subtle.constant_time_compare(@password_hash, hashed_password)
    end

    # Get cost
    # ```crystal
    # Authentication::Base.cost = 15 #=> Bool(true)
    # Authentication::Base.cost #=> 15
    # ```
    def self.cost
      @@cost
    end

    # Set cost
    # ```crystal
    # Authentication::Base.cost = 15 #=> Bool(true)
    # Authentication::Base.cost = 3 # raise CostTooLow("Cost too low, 4 minimum is required (current cost 3)") exception
    # ```
    def self.cost=(cost : Int32)
      @@cost = cost
      check_cost
    end

    # Get salt
    # ```crystal
    # Authentication::Base.salt = "YXplcnR5dWlvcHFzZGZnaA== #=> Bool(true) # Salt should be Base64 encoded
    # Authentication::Base.salt #=> "YXplcnR5dWlvcHFzZGZnaA=="
    # ```
    def self.salt
      @@salt
    end

    # Set salt
    # ```crystal
    # Authentication::Base.salt = "YXplcnR5dWlvcHFzZGZnaA==" #=> Bool(true)
    # Authentication::Base.salt = "YXplcnR5" # raise SaltError("Salt too short, must be 16 chars decoded minimum (current 6)") exception
    # ```
    def self.salt=(salt : String)
      @@salt = salt
      check_salt
    end

    private def check : Bool
      Authentication::Base.check_cost
      Authentication::Base.check_salt
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

    def self.check_salt : Bool
      begin
        size = Base64.decode(salt).size
        if size < 16
          raise SaltError.new("Salt too short, must be 16 chars decoded minimum (current #{size})")
        end
      rescue e : Base64::Error
        raise SaltError.new("Not Base64 encoded")
      end
      true
    end

  end

end
