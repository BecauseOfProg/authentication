module Authentication
  class Exception < ::Exception
  end

  class CostTooHigh < ::ArgumentError
  end

  class CostTooLow < ::ArgumentError
  end

  class PasswordHashNotSet < ::ArgumentError
  end

  class PasswordTooLong < ::ArgumentError
  end

  class PasswordTooShort < ::ArgumentError
  end
end
