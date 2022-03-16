import linaria from '@linaria/esbuild';
import { build, Plugin } from 'esbuild';

const isProduction = process.env.NODE_ENV === 'production';

const compile = async () => {
  try {
    await build({
      bundle: true,
      define: { 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) },
      entryPoints: ['src/build/index.ts'],
      external: ['esbuild'],
      loader: {
        '.eot': 'file',
        '.jpg': 'file',
        '.ttf': 'file',
        '.woff': 'file',
        '.woff2': 'file',
      },
      minify: isProduction,
      outdir: 'build',
      platform: 'node',
      plugins: [linaria({ sourceMap: !isProduction }) as Plugin],
      publicPath: '/assets',
    });
  } catch (error) {
    process.exit(1);
  }
};

compile();

export default compile;
