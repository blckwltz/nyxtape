import {type Config} from 'prettier';

const config: Config = {
  printWidth: 120,
  singleQuote: true,
  bracketSpacing: false,
  plugins: ['prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.css',
      options: {
        singleQuote: false,
      },
    },
  ],
};

export default config;
