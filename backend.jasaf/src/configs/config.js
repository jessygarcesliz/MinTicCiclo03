const configurations = {
    database : {
        name: process.env.DATABASE_NAME || 'jasaf',
        server: process.env.DATABASE_URL ||'localhost', 
        port: process.env.DATABASE_PORT || 27017,
        protocol: process.env.DATABASE_PROTOCOL|| 'mongodb',
        user: process.env.DATABASE_USER||"",
       pass: process.env.DATABASE_PASS||""
    },
    server: {
        port: process.env.PORT || 8080
    }
};

module.exports = configurations;