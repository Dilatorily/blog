export default require.ensure([], (require) => {
  require.context('./', false, /\.png$/);
});
