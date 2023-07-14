# 脚手架开发过程

## 1. 获取版本号
    ```javascript
        const version = require('../package.json').version
        program.version(version, '-v --version')
        program.parse(process.argv)
    ```
