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
 * The CompanyNewsStatistics model module.
 * @module model/CompanyNewsStatistics
 * @version 1.2.0
 */
class CompanyNewsStatistics {
    /**
     * Constructs a new <code>CompanyNewsStatistics</code>.
     * @alias module:model/CompanyNewsStatistics
     */
    constructor() { 
        
        CompanyNewsStatistics.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyNewsStatistics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyNewsStatistics} obj Optional instance to populate.
     * @return {module:model/CompanyNewsStatistics} The populated <code>CompanyNewsStatistics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyNewsStatistics();

            if (data.hasOwnProperty('articlesInLastWeek')) {
                obj['articlesInLastWeek'] = ApiClient.convertToType(data['articlesInLastWeek'], 'Number');
            }
            if (data.hasOwnProperty('buzz')) {
                obj['buzz'] = ApiClient.convertToType(data['buzz'], 'Number');
            }
            if (data.hasOwnProperty('weeklyAverage')) {
                obj['weeklyAverage'] = ApiClient.convertToType(data['weeklyAverage'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {Number} articlesInLastWeek
 */
CompanyNewsStatistics.prototype['articlesInLastWeek'] = undefined;

/**
 * 
 * @member {Number} buzz
 */
CompanyNewsStatistics.prototype['buzz'] = undefined;

/**
 * 
 * @member {Number} weeklyAverage
 */
CompanyNewsStatistics.prototype['weeklyAverage'] = undefined;






export default CompanyNewsStatistics;

