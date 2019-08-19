require "./spec_helper"

class User < Authentication::Base
  @@cost = 8
  @@salt = "YXplcnR5dWlvcHFzZGZnaA=="
end

describe Authentication do

  describe Authentication::Base do

    describe "#self.cost=" do
      it "should raise a CostTooLow Exception" do
        begin
          Authentication::Base.cost = 1
          false.should be_true
        rescue e : Authentication::CostTooLow
          e.message.should match(/^Cost too low, [0-9]+ minimum is required \(current cost [0-9]+\)$/)
        end
      end

      it "should raise a CostTooHigh Exception" do
        begin
          Authentication::Base.cost = 32
          false.should be_true
        rescue e : Authentication::CostTooHigh
          e.message.should match(/^Cost too high, [0-9]+ maximum is required \(current cost [0-9]+\)$/)
        end
      end

      it "should change the cost" do
        (Authentication::Base.cost = 8).should be_true
        Authentication::Base.cost.should eq 8
      end
    end

    describe "#self.salt=" do

      it "should raise a Not base64 encoded exception" do
        begin
          Authentication::Base.salt = "XplcnR5dWlvcHFzZGZnaA"
          false.should be_true
        rescue e : Authentication::SaltError
          e.message.should eq "Not Base64 encoded"
        end
      end

      it "should raise a Salt too short exception" do
        begin
          Authentication::Base.salt = "YXplcnR5"
          false.should be_true
        rescue e : Authentication::SaltError
          e.message.should match(/^Salt too short, must be 16 chars decoded minimum \(current [0-9]+\)$/)
        end
      end

      it "should change the salt" do
        (Authentication::Base.salt = "YXplcnR5dWlvcHFzZGZnaA==").should be_true
        Authentication::Base.salt.should eq "YXplcnR5dWlvcHFzZGZnaA=="
      end
    end

    describe "#new" do
      it "should create a new empty instance" do
        authentication = Authentication::Base.new
        authentication.should be_a Authentication::Base
        authentication.password_hash.should eq ""
      end

      it "should create a new instance with password hash" do
        authentication = Authentication::Base.new set_password_hash: "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K"
        authentication.should be_a Authentication::Base
        authentication.password_hash.should eq "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K"
      end

      it "should create a new instance with password (doesn't work if #authenticate doesn't work)" do
        authentication = Authentication::Base.new set_password: "test"
        authentication.should be_a Authentication::Base
        authentication.authenticate("test").should be_true
      end
    end

    describe "password=" do
      it "should set the password" do
        authentication = Authentication::Base.new
        (authentication.password = "test").should be_a(String)
      end
    end

    describe "password_hash=" do
      it "should set the password hash" do
        authentication = Authentication::Base.new
        (authentication.password_hash = "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K").should be_a String
        authentication.password_hash.should eq "$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K"
      end
    end

    describe "authenticate" do
      it "should authenticate" do
        authentication = Authentication::Base.new set_password: "test"
        authentication.authenticate("test").should be_true
      end
    end

    it "final test" do
      user = User.new set_password: "test"
      user.should be_a(User)
      (user.authenticate "test").should be_true
    end

  end
end
