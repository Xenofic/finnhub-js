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
 * The TickData model module.
 * @module model/TickData
 * @version 0.0.1
 */
class TickData {
    /**
     * Constructs a new <code>TickData</code>.
     * @alias module:model/TickData
     */
    constructor() { 
        
        TickData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TickData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TickData} obj Optional instance to populate.
     * @return {module:model/TickData} The populated <code>TickData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TickData();

            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * UNIX milliseconds timestamp.
 * @member {Number} timestamp
 */
TickData.prototype['timestamp'] = undefined;

/**
 * Price.
 * @member {Number} price
 */
TickData.prototype['price'] = undefined;

/**
 * Volume of the trade.
 * @member {Number} volume
 */
TickData.prototype['volume'] = undefined;






export default TickData;

