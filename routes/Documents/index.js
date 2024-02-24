const basicInfo = require('./basiclInfo');
const components = require('./components');
const tasks = require('./tasks');

module.exports = {
    ...basicInfo,
    ...tasks,
    ...components
};