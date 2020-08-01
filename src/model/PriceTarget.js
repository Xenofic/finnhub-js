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
 * The PriceTarget model module.
 * @module model/PriceTarget
 * @version 1.2.0
 */
class PriceTarget {
    /**
     * Constructs a new <code>PriceTarget</code>.
     * @alias module:model/PriceTarget
     */
    constructor() { 
        
        PriceTarget.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceTarget} obj Optional instance to populate.
     * @return {module:model/PriceTarget} The populated <code>PriceTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceTarget();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('targetHigh')) {
                obj['targetHigh'] = ApiClient.convertToType(data['targetHigh'], 'Number');
            }
            if (data.hasOwnProperty('targetLow')) {
                obj['targetLow'] = ApiClient.convertToType(data['targetLow'], 'Number');
            }
            if (data.hasOwnProperty('targetMean')) {
                obj['targetMean'] = ApiClient.convertToType(data['targetMean'], 'Number');
            }
            if (data.hasOwnProperty('targetMedian')) {
                obj['targetMedian'] = ApiClient.convertToType(data['targetMedian'], 'Number');
            }
            if (data.hasOwnProperty('lastUpdated')) {
                obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Company symbol.
 * @member {String} symbol
 */
PriceTarget.prototype['symbol'] = undefined;

/**
 * Highes analysts' target.
 * @member {Number} targetHigh
 */
PriceTarget.prototype['targetHigh'] = undefined;

/**
 * Lowest analysts' target.
 * @member {Number} targetLow
 */
PriceTarget.prototype['targetLow'] = undefined;

/**
 * Mean of all analysts' targets.
 * @member {Number} targetMean
 */
PriceTarget.prototype['targetMean'] = undefined;

/**
 * Median of all analysts' targets.
 * @member {Number} targetMedian
 */
PriceTarget.prototype['targetMedian'] = undefined;

/**
 * Updated time of the data
 * @member {Date} lastUpdated
 */
PriceTarget.prototype['lastUpdated'] = undefined;






export default PriceTarget;

