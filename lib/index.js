#!/usr/bin/env node
const { program } = require('commander')
const helpOptions = require('./core/help-options.js')
const { createProjectAction } = require('./core/actions.js')

// 1. 配置所有的 options
helpOptions()

// 2. 增加具体的功能操作
program
    .command('create <project> [...others]')
    .description('create vue project into a fold, eg: sheep create airbnb')
    .action(createProjectAction)

// 让 commander 解析 process.argv 参数
program.parse(process.argv)

// 获取额外传递的参数
console.log('1111111', program.opts().dest)