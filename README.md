
# wss-origin

[![NPM version](https://img.shields.io/npm/v/wss-origin.svg?style=flat)](https://npmjs.com/package/wss-origin) [![NPM downloads](https://img.shields.io/npm/dm/wss-origin.svg?style=flat)](https://npmjs.com/package/wss-origin) [![CircleCI](https://circleci.com/gh/zcong1993/wss-origin/tree/master.svg?style=shield)](https://circleci.com/gh/zcong1993/wss-origin/tree/master)

## Install

```sh
$ yarn add wss-origin
```

## Usage

```js
const WssOrigin = require('wss-origin')

const wss = new WssOrigin({
  port: 9999
}, ['http://test.com'])

// client from 'http://test.com' can connect, others will get 403
// node only with option { origin: 'http://test.com' } can pass
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**wss-origin** © [zcong1993](https://github.com/zcong1993), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by zcong1993 with help from contributors ([list](https://github.com/zcong1993/wss-origin/contributors)).

> [github.com/zcong1993](https://github.com/zcong1993) · GitHub [@zcong1993](https://github.com/zcong1993)
