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
import SectorMetricData from './SectorMetricData';

/**
 * The SectorMetric model module.
 * @module model/SectorMetric
 * @version 1.2.15
 */
class SectorMetric {
    /**
     * Constructs a new <code>SectorMetric</code>.
     * @alias module:model/SectorMetric
     */
    constructor() { 
        
        SectorMetric.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SectorMetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SectorMetric} obj Optional instance to populate.
     * @return {module:model/SectorMetric} The populated <code>SectorMetric</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SectorMetric();

            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [SectorMetricData]);
            }
        }
        return obj;
    }


}

/**
 * Region.
 * @member {String} region
 */
SectorMetric.prototype['region'] = undefined;

/**
 * Metrics for each sector.
 * @member {Array.<module:model/SectorMetricData>} data
 */
SectorMetric.prototype['data'] = undefined;






export default SectorMetric;

