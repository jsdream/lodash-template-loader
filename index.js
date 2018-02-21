'use strict';

const _ = require('lodash');
const loaderUtils = require('loader-utils');

module.exports = function (source) {
    const options = loaderUtils.getOptions(this) || {};

    _.templateSettings.imports = _.isObject(options.imports) ? options.imports : {};
    _.templateSettings.imports._ = _;

    if (_.isRegExp(options.escape)) {
        _.templateSettings.escape = options.escape;
    }
    if (_.isRegExp(options.evaluate)) {
        _.templateSettings.evaluate = options.evaluate;
    }
    if (_.isRegExp(options.interpolate)) {
        _.templateSettings.interpolate = options.interpolate;
    }

    const compiled = _.template(source);
    const renderedView = compiled();

    return 'module.exports = function() { return ' + JSON.stringify(renderedView) + '; };';
};