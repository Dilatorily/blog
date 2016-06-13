const errors = require('./errors');
const practices = require('./best-practices');
const strict = require('./strict');
const variables = require('./variables');
const node = require('./node');
const style = require('./style');
const es6 = require('./es6');

const rules = [
    errors,
    practices,
    strict,
    variables,
    node,
    style,
    es6
];

module.exports = Object.assign(...rules);
