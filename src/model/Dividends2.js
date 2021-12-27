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
import Dividends2Info from './Dividends2Info';

/**
 * The Dividends2 model module.
 * @module model/Dividends2
 * @version 1.2.9
 */
class Dividends2 {
    /**
     * Constructs a new <code>Dividends2</code>.
     * @alias module:model/Dividends2
     */
    constructor() { 
        
        Dividends2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Dividends2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dividends2} obj Optional instance to populate.
     * @return {module:model/Dividends2} The populated <code>Dividends2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Dividends2();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Dividends2Info]);
            }
        }
        return obj;
    }


}

/**
 * Symbol
 * @member {String} symbol
 */
Dividends2.prototype['symbol'] = undefined;

/**
 * 
 * @member {Array.<module:model/Dividends2Info>} data
 */
Dividends2.prototype['data'] = undefined;






export default Dividends2;

