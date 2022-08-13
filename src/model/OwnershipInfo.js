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
 * The OwnershipInfo model module.
 * @module model/OwnershipInfo
 * @version 1.2.15
 */
class OwnershipInfo {
    /**
     * Constructs a new <code>OwnershipInfo</code>.
     * @alias module:model/OwnershipInfo
     */
    constructor() { 
        
        OwnershipInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OwnershipInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OwnershipInfo} obj Optional instance to populate.
     * @return {module:model/OwnershipInfo} The populated <code>OwnershipInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OwnershipInfo();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('share')) {
                obj['share'] = ApiClient.convertToType(data['share'], 'Number');
            }
            if (data.hasOwnProperty('change')) {
                obj['change'] = ApiClient.convertToType(data['change'], 'Number');
            }
            if (data.hasOwnProperty('filingDate')) {
                obj['filingDate'] = ApiClient.convertToType(data['filingDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Investor's name.
 * @member {String} name
 */
OwnershipInfo.prototype['name'] = undefined;

/**
 * Number of shares held by the investor.
 * @member {Number} share
 */
OwnershipInfo.prototype['share'] = undefined;

/**
 * Number of share changed (net buy or sell) from the last period.
 * @member {Number} change
 */
OwnershipInfo.prototype['change'] = undefined;

/**
 * Filing date.
 * @member {Date} filingDate
 */
OwnershipInfo.prototype['filingDate'] = undefined;






export default OwnershipInfo;

