import { copyFile } from 'node:fs/promises';

await copyFile('../../LICENSE', './LICENSE');
