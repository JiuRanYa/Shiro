module.exports = {
  apps: [
    {
      name: 'Shiro',
      script: 'out/index.js --db_host=60.205.234.149 --db_user=root --db_password=Tsy210258.',

      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        NEXT_SHARP_PATH: process.env.NEXT_SHARP_PATH,
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
  deploy : {
    production : {
      user : 'root', // 以什么身份登录远程服务器，这里是node用户登录，建议使用root用户，权限更大
      host : '60.205.234.149', // 远程服务器地址，需要配ssh登录
      ref  : 'origin/master', // 需要部署的分支
      repo : 'git@github.com:JiuRanYa/Shiro.git', // 代码git地址，需要配ssh登录
      path : '/var/www/production', // 文件存放的地址
      'post-deploy' : 'npm install && npm run build' // 拉完代码需要执行的构建命令
    }
  }
}
