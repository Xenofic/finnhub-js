/**
 * Finnhub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
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
    factory(root.expect, root.finnhub);
  }
}(this, function(expect, finnhub) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new finnhub.MarketNews();
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

  describe('MarketNews', function() {
    it('should create an instance of MarketNews', function() {
      // uncomment below and update the code to test MarketNews
      //var instane = new finnhub.MarketNews();
      //expect(instance).to.be.a(finnhub.MarketNews);
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new finnhub.MarketNews();
      //expect(instance).to.be();
    });

    it('should have the property datetime (base name: "datetime")', function() {
      // uncomment below and update the code to test the property datetime
      //var instance = new finnhub.MarketNews();
      //expect(instance).to.be();
    });

    it('should have the property headline (base name: "headline")', function() {
      // uncomment below and update the code to test the property headline
      //var instance = new finnhub.MarketNews();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new finnhub.MarketNews();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new finnhub.MarketNews();
      //expect(instance).to.be();
    });

    it('should have the property related (base name: "related")', function() {
      // uncomment below and update the code to test the property related
      //var instance = new finnhub.MarketNews();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new finnhub.MarketNews();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instance = new finnhub.MarketNews();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new finnhub.MarketNews();
      //expect(instance).to.be();
    });

  });

}));
