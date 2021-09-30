#!/usr/bin/env node
const commander = require('commander');
const pkg = require('../package.json');

commander
  .version(pkg.version)
  .command('key', 'Manage API Key -- https://nomics.com')
  .command('check', 'Check Coin Price Information')
  .parse(process.argv);
