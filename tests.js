const chai = require('chai'); // eslint-disable-line import/no-extraneous-dependencies
const chaiEnzyme = require('chai-enzyme'); // eslint-disable-line import/no-extraneous-dependencies
const radium = require('radium');

chai.use(chaiEnzyme());
radium.TestMode.enable();

const context = require.context('./src', true, /__tests__\/.*-test\.jsx?$/);
context.keys().forEach(context);
