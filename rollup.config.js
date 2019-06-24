import plugins from './rollup/plugins/plugins'
import { isProduction } from './rollup/utils/utils'
import pkg from './package.json'

const isProd = isProduction()

export default {
  input: './src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      name: 'bundle',
      sourcemap: !isProd,
      compact: isProd
    },
    {
      file: pkg.module,
      format: 'es',
      name: 'bundle',
      sourcemap: !isProd,
      compact: isProd
    }
  ],
  watch: {
    exclude: 'node_modules/**',
    include: 'src/**'
  },
  plugins: [...plugins]
}
