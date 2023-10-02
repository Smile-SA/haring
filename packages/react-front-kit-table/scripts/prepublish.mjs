import { copyFile } from 'node:fs/promises';

await copyFile('../../README.md', './README.md');
await copyFile('../../LICENSE', './LICENSE');
