# ベースイメージ
FROM node:23-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 必要な依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# Reactアプリをビルド
RUN npm run build

# 開発サーバーを起動
CMD ["npm", "start"]
