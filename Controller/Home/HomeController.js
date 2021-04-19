'use strict';

exports.Index = function (req, res) {
    res.send('Home Index Work');
};

exports.About = function (req, res) {
    res.send("<b>About works</b>");
};

   /**
   * @swagger
   * definitions:
   *   User:
   *     type: object
   *     schema:
   *     $ref: '#/components/schemas/Person' 
   */

/**
 * @swagger
 * tags:
 *   name: Contact
 *   description: The Contact API
 *   externalDocs:
 *     description: "Find out more about our store"
 *     url: "http://swagger.io"
 */

/**
* @swagger
* /contact:
*   get:
*     summary: Returns message Contacts
*     tags: [Contact]
*     security: [{ Bearer: [] }]
*     parameters:
*      - in: query
*        name: name
*        schema:
*          type: string
*        required: true
*        description: name
*      - in: query
*        name: phone
*        schema:
*          type: string
*        required: true
*        description: phone
*      - in: path
*        name: email
*        schema:
*          type: string
*        required: true
*        description: email
*     requestBody:
*       description: user
*       content: 
*          'application/json':
*            schema:
*              $ref: '#/components/schemas/User'
*            examples:
*              User:
*                name: 'Mr. Y'
*     responses:
*       200:
*         description: success 
*         content:
*           application/json:
*             schema:
*               type: array
*       403:
*           description: not authorize
*   post:
*     summary: Returns new created Contacts
*     tags: [Contact]
*     security: [{ Bearer: [] }]
*     requestBody:
*       description: Contact model
*       content: 
*          'application/json':
*            schema:
*              $ref: '#/components/schemas/User'   
*     responses:
*       200:
*         description: success
*         content:
*           application/json:
*             schema:
*               type: array
*       403:
*           description: not authorize
*   put:
*     summary: Returns new updated Contacts
*     tags: [Contact]
*     security: [{ Bearer: [] }]
*     requestBody:
*       description: Contact model
*       content: 
*          'application/json':
*            schema:
*              $ref: '#/components/schemas/User'   
*     responses:
*       200:
*         description: success
*         content:
*           application/json:
*             schema:
*               type: array
*       403:
*           description: not authorize
*   delete:
*     summary: Returns message Contacts
*     tags: [Contact]
*     security: [{ Bearer: [] }]
*     parameters:
*      - in: query
*        name: name
*        schema:
*          type: string
*        required: true
*        description: name
*      - in: body
*        name: User
*        description: The Notification.
*        schema:
*          $ref: '#/components/schemas/User' 
*     responses:
*       200:
*         description: success 
*         content:
*           application/json:
*             schema:
*               type: array
*       403:
*           description: not authorize
*/


/**
  * @swagger
  * components:
  *   schemas:
  *     User:
  *       type: object
  *       required:
  *       - name
  *       properties:
  *         name:
  *           type: string
  *           example: 'Mr. X'
  */

/**
* @swagger
* components:
*   schemas:
*     Person:
*       type: object
*       required:
*       - user
*       properties:
*         address:
*           type: string
*         email:
*           type: string
*         user:
*           $ref: '#/components/schemas/User'
*/

exports.GetContact = function (req, res) {
    res.send("contact Works")
}
exports.SaveContact = function (req, res) {
    res.send("contact Works")
}
exports.UpdateContact = function (req, res) {
    res.send("contact Works")
}
exports.DeleteContact = function (req, res) {
    res.send("contact Works")
}
