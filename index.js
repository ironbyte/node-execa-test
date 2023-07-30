import { execa } from 'execa';
import * as fs from 'fs';

async function run() {
  try {
    const subprocess = execa('docker network ls', {
      shell: '/bin/bash',
    });
    console.log('stdout:', subprocess.stdout);
    console.log('stderr:', subprocess.stderr);

    subprocess.stdout.pipe(fs.createWriteStream('stdout.txt'));
    subprocess.stderr.pipe(fs.createWriteStream('stderr.txt'));
  } catch (error) {
    console.error(error);
  }
}

run();
