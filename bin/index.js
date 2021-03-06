#!/usr/bin/env node

const path = require('path');
const minimist = require('minimist');
const templateBuilder = require('../lib/template-builder');

const cwd = process.cwd();
const argv = minimist(process.argv.slice(2));
const templatesPath = argv.path || './templates';
const layoutFile = argv.layout || 'default.hbs';
const outputPath = argv.output || './dist';

templateBuilder({
  path: path.resolve(cwd, templatesPath),
  layout: layoutFile,
  output: path.resolve(cwd, outputPath),
  watch: argv.watch,
  buildComponents: argv.buildComponents
});