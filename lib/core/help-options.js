const { program } = require('commander')

function helpOptions() {
    // 1. 处理 --version 的操作
    const version = require('../../package.json').version
    program.version(version, '-v --version')

    // 2. 增强其他的 options 操作
    program.option('-s --sheep', 'sheep cli program')
    program.option('-d --dest <dest>', 'a destination folder, 例如：-d src/components')

    // program.on 可以增加自己自定义的想要显示的信息
    program.on('--help', () => {
        console.log('')
        console.log('others:')
        console.log('  aaa')
        console.log('  bbb')
    })
}

module.exports = helpOptions
module.exports.helpOptions = helpOptions