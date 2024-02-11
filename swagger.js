// swagger.js

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerComponents = require("./swaggers/swaggerComponents");
const swaggerPaths = require("./swaggers/swaggerPaths");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node Express Js Testing Project",
      version: "1.0.0",
      description: "API Documentation and Testing",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./index.js"], // Add the path to your main entry file (index.js)
};

const specs = swaggerJsdoc(options);

// Manually combine components and paths
specs.components = swaggerComponents.components;
specs.paths = swaggerPaths.paths;

module.exports = specs;
