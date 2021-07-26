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
    instance = new finnhub.MutualFundHoldings();
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

  describe('MutualFundHoldings', function() {
    it('should create an instance of MutualFundHoldings', function() {
      // uncomment below and update the code to test MutualFundHoldings
      //var instane = new finnhub.MutualFundHoldings();
      //expect(instance).to.be.a(finnhub.MutualFundHoldings);
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instance = new finnhub.MutualFundHoldings();
      //expect(instance).to.be();
    });

    it('should have the property atDate (base name: "atDate")', function() {
      // uncomment below and update the code to test the property atDate
      //var instance = new finnhub.MutualFundHoldings();
      //expect(instance).to.be();
    });

    it('should have the property numberOfHoldings (base name: "numberOfHoldings")', function() {
      // uncomment below and update the code to test the property numberOfHoldings
      //var instance = new finnhub.MutualFundHoldings();
      //expect(instance).to.be();
    });

    it('should have the property holdings (base name: "holdings")', function() {
      // uncomment below and update the code to test the property holdings
      //var instance = new finnhub.MutualFundHoldings();
      //expect(instance).to.be();
    });

  });

}));
