FROM node:20-alpine

WORKDIR /usr/src/app

# 启用 pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 复制 package 文件
COPY package.json pnpm-lock.yaml ./

# 复制剩余源码
COPY . .

# 安装依赖（必须加 --ignore-scripts）
RUN pnpm install --frozen-lockfile --ignore-scripts



EXPOSE 3000

CMD ["node", "src/index.js"]