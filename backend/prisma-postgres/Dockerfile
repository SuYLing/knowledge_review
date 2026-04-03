FROM node:20

WORKDIR /usr/src/app

# 启用 pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 只提供运行环境，不复制源码
COPY . .

RUN pnpm install 

RUN pnpm exec prisma generate

EXPOSE 3000

CMD ["sh", "-c", "node src/index.js"]