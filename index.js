'use strict';

const _ = require('lodash');
const loaderUtils = require('loader-utils');

module.exports = function (source) {
    const options = loaderUtils.getOptions(this) || {};

    if (_.isRegExp(_.templateSettings.escape)) {
        _.templateSettings.escape = options.escape;
    }
    if (_.isRegExp(_.templateSettings.evaluate)) {
        _.templateSettings.evaluate = options.evaluate;
    }
    if (_.isRegExp(_.templateSettings.interpolate)) {
        _.templateSettings.interpolate = options.interpolate;
    }
    if (_.isObject(options.imports)) {
        _.templateSettings.imports = options.imports;
    }

    const compiled = _.template(source);

    return 'module.exports = ' + JSON.stringify(compiled) + ';';
};