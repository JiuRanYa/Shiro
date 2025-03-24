module.exports = {
  deploy: {
    production: {
      user: 'root',
      host: '60.205.234.149',
      ref: 'origin/main',
      repo: 'git@github.com:JiuRanYa/Shiro.git',
      path: '/site/Shiro',
      'pre-setup': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.cjs',
      'pre-deploy-local': '',
      'ssh_options': 'StrictHostKeyChecking=no'
    }
  }
}
