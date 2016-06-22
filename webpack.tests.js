const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const Radium = require('radium');

chai.use(chaiEnzyme());
Radium.TestMode.enable();

const context = require.context('./src', true, /__tests__\/.*-test\.jsx?$/);
context.keys().forEach(context);
