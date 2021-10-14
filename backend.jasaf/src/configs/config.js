const configurations = {
    database : {
        name: process.env.DATABASE_NAME || 'jasaf',
        server: process.env.DATABASE_URL ||'localhost', 
        port: process.env.DATABASE_PORT || 27017,
        protocol: 'mongodb'
    },
    server: {
        port: process.env.PORT || 8080
    }
};

module.exports = configurations;