import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'graphql/schema.graphql',
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  generates: {
    'src/graphql/': {
      preset: 'client',
      config: {
        useIndexSignature: true
      },
      plugins: ['typescript', 'typescript-resolvers']
    }
  }
}

export default config
