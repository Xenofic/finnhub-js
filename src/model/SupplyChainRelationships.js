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
import KeyCustomersSuppliers from './KeyCustomersSuppliers';

/**
 * The SupplyChainRelationships model module.
 * @module model/SupplyChainRelationships
 * @version 1.2.5
 */
class SupplyChainRelationships {
    /**
     * Constructs a new <code>SupplyChainRelationships</code>.
     * @alias module:model/SupplyChainRelationships
     */
    constructor() { 
        
        SupplyChainRelationships.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SupplyChainRelationships</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SupplyChainRelationships} obj Optional instance to populate.
     * @return {module:model/SupplyChainRelationships} The populated <code>SupplyChainRelationships</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SupplyChainRelationships();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [KeyCustomersSuppliers]);
            }
        }
        return obj;
    }


}

/**
 * symbol
 * @member {String} symbol
 */
SupplyChainRelationships.prototype['symbol'] = undefined;

/**
 * Key customers and suppliers.
 * @member {Array.<module:model/KeyCustomersSuppliers>} data
 */
SupplyChainRelationships.prototype['data'] = undefined;






export default SupplyChainRelationships;

