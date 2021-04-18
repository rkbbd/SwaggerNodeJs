let swaggerJsDoc = require('swagger-jsdoc');
let swaggerUi = require('swagger-ui-express');

async function swaggerDocs (app) {
    var host = "localhost:3000";
    // Extended: https://swagger.io/specification/#infoObject
    const swaggerOptions = {
        openapi: "3.0.0",
        swaggerDefinition: {
            components: {},
            info: {
                version: "1.0.0",
                title: "Swagger Demo API Services",
                description: "This is a sample server of Swagger Demo api services.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/). For this sample, you can use the api key `special-key` to test the authorization filters.",
                contact: {
                    name: "MD RAKIB HASAN",
                    email: "rakib424@gmail.com"
                },
                termsOfService: "http://swagger.io/terms/",
                license: {
                    name: "Swagger Demo license",
                    url: "http://example.com/"
                },
                servers: [host]
            },
            host: host,
            basePath: "/v1",
            swagger: "2.0",
            schemes: ["http", "https"],
            externalDocs: {
                description: "Find out more about Swagger Demo",
                url: "http://google.com/"
            },
            securityDefinitions: {
                Bearer: {
                    type: "apiKey",
                    name: "token",
                    in: "header",
                    description: "Enter your bearer token in the format **Bearer &lt;token>**"
                }
            },
        },
        apis: ["Controller/Home/*.js"]
    };
    const swaggerSpec = await swaggerJsDoc(swaggerOptions);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
 
module.exports = swaggerDocs;
