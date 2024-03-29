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
      loader: { '.jpg': 'file' },
      minify: isProduction,
      outdir: 'build',
      platform: 'node',
      plugins: [linaria({ sourceMap: !isProduction }) as Plugin],
      publicPath: '/assets',
    });

    await build({
      entryPoints: ['src/build/serviceWorker.ts'],
      minify: isProduction,
      outdir: 'build',
      platform: 'browser',
    });
  } catch (error) {
    process.exit(1);
  }
};

compile();

export default compile;
