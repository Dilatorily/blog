const posts = {};

if (process.env.CLIENT) {
  const files = require.context('./', false, /\.md$/);
  files.keys().forEach((file) => {
    const date = file.slice(2, -3);
    posts[date] = files(file);  // eslint-disable-line global-require
  });
} else {
  const path = require('path'); // eslint-disable-line global-require
  const fs = require('fs'); // eslint-disable-line global-require

  fs.readdirSync(__dirname).forEach((file) => {
    if (file.substr(-3) === '.md') {
      const date = file.slice(0, -3);
      posts[date] = require(path.join(__dirname, file)); // eslint-disable-line global-require
    }
  });
}

export default posts;
