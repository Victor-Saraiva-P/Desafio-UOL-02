module.exports = {
  preset: 'ts-jest', // Usa o ts-jest para trabalhar com TypeScript
  testEnvironment: 'node', // Define o ambiente de teste como Node.js
  testMatch: ['**/*.test.ts'], // Procura arquivos de teste com extensão `.test.ts`
  transform: {
    '^.+\\.ts$': 'ts-jest', // Usa ts-jest para transformar arquivos TypeScript
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'], // Ignora transformar arquivos de node_modules
};
