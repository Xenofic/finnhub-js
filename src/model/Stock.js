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
 * The Stock model module.
 * @module model/Stock
 * @version 1.2.0
 */
class Stock {
    /**
     * Constructs a new <code>Stock</code>.
     * @alias module:model/Stock
     */
    constructor() { 
        
        Stock.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Stock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Stock} obj Optional instance to populate.
     * @return {module:model/Stock} The populated <code>Stock</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Stock();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('displaySymbol')) {
                obj['displaySymbol'] = ApiClient.convertToType(data['displaySymbol'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Symbol description
 * @member {String} description
 */
Stock.prototype['description'] = undefined;

/**
 * Display symbol name.
 * @member {String} displaySymbol
 */
Stock.prototype['displaySymbol'] = undefined;

/**
 * Unique symbol used to identify this symbol used in <code>/stock/candle</code> endpoint.
 * @member {String} symbol
 */
Stock.prototype['symbol'] = undefined;

/**
 * Security type.
 * @member {String} type
 */
Stock.prototype['type'] = undefined;

/**
 * Price's currency. This might be different from the reporting currency of fundamental data.
 * @member {String} currency
 */
Stock.prototype['currency'] = undefined;






export default Stock;

