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
 * The SupportResistance model module.
 * @module model/SupportResistance
 * @version 1.2.0
 */
class SupportResistance {
    /**
     * Constructs a new <code>SupportResistance</code>.
     * @alias module:model/SupportResistance
     */
    constructor() { 
        
        SupportResistance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SupportResistance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SupportResistance} obj Optional instance to populate.
     * @return {module:model/SupportResistance} The populated <code>SupportResistance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SupportResistance();

            if (data.hasOwnProperty('levels')) {
                obj['levels'] = ApiClient.convertToType(data['levels'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Array of support and resistance levels.
 * @member {Array.<Number>} levels
 */
SupportResistance.prototype['levels'] = undefined;






export default SupportResistance;

