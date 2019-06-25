import alias from 'rollup-plugin-alias'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import { eslint } from 'rollup-plugin-eslint'
import filesize from 'rollup-plugin-filesize'
import includePaths from 'rollup-plugin-includepaths'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import progress from 'rollup-plugin-progress'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import stylelint from 'rollup-plugin-stylelint'

export default [
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  peerDepsExternal({
    includeDependencies: true
  }),
  eslint(),
  stylelint(),
  includePaths({
    paths: ['./src']
  }),
  alias({
    components: 'components'
  }),
  resolve(),
  babel({
    exclude: 'node_modules/**'
  }),
  commonjs(),
  progress({ clearLine: false }),
  filesize()
]
