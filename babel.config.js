module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-env', { targets: { node: true } }],
      '@babel/preset-react',
      '@babel/preset-typescript',
      '@linaria',
    ],
  };
};
