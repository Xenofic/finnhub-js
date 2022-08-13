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
import BreakdownItem from './BreakdownItem';

/**
 * The RevenueBreakdown model module.
 * @module model/RevenueBreakdown
 * @version 1.2.15
 */
class RevenueBreakdown {
    /**
     * Constructs a new <code>RevenueBreakdown</code>.
     * @alias module:model/RevenueBreakdown
     */
    constructor() { 
        
        RevenueBreakdown.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RevenueBreakdown</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevenueBreakdown} obj Optional instance to populate.
     * @return {module:model/RevenueBreakdown} The populated <code>RevenueBreakdown</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RevenueBreakdown();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('cik')) {
                obj['cik'] = ApiClient.convertToType(data['cik'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [BreakdownItem]);
            }
        }
        return obj;
    }


}

/**
 * Symbol
 * @member {String} symbol
 */
RevenueBreakdown.prototype['symbol'] = undefined;

/**
 * CIK
 * @member {String} cik
 */
RevenueBreakdown.prototype['cik'] = undefined;

/**
 * Array of revenue breakdown over multiple periods.
 * @member {Array.<module:model/BreakdownItem>} data
 */
RevenueBreakdown.prototype['data'] = undefined;






export default RevenueBreakdown;

