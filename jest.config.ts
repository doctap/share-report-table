import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // указываем Jest, что используем TypeScript
  preset: 'ts-jest',

  // указываем Jest, где находятся файлы с тестами
  roots: [`${__dirname}/src`],

  // указываем Jest, где находятся файлы с компонентами
  moduleNameMapper: {
    '^@/(.*)$': `${__dirname}/src/$1`,
  },

  // указываем Jest, какие файлы нужно тестировать
  testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/?(*.)+(spec|test).+(ts|tsx)'],

  // указываем Jest, какой формат тестов нужно использовать
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  // указываем Jest, какой браузер нужно использовать для запуска тестов в DOM
  testEnvironment: 'jsdom',

  // указываем Jest, какие файлы исключить из тестирования
  modulePathIgnorePatterns: [`/node_modules/`, `/dist/`],

  // указываем Jest, какие расширения файлов поддерживаем
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // указываем Jest, чтобы игнорировал ошибки при компиляции TypeScript
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};

export default config;
