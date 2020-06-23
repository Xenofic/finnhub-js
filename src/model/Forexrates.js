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
 * The Forexrates model module.
 * @module model/Forexrates
 * @version 1.1.5
 */
class Forexrates {
    /**
     * Constructs a new <code>Forexrates</code>.
     * @alias module:model/Forexrates
     */
    constructor() { 
        
        Forexrates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Forexrates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Forexrates} obj Optional instance to populate.
     * @return {module:model/Forexrates} The populated <code>Forexrates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Forexrates();

            if (data.hasOwnProperty('base')) {
                obj['base'] = ApiClient.convertToType(data['base'], 'String');
            }
            if (data.hasOwnProperty('quote')) {
                obj['quote'] = ApiClient.convertToType(data['quote'], Object);
            }
        }
        return obj;
    }


}

/**
 * Base currency.
 * @member {String} base
 */
Forexrates.prototype['base'] = undefined;

/**
 * @member {Object} quote
 */
Forexrates.prototype['quote'] = undefined;






export default Forexrates;

