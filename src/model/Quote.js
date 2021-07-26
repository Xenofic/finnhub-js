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

import ApiClient from '../ApiClient';

/**
 * The Quote model module.
 * @module model/Quote
 * @version 1.2.5
 */
class Quote {
    /**
     * Constructs a new <code>Quote</code>.
     * @alias module:model/Quote
     */
    constructor() { 
        
        Quote.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Quote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Quote} obj Optional instance to populate.
     * @return {module:model/Quote} The populated <code>Quote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Quote();

            if (data.hasOwnProperty('o')) {
                obj['o'] = ApiClient.convertToType(data['o'], 'Number');
            }
            if (data.hasOwnProperty('h')) {
                obj['h'] = ApiClient.convertToType(data['h'], 'Number');
            }
            if (data.hasOwnProperty('l')) {
                obj['l'] = ApiClient.convertToType(data['l'], 'Number');
            }
            if (data.hasOwnProperty('c')) {
                obj['c'] = ApiClient.convertToType(data['c'], 'Number');
            }
            if (data.hasOwnProperty('pc')) {
                obj['pc'] = ApiClient.convertToType(data['pc'], 'Number');
            }
            if (data.hasOwnProperty('d')) {
                obj['d'] = ApiClient.convertToType(data['d'], 'Number');
            }
            if (data.hasOwnProperty('dp')) {
                obj['dp'] = ApiClient.convertToType(data['dp'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Open price of the day
 * @member {Number} o
 */
Quote.prototype['o'] = undefined;

/**
 * High price of the day
 * @member {Number} h
 */
Quote.prototype['h'] = undefined;

/**
 * Low price of the day
 * @member {Number} l
 */
Quote.prototype['l'] = undefined;

/**
 * Current price
 * @member {Number} c
 */
Quote.prototype['c'] = undefined;

/**
 * Previous close price
 * @member {Number} pc
 */
Quote.prototype['pc'] = undefined;

/**
 * Change
 * @member {Number} d
 */
Quote.prototype['d'] = undefined;

/**
 * Percent change
 * @member {Number} dp
 */
Quote.prototype['dp'] = undefined;






export default Quote;

