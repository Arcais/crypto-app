SystemJS.config({
  babelOptions: {
    'plugins': [
      'babel-plugin-syntax-class-properties',
      'babel-plugin-transform-es2015-destructuring',
      'babel-plugin-transform-object-rest-spread',
      'babel-plugin-transform-decorators-legacy',
      'babel-plugin-transform-class-properties',
      'babel-plugin-syntax-async-functions',
      'babel-plugin-transform-es2015-spread',
      'babel-plugin-transform-runtime-constructor-name'
    ],
    'es2016': false,
    'es2015': false,
    'stage3': false,
    'stage2': true,
    'stage1': true
  },
  arvaOptions: {
    'iconOptions': {
      'form': 'rounded',
      'thickness': 'bold'
    }
  },
  paths: {
    'npm:': 'jspm_packages/npm/',
    'github:': 'jspm_packages/github/',
    'app/': 'src/',
    'bitbucket:': 'jspm_packages/bitbucket/'
  },
  browserConfig: {
    'baseURL': '/arva-seed'
  },
  devConfig: {
    'map': {
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.12',
      'babel-plugin-transform-decorators': 'npm:babel-plugin-transform-decorators@6.8.0',
      'module': 'npm:jspm-nodelibs-module@0.2.0',
      'http': 'npm:jspm-nodelibs-http@0.2.0',
      'url': 'npm:jspm-nodelibs-url@0.2.0',
      'core-js': 'npm:core-js@2.5.3',
      'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.13.0',
      'babel-plugin-transform-async-functions': 'npm:babel-plugin-transform-async-functions@6.8.0',
      'babel-plugin-transform-runtime-constructor-name': 'github:bizboard/babel-plugin-transform-runtime-constructor-name@master',
      'babel-plugin-transform-es2015-classes': 'npm:babel-plugin-transform-es2015-classes@6.9.0',
      'babel-plugin-transform-builtin-extend': 'npm:babel-plugin-transform-builtin-extend@1.1.0',
      'babel-plugin-transform-es2015-for-of': 'npm:babel-plugin-transform-es2015-for-of@6.8.0'
    },
    'packages': {
      'npm:babel-plugin-transform-decorators@6.8.0': {
        'map': {
          'babel-helper-define-map': 'npm:babel-helper-define-map@6.9.0',
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-helper-explode-class': 'npm:babel-helper-explode-class@6.8.0',
          'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.13.0',
          'babel-template': 'npm:babel-template@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0'
        }
      },
      'npm:babel-helper-explode-class@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0',
          'babel-helper-bindify-decorators': 'npm:babel-helper-bindify-decorators@6.8.0',
          'babel-traverse': 'npm:babel-traverse@6.26.0'
        }
      },
      'npm:babel-helper-bindify-decorators@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-traverse': 'npm:babel-traverse@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0'
        }
      },
      'npm:stream-http@2.3.0': {
        'map': {
          'inherits': 'npm:inherits@2.0.3',
          'readable-stream': 'npm:readable-stream@2.3.4',
          'builtin-status-codes': 'npm:builtin-status-codes@2.0.0',
          'xtend': 'npm:xtend@4.0.1',
          'to-arraybuffer': 'npm:to-arraybuffer@1.0.1'
        }
      },
      'npm:url@0.11.0': {
        'map': {
          'punycode': 'npm:punycode@1.3.2',
          'querystring': 'npm:querystring@0.2.0'
        }
      },
      'npm:babel-plugin-transform-async-functions@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-plugin-syntax-async-functions': 'npm:babel-plugin-syntax-async-functions@6.13.0'
        }
      },
      'npm:babel-helper-define-map@6.9.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0',
          'lodash': 'npm:lodash@4.17.5',
          'babel-helper-function-name': 'npm:babel-helper-function-name@6.24.1'
        }
      },
      'npm:babel-plugin-transform-es2015-classes@6.9.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0',
          'babel-helper-function-name': 'npm:babel-helper-function-name@6.24.1',
          'babel-helper-replace-supers': 'npm:babel-helper-replace-supers@6.8.0',
          'babel-helper-optimise-call-expression': 'npm:babel-helper-optimise-call-expression@6.8.0',
          'babel-helper-define-map': 'npm:babel-helper-define-map@6.9.0',
          'babel-messages': 'npm:babel-messages@6.23.0',
          'babel-template': 'npm:babel-template@6.26.0',
          'babel-traverse': 'npm:babel-traverse@6.26.0'
        }
      },
      'npm:babel-helper-replace-supers@6.8.0': {
        'map': {
          'babel-messages': 'npm:babel-messages@6.23.0',
          'babel-helper-optimise-call-expression': 'npm:babel-helper-optimise-call-expression@6.8.0',
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-traverse': 'npm:babel-traverse@6.26.0',
          'babel-template': 'npm:babel-template@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0'
        }
      },
      'npm:babel-helper-optimise-call-expression@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0'
        }
      },
      'npm:babel-plugin-transform-builtin-extend@1.1.0': {
        'map': {
          'babel-template': 'npm:babel-template@6.26.0',
          'babel-runtime': 'npm:babel-runtime@6.26.0'
        }
      },
      'npm:babel-plugin-transform-es2015-for-of@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0'
        }
      },
      'npm:jspm-nodelibs-http@0.2.0': {
        'map': {
          'http-browserify': 'npm:stream-http@2.3.0'
        }
      },
      'npm:jspm-nodelibs-url@0.2.0': {
        'map': {
          'url-browserify': 'npm:url@0.11.0'
        }
      }
    }
  },
  transpiler: 'plugin-babel',
  packages: {
    'app': {
      'main': 'main.js',
      'format': '',
      'meta': {
        '*.js': {
          'loader': 'plugin-babel'
        },
        '*.css': {
          'loader': 'css'
        },
        '*.svg': {
          'loader': 'arva-js/utils/ImageLoader.js'
        },
        '*.gif': {
          'loader': 'arva-js/utils/ImageLoader.js'
        },
        '*.png': {
          'loader': 'arva-js/utils/ImageLoader.js'
        },
        '*.jpg': {
          'loader': 'arva-js/utils/ImageLoader.js'
        }
      }
    }
  },
  map: {
    'text': 'github:arva/arva-js@develop/utils/IconLoader.js'
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json',
    'bitbucket:*/*.json',
    'bitbucket:*.json'
  ],
  map: {
    'babel-plugin-syntax-class-properties': 'npm:babel-plugin-syntax-class-properties@6.13.0',
    'babel-plugin-transform-es2015-spread': 'npm:babel-plugin-transform-es2015-spread@6.22.0',
    'babel-plugin-syntax-async-functions': 'npm:babel-plugin-syntax-async-functions@6.13.0',
    'babel-plugin-transform-class-properties': 'npm:babel-plugin-transform-class-properties@6.24.1',
    'babel-plugin-transform-decorators-legacy': 'npm:babel-plugin-transform-decorators-legacy@1.3.4',
    'babel-plugin-transform-object-rest-spread': 'npm:babel-plugin-transform-object-rest-spread@6.26.0',
    'babel-plugin-transform-es2015-destructuring': 'npm:babel-plugin-transform-es2015-destructuring@6.23.0',
    'arva-kit': 'bitbucket:bizboard/arva-kit@studio',
    'fastclick': 'npm:fastclick@1.0.6',
    'famous-autosizetextarea': 'github:ijzerenhein/famous-autosizetextarea@0.3.1',
    'es6-map': 'npm:es6-map@0.1.5',
    'arva-js': 'github:arva/arva-js@develop',
    'assert': 'npm:jspm-nodelibs-assert@0.2.1',
    'babel-polyfill': 'npm:babel-polyfill@6.9.1',
    'buffer': 'npm:jspm-nodelibs-buffer@0.2.3',
    'child_process': 'npm:jspm-nodelibs-child_process@0.2.0',
    'constants': 'npm:jspm-nodelibs-constants@0.2.1',
    'crypto': 'npm:jspm-nodelibs-crypto@0.2.0',
    'css': 'github:systemjs/plugin-css@0.1.23',
    'events': 'npm:jspm-nodelibs-events@0.2.2',
    'famous': 'github:bizboard/famous@wip-data-binding',
    'famous-flex': 'github:bizboard/famous-flex@master',
    'firebase': 'github:firebase/firebase-bower@3.9.0',
    'fs': 'npm:jspm-nodelibs-fs@0.2.1',
    'lodash': 'npm:lodash@4.17.5',
    'os': 'npm:jspm-nodelibs-os@0.2.0',
    'path': 'npm:jspm-nodelibs-path@0.2.0',
    'process': 'npm:jspm-nodelibs-process@0.2.0',
    'stream': 'npm:jspm-nodelibs-stream@0.2.1',
    'string_decoder': 'npm:jspm-nodelibs-string_decoder@0.2.2',
    'timers': 'npm:jspm-nodelibs-timers@0.2.1',
    'util': 'npm:jspm-nodelibs-util@0.2.2',
    'vm': 'npm:jspm-nodelibs-vm@0.2.1'
  },
  packages: {
    'npm:stream-browserify@2.0.1': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.3.4',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:timers-browserify@1.4.2': {
      'map': {
        'process': 'npm:process@0.11.10'
      }
    },
    'npm:babel-polyfill@6.9.1': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.9.5',
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'core-js': 'npm:core-js@2.5.3'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.6',
        'miller-rabin': 'npm:miller-rabin@4.0.1',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'randombytes': 'npm:randombytes@2.0.6',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'elliptic': 'npm:elliptic@6.4.0',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.6',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'browserify-des': 'npm:browserify-des@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.1.1'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:jspm-nodelibs-os@0.2.0': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'npm:jspm-nodelibs-crypto@0.2.0': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.12.0'
      }
    },
    'github:bizboard/famous-flex@master': {
      'map': {
        'es6-map': 'npm:es6-map@0.1.5'
      }
    },
    'npm:lodash-decorators@3.0.2': {
      'map': {
        'lodash': 'npm:lodash@4.17.5'
      }
    },
    'npm:es6-map@0.1.5': {
      'map': {
        'd': 'npm:d@1.0.0',
        'es6-iterator': 'npm:es6-iterator@2.0.3',
        'event-emitter': 'npm:event-emitter@0.3.5',
        'es6-symbol': 'npm:es6-symbol@3.1.1',
        'es6-set': 'npm:es6-set@0.1.5',
        'es5-ext': 'npm:es5-ext@0.10.38'
      }
    },
    'npm:es6-symbol@3.1.1': {
      'map': {
        'es5-ext': 'npm:es5-ext@0.10.38',
        'd': 'npm:d@1.0.0'
      }
    },
    'npm:event-emitter@0.3.5': {
      'map': {
        'es5-ext': 'npm:es5-ext@0.10.38',
        'd': 'npm:d@1.0.0'
      }
    },
    'npm:es6-set@0.1.5': {
      'map': {
        'es5-ext': 'npm:es5-ext@0.10.38',
        'es6-iterator': 'npm:es6-iterator@2.0.3',
        'es6-symbol': 'npm:es6-symbol@3.1.1',
        'event-emitter': 'npm:event-emitter@0.3.5',
        'd': 'npm:d@1.0.0'
      }
    },
    'npm:d@1.0.0': {
      'map': {
        'es5-ext': 'npm:es5-ext@0.10.38'
      }
    },
    'github:arva/arva-js@develop': {
      'map': {
        'firebase': 'github:firebase/firebase-bower@3.9.0',
        'bowser': 'npm:bowser@1.4.3',
        'camelcase': 'npm:camelcase@2.1.1',
        'eventemitter3': 'npm:eventemitter3@1.2.0',
        'fastclick': 'npm:fastclick@1.0.6',
        'lodash': 'npm:lodash@4.17.5',
        'lodash-decorators': 'npm:lodash-decorators@3.0.2',
        'ordered-hashmap': 'npm:ordered-hashmap@1.0.0',
        'xml2js': 'npm:xml2js@0.4.19',
        'famous-flex': 'github:bizboard/famous-flex@master',
        'request-animation-frame-mock': 'github:erykpiast/request-animation-frame-mock@0.1.8'
      }
    },
    'npm:xml2js@0.4.19': {
      'map': {
        'xmlbuilder': 'npm:xmlbuilder@9.0.7',
        'sax': 'npm:sax@1.2.4'
      }
    },
    'npm:color@0.11.4': {
      'map': {
        'color-string': 'npm:color-string@0.3.0',
        'color-convert': 'npm:color-convert@1.9.1',
        'clone': 'npm:clone@1.0.3'
      }
    },
    'npm:color-convert@1.9.1': {
      'map': {
        'color-name': 'npm:color-name@1.1.3'
      }
    },
    'npm:color-string@0.3.0': {
      'map': {
        'color-name': 'npm:color-name@1.1.3'
      }
    },
    'npm:babel-plugin-transform-es2015-destructuring@6.23.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0'
      }
    },
    'npm:babel-runtime@6.26.0': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.11.1',
        'core-js': 'npm:core-js@2.5.3'
      }
    },
    'npm:babel-plugin-transform-object-rest-spread@6.26.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'babel-plugin-syntax-object-rest-spread': 'npm:babel-plugin-syntax-object-rest-spread@6.13.0'
      }
    },
    'npm:babel-plugin-transform-decorators-legacy@1.3.4': {
      'map': {
        'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.13.0',
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'babel-template': 'npm:babel-template@6.26.0'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'ansi-styles': 'npm:ansi-styles@2.2.1',
        'has-ansi': 'npm:has-ansi@2.0.0',
        'supports-color': 'npm:supports-color@2.0.0',
        'strip-ansi': 'npm:strip-ansi@3.0.1'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'npm:babel-template@6.26.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'babel-types': 'npm:babel-types@6.26.0',
        'babel-traverse': 'npm:babel-traverse@6.26.0',
        'babylon': 'npm:babylon@6.18.0',
        'lodash': 'npm:lodash@4.17.5'
      }
    },
    'npm:babel-types@6.26.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'lodash': 'npm:lodash@4.17.5',
        'to-fast-properties': 'npm:to-fast-properties@1.0.3',
        'esutils': 'npm:esutils@2.0.2'
      }
    },
    'npm:babel-traverse@6.26.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'babel-types': 'npm:babel-types@6.26.0',
        'babylon': 'npm:babylon@6.18.0',
        'lodash': 'npm:lodash@4.17.5',
        'babel-code-frame': 'npm:babel-code-frame@6.26.0',
        'debug': 'npm:debug@2.6.9',
        'babel-messages': 'npm:babel-messages@6.23.0',
        'invariant': 'npm:invariant@2.2.2',
        'globals': 'npm:globals@9.18.0'
      }
    },
    'npm:babel-messages@6.23.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0'
      }
    },
    'npm:babel-code-frame@6.26.0': {
      'map': {
        'esutils': 'npm:esutils@2.0.2',
        'js-tokens': 'npm:js-tokens@3.0.2',
        'chalk': 'npm:chalk@1.1.3'
      }
    },
    'npm:debug@2.6.9': {
      'map': {
        'ms': 'npm:ms@2.0.0'
      }
    },
    'npm:invariant@2.2.2': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1'
      }
    },
    'npm:loose-envify@1.3.1': {
      'map': {
        'js-tokens': 'npm:js-tokens@3.0.2'
      }
    },
    'npm:jspm-nodelibs-stream@0.2.1': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:jspm-nodelibs-buffer@0.2.3': {
      'map': {
        'buffer': 'npm:buffer@5.0.8'
      }
    },
    'npm:string_decoder@1.0.3': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:buffer@5.0.8': {
      'map': {
        'ieee754': 'npm:ieee754@1.1.8',
        'base64-js': 'npm:base64-js@1.2.1'
      }
    },
    'npm:crypto-browserify@3.12.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'randomfill': 'npm:randomfill@1.0.3',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'browserify-sign': 'npm:browserify-sign@4.0.4',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'create-hash': 'npm:create-hash@1.1.3',
        'pbkdf2': 'npm:pbkdf2@3.0.14',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'randombytes': 'npm:randombytes@2.0.6'
      }
    },
    'npm:randomfill@1.0.3': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'randombytes': 'npm:randombytes@2.0.6'
      }
    },
    'npm:create-hmac@1.1.6': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'create-hash': 'npm:create-hash@1.1.3',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'sha.js': 'npm:sha.js@2.4.10',
        'ripemd160': 'npm:ripemd160@2.0.1'
      }
    },
    'npm:create-hash@1.1.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'sha.js': 'npm:sha.js@2.4.10',
        'ripemd160': 'npm:ripemd160@2.0.1'
      }
    },
    'npm:randombytes@2.0.6': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:browserify-sign@4.0.4': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.6',
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.1.3',
        'bn.js': 'npm:bn.js@4.11.8',
        'elliptic': 'npm:elliptic@6.4.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.1.0'
      }
    },
    'npm:pbkdf2@3.0.14': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'create-hash': 'npm:create-hash@1.1.3',
        'sha.js': 'npm:sha.js@2.4.10',
        'ripemd160': 'npm:ripemd160@2.0.1'
      }
    },
    'npm:ripemd160@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'hash-base': 'npm:hash-base@2.0.2'
      }
    },
    'npm:cipher-base@1.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:elliptic@6.4.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.8',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
        'hmac-drbg': 'npm:hmac-drbg@1.0.1',
        'brorand': 'npm:brorand@1.1.0',
        'hash.js': 'npm:hash.js@1.1.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:parse-asn1@5.1.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'pbkdf2': 'npm:pbkdf2@3.0.14',
        'browserify-aes': 'npm:browserify-aes@1.1.1',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'asn1.js': 'npm:asn1.js@4.9.2'
      }
    },
    'npm:evp_bytestokey@1.0.3': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'md5.js': 'npm:md5.js@1.3.4'
      }
    },
    'npm:browserify-aes@1.1.1': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'inherits': 'npm:inherits@2.0.3',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:miller-rabin@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'brorand': 'npm:brorand@1.1.0'
      }
    },
    'npm:hmac-drbg@1.0.1': {
      'map': {
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
        'hash.js': 'npm:hash.js@1.1.3'
      }
    },
    'npm:jspm-nodelibs-string_decoder@0.2.2': {
      'map': {
        'string_decoder': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:hash.js@1.1.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hash-base@2.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:asn1.js@4.9.2': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:md5.js@1.3.4': {
      'map': {
        'hash-base': 'npm:hash-base@3.0.4',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:hash-base@3.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:babel-plugin-transform-class-properties@6.24.1': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'babel-template': 'npm:babel-template@6.26.0',
        'babel-helper-function-name': 'npm:babel-helper-function-name@6.24.1',
        'babel-plugin-syntax-class-properties': 'npm:babel-plugin-syntax-class-properties@6.13.0'
      }
    },
    'npm:babel-helper-function-name@6.24.1': {
      'map': {
        'babel-template': 'npm:babel-template@6.26.0',
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'babel-types': 'npm:babel-types@6.26.0',
        'babel-helper-get-function-arity': 'npm:babel-helper-get-function-arity@6.24.1',
        'babel-traverse': 'npm:babel-traverse@6.26.0'
      }
    },
    'npm:babel-helper-get-function-arity@6.24.1': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0',
        'babel-types': 'npm:babel-types@6.26.0'
      }
    },
    'npm:babel-plugin-transform-es2015-spread@6.22.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0'
      }
    },
    'bitbucket:bizboard/arva-kit@studio': {
      'map': {
        'rgbcolor': 'npm:rgbcolor@0.0.4',
        'bowser': 'npm:bowser@1.4.3',
        'degrees-radians': 'npm:degrees-radians@1.0.3',
        'color': 'npm:color@0.11.4',
        'lodash': 'npm:lodash@4.17.5',
        'famous-autosizetextarea': 'github:ijzerenhein/famous-autosizetextarea@0.3.1',
        'famous-bkimagesurface': 'github:bizboard/famous-bkimagesurface@master',
        'arva-js': 'github:arva/arva-js@develop'
      }
    },
    'npm:es6-iterator@2.0.3': {
      'map': {
        'es6-symbol': 'npm:es6-symbol@3.1.1',
        'd': 'npm:d@1.0.0',
        'es5-ext': 'npm:es5-ext@0.10.38'
      }
    },
    'npm:es5-ext@0.10.38': {
      'map': {
        'es6-iterator': 'npm:es6-iterator@2.0.3',
        'es6-symbol': 'npm:es6-symbol@3.1.1'
      }
    },
    'npm:readable-stream@2.3.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'string_decoder': 'npm:string_decoder@1.0.3',
        'process-nextick-args': 'npm:process-nextick-args@2.0.0',
        'isarray': 'npm:isarray@1.0.0',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'util-deprecate': 'npm:util-deprecate@1.0.2'
      }
    },
    'npm:sha.js@2.4.10': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:jspm-nodelibs-timers@0.2.1': {
      'map': {
        'timers-browserify': 'npm:timers-browserify@1.4.2'
      }
    }
  }
});
