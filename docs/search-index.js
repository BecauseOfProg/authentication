crystal_doc_search_index_callback({"repository_name":"github.com/BecauseOfProg/authentication","body":"<div align=\"center\">\n  <h1>Authentication</h1>\n  <h3>A class authentication library for Crystal</h3>\n  <a href=\"https://circleci.com/gh/BecauseOfProg/authentication\">\n    <img src=\"https://circleci.com/gh/BecauseOfProg/authentication.svg?style=svg\" alt=\"Build status\" />\n  </a>\n</div>\n\n- [Why this library?](#why-this-library)\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)\n- [Credits](#credits)\n- [License](#license)\n\n## Why this library?\n  It's a library that simplify the use of [Crypto::Bcrypt](https://crystal-lang.org/api/latest/Crypto/Bcrypt/Password.html).\n  With Authentication, you don't need to care about password, Authentication takes everything in charge\n\n## Installation\n\nAdd the dependency to your application's `shard.yml`:\n\n```yaml\ndependencies:\n  authentication:\n    github: BecauseOfProg/authentication\n```\n\n## Usage\nDocumentation <a href=\"https://becauseofprog.github.io/authentication/\">here</a>\nMore examples in the documentation & in the tests\n\nBetter explained by example\n\n```crystal\nrequire \"authentication\"\n\nclass User < Authentication::Base\n  @@cost = 10\nend\n\nuser = User.password = \"test\" #=> User()\nuser.authenticate \"test\" #=> Bool(true)\n\n# More examples in the documentation & in the tests\n```\n\n## Contributing\n\n1. Fork the repository (<https://github.com/BecauseOfProg/authentication/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new [Pull Request](https://github.com/BecauseOfProg/authentication/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc)\n\n## Credits\n\n- Maintainer : [Whaxion](https://github.com/Whaxion)\n\n## License\n\nThe MIT License (MIT)\n\nCopyright (c) 2020 Whaxion\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n","program":{"html_id":"github.com/BecauseOfProg/authentication/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"github.com/BecauseOfProg/authentication","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/BecauseOfProg/authentication/Authentication","path":"Authentication.html","kind":"module","full_name":"Authentication","name":"Authentication","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"exceptions.cr","line_number":1,"url":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/exceptions.cr"},{"filename":"authentication.cr","line_number":6,"url":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/authentication.cr"}],"repository_name":"github.com/BecauseOfProg/authentication","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"0.1.2\"","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":"A class authentication library","summary":"<p>A class authentication library</p>","class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/BecauseOfProg/authentication/Authentication/Base","path":"Authentication/Base.html","kind":"class","full_name":"Authentication::Base","name":"Base","abstract":false,"superclass":{"html_id":"github.com/BecauseOfProg/authentication/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"github.com/BecauseOfProg/authentication/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/BecauseOfProg/authentication/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"authentication.cr","line_number":9,"url":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/authentication.cr"}],"repository_name":"github.com/BecauseOfProg/authentication","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/BecauseOfProg/authentication/Authentication","kind":"module","full_name":"Authentication","name":"Authentication"},"doc":null,"summary":null,"class_methods":[{"id":"check_cost:Bool-class-method","html_id":"check_cost:Bool-class-method","name":"check_cost","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Bool","source_link":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/authentication.cr#L116","def":{"name":"check_cost","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Bool","visibility":"Public","body":"if @@cost < Crypto::Bcrypt::COST_RANGE.begin\n  raise(CostTooLow.new(\"Cost too low, #{Crypto::Bcrypt::COST_RANGE.begin} minimum is required (current cost #{@@cost})\"))\nelse\n  if @@cost > Crypto::Bcrypt::COST_RANGE.end\n    raise(CostTooHigh.new(\"Cost too high, #{Crypto::Bcrypt::COST_RANGE.end} maximum is required (current cost #{@@cost})\"))\n  end\nend\ntrue\n"}},{"id":"cost-class-method","html_id":"cost-class-method","name":"cost","doc":"Get cost\n\nExample:\n```crystal\nAuthentication::Base.cost = 15 # => Bool(true)\nAuthentication::Base.cost      # => 15\n```","summary":"<p>Get cost</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/authentication.cr#L96","def":{"name":"cost","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@@cost"}},{"id":"cost=(cost:Int32)-class-method","html_id":"cost=(cost:Int32)-class-method","name":"cost=","doc":"Set cost\n\nExample:\n```crystal\nAuthentication::Base.cost = 15 # => Bool(true)\nAuthentication::Base.cost = 3  # raise CostTooLow(\"Cost too low, 4 minimum is required (current cost 3)\") exception\n```","summary":"<p>Set cost</p>","abstract":false,"args":[{"name":"cost","doc":null,"default_value":"","external_name":"cost","restriction":"Int32"}],"args_string":"(cost : Int32)","source_link":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/authentication.cr#L107","def":{"name":"cost=","args":[{"name":"cost","doc":null,"default_value":"","external_name":"cost","restriction":"Int32"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@@cost = cost\ncheck_cost\n"}}],"constructors":[{"id":"new(set_password_hash=&quot;&quot;,set_password=&quot;&quot;)-class-method","html_id":"new(set_password_hash=&amp;quot;&amp;quot;,set_password=&amp;quot;&amp;quot;)-class-method","name":"new","doc":"Create an instance\n\nNOTE: You can set password hash with `set_password_hash: \"password_hash\"` or set password with `set_password: \"password\"`\n\nExample:\n```crystal\nauthentication = Authentication::Base.new set_password_hash: \"$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K\"\nauthentication2 = Authentication::Base.new set_password: \"$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K\"\n```","summary":"<p>Create an instance</p>","abstract":false,"args":[{"name":"set_password_hash","doc":null,"default_value":"\"\"","external_name":"set_password_hash","restriction":""},{"name":"set_password","doc":null,"default_value":"\"\"","external_name":"set_password","restriction":""}],"args_string":"(set_password_hash = <span class=\"s\">&quot;&quot;</span>, set_password = <span class=\"s\">&quot;&quot;</span>)","source_link":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/authentication.cr#L23","def":{"name":"new","args":[{"name":"set_password_hash","doc":null,"default_value":"\"\"","external_name":"set_password_hash","restriction":""},{"name":"set_password","doc":null,"default_value":"\"\"","external_name":"set_password","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = allocate\n_.initialize(set_password_hash, set_password)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"id":"authenticate(password:String,set_password_hash=&quot;&quot;):Bool-instance-method","html_id":"authenticate(password:String,set_password_hash=&amp;quot;&amp;quot;):Bool-instance-method","name":"authenticate","doc":"Authenticate\n\nNOTE: You can set the password_hash here with `set_password_hash: password_hash`\n\nExample:\n```crystal\nauthentication = Authentication::Base.new set_password: test\nauthentication.authenticate \"test\"\n```","summary":"<p>Authenticate</p>","abstract":false,"args":[{"name":"password","doc":null,"default_value":"","external_name":"password","restriction":"String"},{"name":"set_password_hash","doc":null,"default_value":"\"\"","external_name":"set_password_hash","restriction":""}],"args_string":"(password : String, set_password_hash = <span class=\"s\">&quot;&quot;</span>) : Bool","source_link":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/authentication.cr#L77","def":{"name":"authenticate","args":[{"name":"password","doc":null,"default_value":"","external_name":"password","restriction":"String"},{"name":"set_password_hash","doc":null,"default_value":"\"\"","external_name":"set_password_hash","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Bool","visibility":"Public","body":"check\nif set_password_hash.size > 0\n  self.password_hash = set_password_hash\nend\nif @bcrypt.class != Crypto::Bcrypt::Password\n  raise(PasswordHashNotSet.new(\"Password hash not set\"))\nelse\n  (@bcrypt.as(Crypto::Bcrypt::Password)).verify(password)\nend\n"}},{"id":"password=(password:String):String-instance-method","html_id":"password=(password:String):String-instance-method","name":"password=","doc":"Set password\n\nExample:\n```crystal\nauthentication = Authentication::Base.new\nauthentication.password = \"test\" # => \"$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K\"\n```","summary":"<p>Set password</p>","abstract":false,"args":[{"name":"password","doc":null,"default_value":"","external_name":"password","restriction":"String"}],"args_string":"(password : String) : String","source_link":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/authentication.cr#L39","def":{"name":"password=","args":[{"name":"password","doc":null,"default_value":"","external_name":"password","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"check\n@bcrypt = Crypto::Bcrypt::Password.create(password, cost: @@cost)\n@bcrypt.to_s\n"}},{"id":"password_hash:String-instance-method","html_id":"password_hash:String-instance-method","name":"password_hash","doc":"Get password_hash\n\nExample:\n```crystal\nauthentication = Authentication::Base.new set_password_hash: \"$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K\"\nauthentication.password_hash # => \"$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K\"\n```","summary":"<p>Get password_hash</p>","abstract":false,"args":[],"args_string":" : String","source_link":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/authentication.cr#L52","def":{"name":"password_hash","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"@bcrypt.to_s"}},{"id":"password_hash=(set_password_hash:String):String-instance-method","html_id":"password_hash=(set_password_hash:String):String-instance-method","name":"password_hash=","doc":"Set password_hash\n\nExample:\n```crystal\nauthentication = Authentication::Base.new\nauthentication.password_hash = \"$2a$16$YXplcnR5dWlvcHFzZGZna.zN8.evmDPoNK.n.l6cx0YKKnw37jd9K\"\n```","summary":"<p>Set password_hash</p>","abstract":false,"args":[{"name":"set_password_hash","doc":null,"default_value":"","external_name":"set_password_hash","restriction":"String"}],"args_string":"(set_password_hash : String) : String","source_link":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/authentication.cr#L63","def":{"name":"password_hash=","args":[{"name":"set_password_hash","doc":null,"default_value":"","external_name":"set_password_hash","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"@bcrypt = Crypto::Bcrypt::Password.new(set_password_hash)\n@bcrypt.to_s\n"}}],"macros":[],"types":[]},{"html_id":"github.com/BecauseOfProg/authentication/Authentication/CostTooHigh","path":"Authentication/CostTooHigh.html","kind":"class","full_name":"Authentication::CostTooHigh","name":"CostTooHigh","abstract":false,"superclass":{"html_id":"github.com/BecauseOfProg/authentication/Authentication/Exception","kind":"class","full_name":"Authentication::Exception","name":"Exception"},"ancestors":[{"html_id":"github.com/BecauseOfProg/authentication/Authentication/Exception","kind":"class","full_name":"Authentication::Exception","name":"Exception"},{"html_id":"github.com/BecauseOfProg/authentication/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"github.com/BecauseOfProg/authentication/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/BecauseOfProg/authentication/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"exceptions.cr","line_number":5,"url":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/exceptions.cr"}],"repository_name":"github.com/BecauseOfProg/authentication","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/BecauseOfProg/authentication/Authentication","kind":"module","full_name":"Authentication","name":"Authentication"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[]},{"html_id":"github.com/BecauseOfProg/authentication/Authentication/CostTooLow","path":"Authentication/CostTooLow.html","kind":"class","full_name":"Authentication::CostTooLow","name":"CostTooLow","abstract":false,"superclass":{"html_id":"github.com/BecauseOfProg/authentication/Authentication/Exception","kind":"class","full_name":"Authentication::Exception","name":"Exception"},"ancestors":[{"html_id":"github.com/BecauseOfProg/authentication/Authentication/Exception","kind":"class","full_name":"Authentication::Exception","name":"Exception"},{"html_id":"github.com/BecauseOfProg/authentication/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"github.com/BecauseOfProg/authentication/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/BecauseOfProg/authentication/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"exceptions.cr","line_number":8,"url":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/exceptions.cr"}],"repository_name":"github.com/BecauseOfProg/authentication","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/BecauseOfProg/authentication/Authentication","kind":"module","full_name":"Authentication","name":"Authentication"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[]},{"html_id":"github.com/BecauseOfProg/authentication/Authentication/Exception","path":"Authentication/Exception.html","kind":"class","full_name":"Authentication::Exception","name":"Exception","abstract":false,"superclass":{"html_id":"github.com/BecauseOfProg/authentication/Exception","kind":"class","full_name":"Exception","name":"Exception"},"ancestors":[{"html_id":"github.com/BecauseOfProg/authentication/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"github.com/BecauseOfProg/authentication/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/BecauseOfProg/authentication/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"exceptions.cr","line_number":2,"url":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/exceptions.cr"}],"repository_name":"github.com/BecauseOfProg/authentication","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[{"html_id":"github.com/BecauseOfProg/authentication/Authentication/CostTooHigh","kind":"class","full_name":"Authentication::CostTooHigh","name":"CostTooHigh"},{"html_id":"github.com/BecauseOfProg/authentication/Authentication/CostTooLow","kind":"class","full_name":"Authentication::CostTooLow","name":"CostTooLow"},{"html_id":"github.com/BecauseOfProg/authentication/Authentication/PasswordHashNotSet","kind":"class","full_name":"Authentication::PasswordHashNotSet","name":"PasswordHashNotSet"},{"html_id":"github.com/BecauseOfProg/authentication/Authentication/PasswordTooLong","kind":"class","full_name":"Authentication::PasswordTooLong","name":"PasswordTooLong"},{"html_id":"github.com/BecauseOfProg/authentication/Authentication/PasswordTooShort","kind":"class","full_name":"Authentication::PasswordTooShort","name":"PasswordTooShort"}],"including_types":[],"namespace":{"html_id":"github.com/BecauseOfProg/authentication/Authentication","kind":"module","full_name":"Authentication","name":"Authentication"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[]},{"html_id":"github.com/BecauseOfProg/authentication/Authentication/PasswordHashNotSet","path":"Authentication/PasswordHashNotSet.html","kind":"class","full_name":"Authentication::PasswordHashNotSet","name":"PasswordHashNotSet","abstract":false,"superclass":{"html_id":"github.com/BecauseOfProg/authentication/Authentication/Exception","kind":"class","full_name":"Authentication::Exception","name":"Exception"},"ancestors":[{"html_id":"github.com/BecauseOfProg/authentication/Authentication/Exception","kind":"class","full_name":"Authentication::Exception","name":"Exception"},{"html_id":"github.com/BecauseOfProg/authentication/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"github.com/BecauseOfProg/authentication/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/BecauseOfProg/authentication/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"exceptions.cr","line_number":11,"url":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/exceptions.cr"}],"repository_name":"github.com/BecauseOfProg/authentication","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/BecauseOfProg/authentication/Authentication","kind":"module","full_name":"Authentication","name":"Authentication"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[]},{"html_id":"github.com/BecauseOfProg/authentication/Authentication/PasswordTooLong","path":"Authentication/PasswordTooLong.html","kind":"class","full_name":"Authentication::PasswordTooLong","name":"PasswordTooLong","abstract":false,"superclass":{"html_id":"github.com/BecauseOfProg/authentication/Authentication/Exception","kind":"class","full_name":"Authentication::Exception","name":"Exception"},"ancestors":[{"html_id":"github.com/BecauseOfProg/authentication/Authentication/Exception","kind":"class","full_name":"Authentication::Exception","name":"Exception"},{"html_id":"github.com/BecauseOfProg/authentication/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"github.com/BecauseOfProg/authentication/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/BecauseOfProg/authentication/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"exceptions.cr","line_number":14,"url":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/exceptions.cr"}],"repository_name":"github.com/BecauseOfProg/authentication","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/BecauseOfProg/authentication/Authentication","kind":"module","full_name":"Authentication","name":"Authentication"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[]},{"html_id":"github.com/BecauseOfProg/authentication/Authentication/PasswordTooShort","path":"Authentication/PasswordTooShort.html","kind":"class","full_name":"Authentication::PasswordTooShort","name":"PasswordTooShort","abstract":false,"superclass":{"html_id":"github.com/BecauseOfProg/authentication/Authentication/Exception","kind":"class","full_name":"Authentication::Exception","name":"Exception"},"ancestors":[{"html_id":"github.com/BecauseOfProg/authentication/Authentication/Exception","kind":"class","full_name":"Authentication::Exception","name":"Exception"},{"html_id":"github.com/BecauseOfProg/authentication/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"github.com/BecauseOfProg/authentication/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/BecauseOfProg/authentication/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"exceptions.cr","line_number":17,"url":"https://github.com/BecauseOfProg/authentication/blob/8da0cfae172538bf6566d54baa78a6f4a5990cd5/src/exceptions.cr"}],"repository_name":"github.com/BecauseOfProg/authentication","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/BecauseOfProg/authentication/Authentication","kind":"module","full_name":"Authentication","name":"Authentication"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[]}]}]}})