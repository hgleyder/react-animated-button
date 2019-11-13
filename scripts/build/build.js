const glob = require('glob');
const { execSync } = require('child_process');

const {
  renderCSSFile,
  replaceSCSSImportsInFolder,
  copyStaticFolderToDist,
  buildIndex,
} = require('./build.tools');

const { modules } = require('../../config/modules.js');

modules.forEach((mod) => {
  glob(`src/${mod}/**/*.scss`, (error, files) => {
    files.forEach(file => renderCSSFile(file));
  });

  execSync(`babel src/${mod} --out-dir dist/${mod} ${process.env.DEVELOPMENT ? '--source-maps' : ''}`, { stdio: 'inherit' });
});

replaceSCSSImportsInFolder('dist');

copyStaticFolderToDist('assets');

buildIndex();
