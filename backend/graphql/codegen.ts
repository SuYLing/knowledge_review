
import type { CodegenConfig } from '@graphql-codegen/cli';
/**
 * 参考配置链接
 * 1. https://the-guild.dev/graphql/codegen/docs/getting-started/development-workflow#watch-mode  开启监听模式
 * 2. https://the-guild.dev/graphql/codegen/docs/getting-started/installation 下载graphql-codegen 进行配置
 * **/ 
const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/graphql/schema.ts",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

export default config;
