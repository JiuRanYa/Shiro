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
  deploy: {
    production: {
      user: 'root',
      host: '60.205.234.149',
      ref: 'origin/master',
      repo: 'git@github.com:JiuRanYa/Shiro.git',
      path: '/site/shiro/source/shiro',
      'pre-setup': 'rm -rf /site/shiro/source/shiro',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.cjs',
      'pre-deploy-local': '',
      'ssh_options': 'StrictHostKeyChecking=no'
    }
  }
}
