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
 * The COVID19 model module.
 * @module model/COVID19
 * @version 0.0.1
 */
class COVID19 {
    /**
     * Constructs a new <code>COVID19</code>.
     * @alias module:model/COVID19
     */
    constructor() { 
        
        COVID19.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>COVID19</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/COVID19} obj Optional instance to populate.
     * @return {module:model/COVID19} The populated <code>COVID19</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new COVID19();

            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('case')) {
                obj['case'] = ApiClient.convertToType(data['case'], 'Number');
            }
            if (data.hasOwnProperty('death')) {
                obj['death'] = ApiClient.convertToType(data['death'], 'Number');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * State.
 * @member {String} state
 */
COVID19.prototype['state'] = undefined;

/**
 * Number of confirmed cases.
 * @member {Number} case
 */
COVID19.prototype['case'] = undefined;

/**
 * Number of confirmed deaths.
 * @member {Number} death
 */
COVID19.prototype['death'] = undefined;

/**
 * Updated time.
 * @member {Date} updated
 */
COVID19.prototype['updated'] = undefined;






export default COVID19;

