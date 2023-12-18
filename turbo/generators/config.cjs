/* eslint-disable no-await-in-loop */
const { readdir, readFile } = require('node:fs/promises');
const { join } = require('node:path');

async function getPackages() {
  const packages = [];
  const src = './packages';
  const dirs = await readdir(src);
  for (const dir of dirs) {
    const filepath = join(src, dir, 'package.json');
    const file = await readFile(filepath, { encoding: 'utf-8' });
    if (file) {
      try {
        const json = JSON.parse(file);
        if (!json.private) {
          packages.push(dir);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  return packages;
}

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

/** @param plop {import('@turbo/gen').PlopTypes.NodePlopAPI} */
module.exports = (plop) => {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator('react-component', {
    /** @param data {import('inquirer').Answers} */
    actions: (data) => {
      const actions = [
        {
          path: 'packages/{{dir}}/src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/component.hbs',
          type: 'add',
        },
        {
          path: 'packages/{{dir}}/src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile:
            data?.type === 'pages'
              ? 'templates/pageStory.hbs'
              : 'templates/story.hbs',
          type: 'add',
        },
      ];
      if (data?.type !== 'pages') {
        actions.push({
          path: 'packages/{{dir}}/src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'templates/test.hbs',
          type: 'add',
        });
      }
      if (data?.type === 'pages') {
        actions.push({
          path: 'packages/{{dir}}/src/{{path}}/{{pascalCase name}}/Code.mdx{{dir}}',
          templateFile: 'templates/pageCode.hbs',
          type: 'add',
        });
      }
      if (data?.index) {
        actions.push({
          path: 'packages/{{dir}}/src/index.tsx',
          pattern: /(\/\/ component exports)/g,
          template:
            "export { {{pascalCase name}} } from './{{path}}/{{pascalCase name}}/{{pascalCase name}}';",
          type: 'append',
        });

        actions.push({
          path: 'packages/{{dir}}/src/index.tsx',
          pattern: /(\/\/ component exports)/g,
          template:
            "export type { I{{pascalCase name}}Props } from './{{path}}/{{pascalCase name}}/{{pascalCase name}}';",
          type: 'append',
        });
      }
      return actions;
    },
    description: 'Adds a new react component',
    /** @param inquirer {import('inquirer').Inquirer} */
    prompts: async (inquirer) => {
      const { dir } = await inquirer.prompt({
        choices: await getPackages(),
        message: 'For what package ?',
        name: 'dir',
        type: 'list',
      });
      const { type } = await inquirer.prompt({
        choices: [
          {
            name: 'Component',
            value: 'components',
          },
          {
            name: 'Layout',
            value: 'layouts',
          },
          {
            name: 'Page',
            value: 'pages',
          },
        ],
        message: 'What type of component do you want ?',
        name: 'type',
        type: 'list',
      });
      const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
      const { path } = await inquirer.prompt({
        default: capitalizedType,
        message: 'What is the path of the component?',
        name: 'path',
        type: 'input',
      });
      const { name } = await inquirer.prompt({
        message: 'What is the name of the component?',
        name: 'name',
        type: 'input',
      });
      const { index } = await inquirer.prompt({
        default: true,
        message: 'Export component in index file?',
        name: 'index',
        type: 'confirm',
      });
      return { dir, index, name, path, type };
    },
  });
};
