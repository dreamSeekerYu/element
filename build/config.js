/* eslint-disable semi */
var path = require('path')
var fs = require('fs')
var nodeExternals = require('webpack-node-externals')
var Components = require('../components.json')

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'))
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'))
var transitionList = fs.readdirSync(
  path.resolve(__dirname, '../src/transitions')
)
var externals = {}

Object.keys(Components).forEach(function(key) {
  // eslint-disable-next-line semi
  externals[`element-ui/packages/${key}`] = `element-form-plus/lib/${key}`
})

externals['element-ui/src/locale'] = 'element-form-plus/lib/locale'
utilsList.forEach(function(file) {
  // eslint-disable-next-line semi
  file = path.basename(file, '.js')
  externals[
    `element-ui/src/utils/${file}`
    // eslint-disable-next-line semi
  ] = `element-form-plus/lib/utils/${file}`
})
mixinsList.forEach(function(file) {
  // eslint-disable-next-line semi
  file = path.basename(file, '.js')
  externals[
    `element-ui/src/mixins/${file}`
    // eslint-disable-next-line semi
  ] = `element-form-plus/lib/mixins/${file}`
})
transitionList.forEach(function(file) {
  // eslint-disable-next-line semi
  file = path.basename(file, '.js')
  externals[
    `element-ui/src/transitions/${file}`
    // eslint-disable-next-line semi
  ] = `element-form-plus/lib/transitions/${file}`
})

externals = [
  Object.assign(
    {
      // eslint-disable-next-line comma-dangle
      vue: 'vue',
    },
    externals
  ),
  // eslint-disable-next-line comma-dangle
  nodeExternals(),
]

// eslint-disable-next-line semi
exports.externals = externals

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  // eslint-disable-next-line comma-dangle
  'element-ui': path.resolve(__dirname, '../'),
  // eslint-disable-next-line semi
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  // eslint-disable-next-line comma-dangle
  amd: 'vue',
  // eslint-disable-next-line semi
}

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/
