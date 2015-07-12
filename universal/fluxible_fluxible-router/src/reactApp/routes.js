export default {
    home: {
        path: '/',
        method: 'get',
        handler: require('./components/Home.jsx')
    },
    about: {
        path: '/about',
        method: 'get',
        handler: require('./components/About.jsx')
    },
    apiExample: {
        path: '/apiExample',
        method: 'get',
        handler: require('./components/ApiExample.jsx')
    }
};