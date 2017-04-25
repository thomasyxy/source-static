# source-static
前端静态资源服务

### 构建

npm install

npm start

### 发布

修改 `ecosystem.json` 和 `deploy.sh` 中对应的配置。

第一次发布需要执行

```javascript
pm2 deploy production setup
```

正常发布

```javascript
pm2 deploy production
```
