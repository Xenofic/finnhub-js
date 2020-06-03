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
    instance = new finnhub.EarningEstimate();
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

  describe('EarningEstimate', function() {
    it('should create an instance of EarningEstimate', function() {
      // uncomment below and update the code to test EarningEstimate
      //var instane = new finnhub.EarningEstimate();
      //expect(instance).to.be.a(finnhub.EarningEstimate);
    });

    it('should have the property epsAvg (base name: "epsAvg")', function() {
      // uncomment below and update the code to test the property epsAvg
      //var instane = new finnhub.EarningEstimate();
      //expect(instance).to.be();
    });

    it('should have the property epsHigh (base name: "epsHigh")', function() {
      // uncomment below and update the code to test the property epsHigh
      //var instane = new finnhub.EarningEstimate();
      //expect(instance).to.be();
    });

    it('should have the property epsLow (base name: "epsLow")', function() {
      // uncomment below and update the code to test the property epsLow
      //var instane = new finnhub.EarningEstimate();
      //expect(instance).to.be();
    });

    it('should have the property numberAnalysts (base name: "numberAnalysts")', function() {
      // uncomment below and update the code to test the property numberAnalysts
      //var instane = new finnhub.EarningEstimate();
      //expect(instance).to.be();
    });

    it('should have the property period (base name: "period")', function() {
      // uncomment below and update the code to test the property period
      //var instane = new finnhub.EarningEstimate();
      //expect(instance).to.be();
    });

  });

}));
