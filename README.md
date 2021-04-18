# Swagger Introduction & Examples
- [Quick Start](#quick-start)  
- [OpenAPI & Swagger](#openapi--swagger)
  * [OpenAPI](#openapi)
  * [Swagger](#swagger)
  * [Why Use OpenAPI?](#why-use-openapi)
- [Introduction to OpenAPI Specification](#introduction-to-openapi-specification)
  * [Basic Structure](#basic-structure)
  * [Metadata](#metadata)
  * [Base URL](#base-url)
  * [Paths](#paths)
  * [Parameters](#parameters)
  * [Responses](#responses)
  * [Input and Output Models](#input-and-output-models)
  * [Authentication](#authentication)
- [Introduction to Swagger Open Source Tools](#introduction-to-swagger-open-source-tools)
  * [Swagger Editor](#swagger-editor)
  * [Swagger Codegen](#swagger-codegen)
  * [Swagger UI](#swagger-ui)
- [asciidoctor](#asciidoctor)


[中文版本Chinese version](README.zh-CN.md)

## Quick Start

1. install: after git clone, execute commands below in root directory:

```
npm install
```

This command installs a package and any packages that it depends on.
```
{
  "name": "swaggerdemo",
  "version": "1.0.0",
  "description": "REST API Documentation Tool | Swagger UI || Demo Project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "md rakib hasan",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "swagger-jsdoc": "6.0.0",
    "swagger-ui-express": "^4.1.6"
  }
}
```

2. run node-server：

```
node index.js
```

3. explore:

swagger: `http://localhost:3000/api-docs`

swagger-ui looks like this:
![Demo-Api](swagger-ui.jpg)

---
### ***Introduction to OpenAPI & Swagger Open Source Tools***

## OpenAPI & Swagger
### OpenAPI
**OpenAPI Specification** (formerly Swagger Specification) is an API description format for REST APIs. An OpenAPI file allows you to describe your entire API, including:

* Available endpoints (```/v1/about```) and operations on each endpoint (```GET /v1/contact```, ```POST /v1/contact```)
* Operation parameters Input and output for each operation
* Contact information, license, terms of use and other information.

API specifications can be written in YAML or JSON. The format is easy to learn and readable to both humans and machines. The complete OpenAPI Specification can be found on GitHub: 
[OpenAPI 2.0 Specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md),
[OpenAPI 3.0 Specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md)

### Swagger

Swagger is a set of open-source tools built around the OpenAPI Specification that can help you design, build, document and consume REST APIs. The major Swagger tools include:

* [Swagger Editor](http://editor.swagger.io/?_ga=2.27098621.139862542.1529283950-1958724428.1521772135) – browser-based editor where you can write OpenAPI specs.
* [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) – generates server stubs and client libraries from an OpenAPI spec.
* [Swagger UI](https://swagger.io/swagger-ui/) – renders OpenAPI specs as interactive API documentation.

### Why Use OpenAPI?
The ability of APIs to describe their own structure is the root of all awesomeness in OpenAPI. Once written, an OpenAPI specification and Swagger tools can drive your API development further in various ways:

* Design-first users: use [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) to **generate a server stub** for your API. The only thing left is to implement the server logic – and your API is ready to go live!
* Use [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) to **generate client libraries** for your API in over 40 languages.
* Use [Swagger UI](https://swagger.io/swagger-ui/) to generate **interactive API documentation** that lets your users try out the API calls directly in the browser.
* Use the spec to connect API-related tools to your API. For example, import the spec to [SoapUI](https://soapui.org/) to create automated tests for your API.
* And more! Check out the [open-source tools](https://swagger.io/open-source-integrations/) that integrate with Swagger.

-----

## Introduction to OpenAPI Specification

### **Basic Structure**
Swagger can be written in JSON or YAML. In this guide, we only use YAML examples, but JSON works equally well. A sample Swagger specification written in YAML looks like:

```
{
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
```


### **Metadata**
Every Swagger specification starts with the Swagger version, 3.0 being the latest version. A Swagger version defines the overall structure of an API specification -- what you can document and how you document it.

```yaml
swagger: "2.0"
```

Then, you need to specify the ```API info``` -- ```title```, ```description``` (optional), ```version``` (API version, not file revision or Swagger version).

```yaml
info:
  title: "Swagger Demo API Services",
  description: "This is a sample server of Swagger Demo api services.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/). For this sample, you can use the api key `special-key` to test the authorization filters.",
  version: "1.0.0",       
  contact:
    name: "MD RAKIB HASAN",
    email: "rakib424@gmail.com"
  termsOfService: "http://swagger.io/terms/"
    license:
      name: "Swagger Demo license",              
      url: "http://example.com/"
  servers: ["localhost:3000"]
```

```version``` can be a random string. You can use major.minor.patch (as in [semantic versioning](http://semver.org/)), or an arbitrary format like 1.0-beta or 2016.11.15. 

```description``` can be [multiline](http://stackoverflow.com/a/21699210) and supports [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/) for rich text representation. 

```info``` also supports other fields for contact information, license and other details. Reference: [Info Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#infoObject).


### **Base URL**
The base URL for all API calls is defined using ```schemes```, ```host``` and ```basePath```:

```yaml
host: api.example.com
basePath: /v1
schemes:
  - https
```

All API paths are relative to the base URL. For example, /users actually means *https://api.example.com/v1/users. 

More info*: [API Host and Base URL](https://swagger.io/docs/specification/2-0/api-host-and-base-path/).
  
### **Paths**
The ```paths``` section defines individual endpoints (paths) in your API, and the HTTP methods (operations) supported by these endpoints. For example, ```GET /v1/Contact``` can be described as:

```yaml
paths:
  /v1/Contact:
    get:
      summary: Returns a list of Contact.
      description: Optional extended description in Markdown.
      produces:
        - application/json
      responses:
        200:
          description: OK
          
```

*More info*: [Paths and Operations](https://swagger.io/docs/specification/2-0/paths-and-operations/).

### **Parameters**
Operations can have parameters that can be passed via URL path (```/users/{userId}```), query string (```/users?role=admin```), headers (```X-CustomHeader: Value```) and request body. 
You can define the parameter types, format, whether they are required or optional, and other details:

```yaml
paths:
  /v1/contact/{userId}:
    get:
      summary: Returns a user by ID.
      parameters:
        - in: path
          name: userId
          required: true
          type: integer
          minimum: 1
          description: Parameter description in Markdown.
      responses:
        200:
          description: OK
```

*More info*: [Describing Parameters](https://swagger.io/docs/specification/2-0/describing-parameters/).

### **Responses**
For each operation, you can define possible status codes, such as 200 OK or 404 Not Found, and ```schema``` of the response body. 
Schemas can be defined inline or referenced from an external definition via ```$ref```. You can also provide example responses for different content types.

```yaml
paths:
  /v1/contact/{userId}:
    get:
      summary: Returns a user by ID.
      parameters:
        - in: path
          name: userId
          required: true
          type: integer
          minimum: 1
          description: The ID of the user to return.
      responses:
        200:
          description: A User object.
          schema:
            type: object
            properties:
              id:
                type: integer
                example: 4
              name:
                type: string
                example: Arthur Dent
        400:
          description: The specified user ID is invalid (e.g. not a number).
        404:
          description: A user with the specified ID was not found.
        default:
          description: Unexpected error
```

*More info*: [Describing Responses](https://swagger.io/docs/specification/2-0/describing-responses/).

### **Input and Output Models**
The global ```definitions``` section lets you define common data structures used in your API. They can be referenced via ```$ref``` 
whenever a ```schema``` is required -- both for request body and response body. For example, this JSON object:

```json
{
  "id": 4,
  "name": "MD. RAKIB HASAN"
}
```
can be represented as:
```yaml
definitions:
  User:
    properties:
      id:
        type: integer
      name:
        type: string
    # Both properties are required
    required:  
      - id
      - name
```

and then referenced in the request body schema and response body schema as follows:

```yaml
paths:
  /v1/Contact/{userId}:
    get:
      summary: Returns a user by ID.
      parameters:
        - in: path
          name: userId
          required: true
          type: integer
      responses:
        200:
          description: OK
          schema:
            $ref: '#/definitions/User'
  /v1/contact:
    post:
      summary: Creates a new user.
      parameters:
        - in: body
          name: user
          schema:
            $ref: '#/definitions/User'
      responses:
        200:
          description: OK
```


### **Authentication**
The ```securityDefinitions``` and ```security``` keywords are used to describe the authentication methods used in your API.

```
 securityDefinitions: {
                Bearer: {
                    type: "apiKey",
                    name: "token",
                    in: "header",
                    description: "Enter your bearer token in the format **Bearer &lt;token>**"
                }
            }
```

Supported authentication methods are:
* [Basic authentication](https://swagger.io/docs/specification/2-0/authentication/basic-authentication/)
* [API key](https://swagger.io/docs/specification/2-0/authentication/api-keys/) (as a header or query parameter)
* OAuth 2 common flows (implicit, password, application and access code)

*More info*: [Authentication](https://swagger.io/docs/specification/2-0/authentication/).


## Introduction to Swagger Open Source Tools
### **Swagger Editor**
Design, describe, and document your API on the first open source editor fully dedicated to OpenAPI-based APIs. 
The Swagger Editor is great for quickly getting started with the OpenAPI (formerly known as the Swagger Specification) specification, with support for Swagger 2.0 and OpenAPI 3.0. 

* Runs Anywhere: The Editor works in any development environment, be it locally or in the web
* Smart Feedback: Validate your syntax for OAS-compliance as you write it with concise feedback and error handling
* Instant Visualization: Render your API specification visually and interact with your API while still defining it
* Intelligent Auto-completion: Write syntax faster with a smart and intelligent auto-completion
* Fully Customizable: Easy to configure and customize anything, from line-spacing to themes
* All About Your Build: Generate server stubs and client libraries for your API in every popular language

### **Swagger Codegen**
Swagger Codegen can simplify your build process by generating server stubs and client SDKs for any API, defined with the OpenAPI (formerly known as Swagger) specification, 
so your team can focus better on your API’s implementation and adoption.

* Generate Servers: Remove tedious plumbing and configuration by generating boilerplate server code in over 20 different languages
* Improve API Consumption: Generate client SDKs in over 40 different languages for end developers to easily integrate with your API
* Continuously Improved: Swagger Codegen is always updated with the latest and greatest changes in the programming world

### **Swagger UI**
Swagger UI allows anyone — be it your development team or your end consumers — to visualize and interact with the API’s resources without having any of the implementation logic in place. 
It’s automatically generated from your OpenAPI (formerly known as Swagger) Specification, with the visual documentation making it easy for back end implementation and client side consumption.

* Dependency Free: The UI works in any development environment, be it locally or in the web
* Human Friendly: Allow end developers to effortlessly interact and try out every single operation your API exposes for easy consumption
* Easy to Navigate: Quickly find and work with resources and endpoints with neatly categorized documentation
* All Browser Support: Cater to every possible scenario with Swagger UI working in all major browsers
* Fully Customizable: Style and tweak your Swagger UI the way you want with full source code access
* Complete OAS Support: Visualize APIs defined in Swagger 2.0 or OAS 3.0

## **asciidoctor**
* asciidoc
* asciidoctor

[Asciidoctor](https://asciidoctor.org/) is a fast text processor and publishing toolchain for converting [AsciiDoc](https://asciidoctor.org/docs/what-is-asciidoc) content to HTML5, DocBook, PDF, and other formats. 
Asciidoctor is written in Ruby, packaged and distributed as a gem to [RubyGems.org](https://rubygems.org/gems/asciidoctor), and packaged for popular Linux distributions, including Fedora, Debian, Ubuntu, and Alpine. 
Asciidoctor can be run on the JVM using AsciidoctorJ and in all JavaScript environments using Asciidoctor.js. Asciidoctor is [open source software](https://github.com/asciidoctor/asciidoctor/blob/master/LICENSE) 
and hosted on [GitHub](https://github.com/asciidoctor/asciidoctor).

