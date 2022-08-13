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
import Transactions from './Transactions';

/**
 * The InsiderTransactions model module.
 * @module model/InsiderTransactions
 * @version 1.2.15
 */
class InsiderTransactions {
    /**
     * Constructs a new <code>InsiderTransactions</code>.
     * @alias module:model/InsiderTransactions
     */
    constructor() { 
        
        InsiderTransactions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InsiderTransactions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InsiderTransactions} obj Optional instance to populate.
     * @return {module:model/InsiderTransactions} The populated <code>InsiderTransactions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InsiderTransactions();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Transactions]);
            }
        }
        return obj;
    }


}

/**
 * Symbol of the company.
 * @member {String} symbol
 */
InsiderTransactions.prototype['symbol'] = undefined;

/**
 * Array of insider transactions.
 * @member {Array.<module:model/Transactions>} data
 */
InsiderTransactions.prototype['data'] = undefined;






export default InsiderTransactions;

