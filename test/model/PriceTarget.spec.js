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
    instance = new finnhub.PriceTarget();
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

  describe('PriceTarget', function() {
    it('should create an instance of PriceTarget', function() {
      // uncomment below and update the code to test PriceTarget
      //var instane = new finnhub.PriceTarget();
      //expect(instance).to.be.a(finnhub.PriceTarget);
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instane = new finnhub.PriceTarget();
      //expect(instance).to.be();
    });

    it('should have the property targetHigh (base name: "targetHigh")', function() {
      // uncomment below and update the code to test the property targetHigh
      //var instane = new finnhub.PriceTarget();
      //expect(instance).to.be();
    });

    it('should have the property targetLow (base name: "targetLow")', function() {
      // uncomment below and update the code to test the property targetLow
      //var instane = new finnhub.PriceTarget();
      //expect(instance).to.be();
    });

    it('should have the property targetMean (base name: "targetMean")', function() {
      // uncomment below and update the code to test the property targetMean
      //var instane = new finnhub.PriceTarget();
      //expect(instance).to.be();
    });

    it('should have the property targetMedian (base name: "targetMedian")', function() {
      // uncomment below and update the code to test the property targetMedian
      //var instane = new finnhub.PriceTarget();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdated (base name: "lastUpdated")', function() {
      // uncomment below and update the code to test the property lastUpdated
      //var instane = new finnhub.PriceTarget();
      //expect(instance).to.be();
    });

  });

}));
