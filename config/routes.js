/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET  /get-userdata': { controller: 'BookController', action: 'getuserdata' },
  'POST /create-user': { controller: 'BookController', action: 'Createnewuser' },
  'POST /create-hotelier': { controller: 'BookController', action: 'Createnewhotelier' },
  'GET /get_user_by_id/:id': { controller: 'BookController', action: 'Getuserbyid' },
  'PUT /update_user_by_id': { controller: 'BookController', action: 'updatebyuserid' },
  'DELETE /delete_user_by_id/:id': { controller: 'BookController', action: 'deletebyuserid' }
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
