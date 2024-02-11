// swaggerPaths.js
const swaggerPaths = {
  paths: {
    "/signup": {
      post: {
        summary: "Create a new User",
        tags: ["User"],
        description: "You can create a new user through this resource",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        responses: {
          201: {
            description: "OK",
            content: {
              "application/json": {
                example: {
                  message: "Signup successfully",
                },
              },
            },
          },
        },
      },
    },
    "/auth/login": {
      post: {
        summary: "User Login",
        tags: ["User"],
        description: "Endpoint for user authentication.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Login successful",
            content: {
              "application/json": {
                example: {
                  token: "JWT_TOKEN",
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                example: {
                  error: "Unauthorized",
                },
              },
            },
          },
        },
      },
    },
    "/profile": {
      get: {
        summary: "Get protected User Profile",
        tags: ["User"],
        description: "Retrieve profile data that requires authentication",
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          200: {
            description: "Successful response",
          },
          401: {
            description: "Unauthorized",
          },
        },
      },
    },
    "/customers": {
      post: {
        summary: "Create a new Customer",
        tags: ["Customer"],
        description: "You can create a new customer through this resource",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Customer",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Data Added successfully",
          },
        },
      },
      get: {
        summary: "Get All the Customers",
        tags: ["Customer"],
        description: "Fetch the details of all customers through this resource",
        responses: {
          200: {
            description: "This API is used to fetch all customers' data",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Customer",
                  },
                },
              },
            },
          },
        },
      },
    },
    "/customers/{id}": {
      get: {
        summary: "Get the required data of Customers",
        tags: ["Customer"],
        description: "Fetch the details of specific customers through ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            description: "Numeric ID required",
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          200: {
            description: "This API is used to fetch one customer data",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Customer",
                },
              },
            },
          },
        },
      },
      put: {
        summary: "Update the existing Customer",
        tags: ["Customer"],
        description: "You can update a customer data through this API",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            description: "Numeric ID required",
            schema: {
              type: "integer",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Customer",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Data is updated",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Customer",
                },
              },
            },
          },
        },
      },

      delete: {
        summary: "Delete the required data of Customers",
        tags: ["Customer"],
        description: "Delete the details of specific customers through ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            description: "Numeric ID required",
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          200: {
            description: "Data is deleted",
          },
        },
      },
    },
    // Add other paths as needed
  },
};

module.exports = swaggerPaths;
