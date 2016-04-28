'use strict';

var chalk = require('chalk');

var hagaki = {
  done: (message) => {
    console.log(chalk.green(`[done] ${message}`));
  },
  info: (message) => {
    console.log(chalk.blue(`[done] ${message}`));
  },
  warn: (message) => {
    console.log(chalk.yellow(`[done] ${message}`));
  },
  fail: (message) => {
    console.log(chalk.red(`[done] ${message}`));
  },
  note: (message) => {
    console.log(chalk.gray(`[note] ${message}`));
  }
}

module.exports = hagaki;