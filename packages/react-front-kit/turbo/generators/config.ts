import type { PlopTypes } from '@turbo/gen';
import type { Answers, Inquirer } from 'inquirer';
import type { ActionType } from 'node-plop';

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator('react-component', {
    actions: (data: Answers | undefined): ActionType[] => {
      const actions: ActionType[] = [
        {
          path: 'src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/component.hbs',
          type: 'add',
        },
        {
          path: 'src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile:
            data?.type === 'pages'
              ? 'templates/pageStory.hbs'
              : 'templates/story.hbs',
          type: 'add',
        },
      ];
      if (data?.type !== 'pages') {
        actions.push({
          path: 'src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'templates/test.hbs',
          type: 'add',
        });
      }
      if (data?.index) {
        actions.push({
          path: 'src/index.tsx',
          pattern: /(\/\/ component exports)/g,
          template:
            "export * from './{{path}}/{{pascalCase name}}/{{pascalCase name}}';",
          type: 'append',
        });
      }
      return actions;
    },
    description: 'Adds a new react component',
    prompts: async (inquirer: Inquirer): Promise<Answers> => {
      const { type } = await inquirer.prompt({
        choices: [
          {
            name: 'Component',
            value: 'components',
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
        default: `3-custom/${capitalizedType}`,
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
      return { index, name, path, type };
    },
  });
}
