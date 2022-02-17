import linaria from '@linaria/esbuild';
import { build, Plugin } from 'esbuild';

const isProduction = process.env.NODE_ENV === 'production';

build({
  bundle: true,
  entryPoints: ['src/build/index.ts'],
  external: ['esbuild'],
  loader: {
    '.eot': 'file',
    '.jpg': 'file',
    '.svg': 'file',
    '.ttf': 'file',
    '.woff': 'file',
    '.woff2': 'file',
  },
  minify: isProduction,
  outdir: 'build',
  platform: 'node',
  plugins: [linaria({ sourceMap: !isProduction }) as Plugin],
  publicPath: '/assets',
}).catch(() => process.exit(1));
