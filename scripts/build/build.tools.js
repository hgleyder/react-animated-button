/* eslint no-console: 0 */

const glob = require('glob');
const { render } = require('node-sass');
const { execSync } = require('child_process');
const { basename, dirname } = require('path');
const { outputFileSync } = require('fs-extra');
const replace = require('replace-in-file');
const cpx = require('cpx');
const { resolve } = require('path');

module.exports.renderCSSFile = (file) => {
  const fileName = basename(file, '.scss');
  const fileDir = dirname(file).replace('src', 'dist');
  const outFile = `${fileDir}/${fileName}.css`;
  const outMap = `${fileDir}/${fileName}.css.map`;

  render({
    file,
    outFile,
    outputStyle: 'compressed',
    sourceMap: true,
  }, (error, result) => {
    if (!error) {
      outputFileSync(outFile, result.css, err => err && console.log(err));
      if (process.env.DEVELOPMENT) {
        outputFileSync(outMap, result.map, err => err && console.log(err));
      }
    } else {
      console.log(error);
    }
  });
};

module.exports.replaceSCSSImportsInFolder = (folder) => {
  glob(`${folder}/**/*.{js,js.map}`, (error, files) => {
    files.forEach(async (file) => {
      const options = {
        files: file,
        from: /\.scss/g,
        to: '.css',
      };

      try {
        await replace(options);
      } catch (err) {
        console.error('Error occurred:', err);
      }
    });
  });
};

module.exports.copyStaticFolderToDist = (folder) => {
  cpx.copySync(resolve('src', folder, '**'), resolve('dist', folder));
};

module.exports.buildIndex = () => {
  execSync('babel src/index.js --out-dir dist', { stdio: 'inherit' });
};
