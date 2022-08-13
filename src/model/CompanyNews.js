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
 * The CompanyNews model module.
 * @module model/CompanyNews
 * @version 1.2.15
 */
class CompanyNews {
    /**
     * Constructs a new <code>CompanyNews</code>.
     * @alias module:model/CompanyNews
     */
    constructor() { 
        
        CompanyNews.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyNews</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyNews} obj Optional instance to populate.
     * @return {module:model/CompanyNews} The populated <code>CompanyNews</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyNews();

            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('datetime')) {
                obj['datetime'] = ApiClient.convertToType(data['datetime'], 'Number');
            }
            if (data.hasOwnProperty('headline')) {
                obj['headline'] = ApiClient.convertToType(data['headline'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('related')) {
                obj['related'] = ApiClient.convertToType(data['related'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * News category.
 * @member {String} category
 */
CompanyNews.prototype['category'] = undefined;

/**
 * Published time in UNIX timestamp.
 * @member {Number} datetime
 */
CompanyNews.prototype['datetime'] = undefined;

/**
 * News headline.
 * @member {String} headline
 */
CompanyNews.prototype['headline'] = undefined;

/**
 * News ID. This value can be used for <code>minId</code> params to get the latest news only.
 * @member {Number} id
 */
CompanyNews.prototype['id'] = undefined;

/**
 * Thumbnail image URL.
 * @member {String} image
 */
CompanyNews.prototype['image'] = undefined;

/**
 * Related stocks and companies mentioned in the article.
 * @member {String} related
 */
CompanyNews.prototype['related'] = undefined;

/**
 * News source.
 * @member {String} source
 */
CompanyNews.prototype['source'] = undefined;

/**
 * News summary.
 * @member {String} summary
 */
CompanyNews.prototype['summary'] = undefined;

/**
 * URL of the original article.
 * @member {String} url
 */
CompanyNews.prototype['url'] = undefined;






export default CompanyNews;

