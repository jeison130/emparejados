module.exports = {
    apps : [
      {
        name: "emparejados-api",
        script: 'npm',
        args: 'start',
        watch: false,
        env: {
          "NODE_ENV": "production",
        }
      }
    ]
  }
  