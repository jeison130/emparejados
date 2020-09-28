const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/jeison130/emparejados.git',
        user: {
            name: 'Jeyson Calvache',
            email: 'jeison130@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)