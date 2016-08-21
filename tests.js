import Jasmine from 'jasmine'; // eslint-disable-line import/no-extraneous-dependencies
import SpecReporter from 'jasmine-spec-reporter'; // eslint-disable-line import/no-extraneous-dependencies, max-len
import { jsdom } from 'jsdom'; // eslint-disable-line import/no-extraneous-dependencies

const window = `
  <html>
    <body>
      <div id="root"></div>
    </body>
  </html>
`;

const reset = () => {
  global.window = jsdom(window).defaultView;
  global.document = global.window.document;
  global.navigator = global.window.navigator;
};

export default () => {
  reset();

  const runner = new Jasmine();
  runner.loadConfig({
    spec_dir: 'src',
    spec_files: ['**/__tests__/*-test.{js,jsx}'],
  });
  runner.configureDefaultReporter({ print: () => {} });
  runner.env.addReporter(new SpecReporter());
  beforeEach(() => {
    const jasmineEnzyme = require('jasmine-enzyme'); // eslint-disable-line import/no-extraneous-dependencies, global-require, max-len

    jasmineEnzyme();
    reset();
  });
  runner.execute();
};
