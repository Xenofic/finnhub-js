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
import ETFSectorExposureData from './ETFSectorExposureData';

/**
 * The ETFsSectorExposure model module.
 * @module model/ETFsSectorExposure
 * @version 1.2.5
 */
class ETFsSectorExposure {
    /**
     * Constructs a new <code>ETFsSectorExposure</code>.
     * @alias module:model/ETFsSectorExposure
     */
    constructor() { 
        
        ETFsSectorExposure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ETFsSectorExposure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFsSectorExposure} obj Optional instance to populate.
     * @return {module:model/ETFsSectorExposure} The populated <code>ETFsSectorExposure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ETFsSectorExposure();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('sectorExposure')) {
                obj['sectorExposure'] = ApiClient.convertToType(data['sectorExposure'], [ETFSectorExposureData]);
            }
        }
        return obj;
    }


}

/**
 * ETF symbol.
 * @member {String} symbol
 */
ETFsSectorExposure.prototype['symbol'] = undefined;

/**
 * Array of industries and exposure levels.
 * @member {Array.<module:model/ETFSectorExposureData>} sectorExposure
 */
ETFsSectorExposure.prototype['sectorExposure'] = undefined;






export default ETFsSectorExposure;

