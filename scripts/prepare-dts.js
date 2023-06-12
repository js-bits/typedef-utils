/* eslint-disable no-console */
/// <reference types="node" />

import fs from 'fs';

// Make .d.ts files compatible with CommonJS and ES modules

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (readError, /** @type {string} */ data) => {
  if (readError) {
    return console.log(readError);
  }

  if (data.includes('export = ')) {
    console.log(`Default export is already fixed in ${fileName}`);
    return undefined;
  }

  const result = data.replace('export default ', 'export = ');

  fs.writeFile(fileName, result, 'utf8', writeError => {
    if (writeError) return console.log(writeError);
    console.log(`Default export fixed in ${fileName}`);
    return undefined;
  });

  return undefined;
});
