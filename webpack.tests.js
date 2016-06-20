const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
chai.use(chaiEnzyme());

const context = require.context('./src', true, /__tests__\/.*-test\.jsx?$/);
context.keys().forEach(context);
