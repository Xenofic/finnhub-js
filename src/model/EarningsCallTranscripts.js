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
import TranscriptContent from './TranscriptContent';
import TranscriptParticipant from './TranscriptParticipant';

/**
 * The EarningsCallTranscripts model module.
 * @module model/EarningsCallTranscripts
 * @version 1.2.15
 */
class EarningsCallTranscripts {
    /**
     * Constructs a new <code>EarningsCallTranscripts</code>.
     * @alias module:model/EarningsCallTranscripts
     */
    constructor() { 
        
        EarningsCallTranscripts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EarningsCallTranscripts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EarningsCallTranscripts} obj Optional instance to populate.
     * @return {module:model/EarningsCallTranscripts} The populated <code>EarningsCallTranscripts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EarningsCallTranscripts();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('transcript')) {
                obj['transcript'] = ApiClient.convertToType(data['transcript'], [TranscriptContent]);
            }
            if (data.hasOwnProperty('participant')) {
                obj['participant'] = ApiClient.convertToType(data['participant'], [TranscriptParticipant]);
            }
            if (data.hasOwnProperty('audio')) {
                obj['audio'] = ApiClient.convertToType(data['audio'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
            if (data.hasOwnProperty('quarter')) {
                obj['quarter'] = ApiClient.convertToType(data['quarter'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Company symbol.
 * @member {String} symbol
 */
EarningsCallTranscripts.prototype['symbol'] = undefined;

/**
 * Transcript content.
 * @member {Array.<module:model/TranscriptContent>} transcript
 */
EarningsCallTranscripts.prototype['transcript'] = undefined;

/**
 * Participant list
 * @member {Array.<module:model/TranscriptParticipant>} participant
 */
EarningsCallTranscripts.prototype['participant'] = undefined;

/**
 * Audio link.
 * @member {String} audio
 */
EarningsCallTranscripts.prototype['audio'] = undefined;

/**
 * Transcript's ID.
 * @member {String} id
 */
EarningsCallTranscripts.prototype['id'] = undefined;

/**
 * Title.
 * @member {String} title
 */
EarningsCallTranscripts.prototype['title'] = undefined;

/**
 * Time of the event.
 * @member {String} time
 */
EarningsCallTranscripts.prototype['time'] = undefined;

/**
 * Year of earnings result in the case of earnings call transcript.
 * @member {Number} year
 */
EarningsCallTranscripts.prototype['year'] = undefined;

/**
 * Quarter of earnings result in the case of earnings call transcript.
 * @member {Number} quarter
 */
EarningsCallTranscripts.prototype['quarter'] = undefined;






export default EarningsCallTranscripts;

