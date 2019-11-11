module Authentication
  class Exception < ::Exception
  end

  class CostTooHigh < Exception
  end

  class CostTooLow < Exception
  end

  class PasswordHashNotSet < Exception
  end

  class PasswordTooLong < Exception
  end

  class PasswordTooShort < Exception
  end
end
