<div align="center">
  <h1>Authentication</h1>
  <h3>A class authentication library</h3>
  <a href="https://circleci.com/gh/BecauseOfProg/authentication">
    <img src="https://circleci.com/gh/BecauseOfProg/authentication.svg?style=svg" alt="Build status" />
  </a>
</div>

- [Why this library?](#why-this-library)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Why this library?
  It's a library that simplify the use of Crypto::Bcrypt.
  With Authentication, you don't need to care about password, Authentication takes everything in charge

## Installation

Add the dependency to your application's `shard.yml`:

```yaml
dependencies:
  bitwise:
    github: BecauseOfProg/authentication
```

## Usage
Documentation <a href="https://becauseofprog.github.io/authentication/">here</a>
More examples in the documentation & in the tests

Better explained by example

```crystal
require "authentication"

class User < Authentication::Base
  @@cost = 10
  @@salt = "YXplcnR5dWlvcHFzZGZnaA==" # Must be base64 encoded
end

user = User.password = "test" #=> User()
user.authenticate "test" #=> Bool(true)

# More examples in the documentation & in the tests
```

## Contributing

1. Fork the repository (<https://github.com/BecauseOfProg/authentication/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new [Pull Request](https://github.com/BecauseOfProg/authentication/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc)

## Credits

- Maintainer : [Whaxion](https://github.com/Whaxion)

## License

The MIT License (MIT)

Copyright (c) 2019 Whaxion

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
