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
 * The Estimate model module.
 * @module model/Estimate
 * @version 1.1.5
 */
class Estimate {
    /**
     * Constructs a new <code>Estimate</code>.
     * @alias module:model/Estimate
     */
    constructor() { 
        
        Estimate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Estimate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Estimate} obj Optional instance to populate.
     * @return {module:model/Estimate} The populated <code>Estimate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Estimate();

            if (data.hasOwnProperty('revenueAvg')) {
                obj['revenueAvg'] = ApiClient.convertToType(data['revenueAvg'], 'Number');
            }
            if (data.hasOwnProperty('revenueHigh')) {
                obj['revenueHigh'] = ApiClient.convertToType(data['revenueHigh'], 'Number');
            }
            if (data.hasOwnProperty('revenueLow')) {
                obj['revenueLow'] = ApiClient.convertToType(data['revenueLow'], 'Number');
            }
            if (data.hasOwnProperty('numberAnalysts')) {
                obj['numberAnalysts'] = ApiClient.convertToType(data['numberAnalysts'], 'Number');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Average revenue estimates.
 * @member {Number} revenueAvg
 */
Estimate.prototype['revenueAvg'] = undefined;

/**
 * Highest estimate.
 * @member {Number} revenueHigh
 */
Estimate.prototype['revenueHigh'] = undefined;

/**
 * Lowest estimate.
 * @member {Number} revenueLow
 */
Estimate.prototype['revenueLow'] = undefined;

/**
 * Number of Analysts.
 * @member {Number} numberAnalysts
 */
Estimate.prototype['numberAnalysts'] = undefined;

/**
 * Period.
 * @member {Date} period
 */
Estimate.prototype['period'] = undefined;






export default Estimate;

