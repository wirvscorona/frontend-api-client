/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiDocumentation);
  }
}(this, function(expect, ApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiDocumentation.UserControllerApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserControllerApi', function() {
    describe('deleteUserUsingDELETE', function() {
      it('should call deleteUserUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteUserUsingDELETE
        //instance.deleteUserUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUserUsingGET1', function() {
      it('should call findUserUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test findUserUsingGET1
        //instance.findUserUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUsersUsingGET', function() {
      it('should call findUsersUsingGET successfully', function(done) {
        //uncomment below and update the code to test findUsersUsingGET
        //instance.findUsersUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveUserUsingPOST', function() {
      it('should call saveUserUsingPOST successfully', function(done) {
        //uncomment below and update the code to test saveUserUsingPOST
        //instance.saveUserUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUserUsingPUT', function() {
      it('should call updateUserUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateUserUsingPUT
        //instance.updateUserUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
