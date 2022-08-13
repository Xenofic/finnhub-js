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
import CompanyEarningsQualityScoreData from './CompanyEarningsQualityScoreData';

/**
 * The CompanyEarningsQualityScore model module.
 * @module model/CompanyEarningsQualityScore
 * @version 1.2.15
 */
class CompanyEarningsQualityScore {
    /**
     * Constructs a new <code>CompanyEarningsQualityScore</code>.
     * @alias module:model/CompanyEarningsQualityScore
     */
    constructor() { 
        
        CompanyEarningsQualityScore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyEarningsQualityScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyEarningsQualityScore} obj Optional instance to populate.
     * @return {module:model/CompanyEarningsQualityScore} The populated <code>CompanyEarningsQualityScore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyEarningsQualityScore();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('freq')) {
                obj['freq'] = ApiClient.convertToType(data['freq'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [CompanyEarningsQualityScoreData]);
            }
        }
        return obj;
    }


}

/**
 * Symbol
 * @member {String} symbol
 */
CompanyEarningsQualityScore.prototype['symbol'] = undefined;

/**
 * Frequency
 * @member {String} freq
 */
CompanyEarningsQualityScore.prototype['freq'] = undefined;

/**
 * Array of earnings quality score.
 * @member {Array.<module:model/CompanyEarningsQualityScoreData>} data
 */
CompanyEarningsQualityScore.prototype['data'] = undefined;






export default CompanyEarningsQualityScore;

