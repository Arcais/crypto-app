/**
 * Created by lundfall on 15/11/2016.
 */

import {Model}              from 'arva-js/core/Model.js';
import {PrioritisedArray}   from 'arva-js/data/PrioritisedArray.js';

export class Account extends Model {
    get cash() {}
    get currency() {}
    get name() {}
    get uid() {}
    get timestamp() { return Date.now(); }          // last updated, numeric, ms since Unix epoch
    

    getId(){
        return this.id;
    }
}

export class Accounts extends PrioritisedArray {
    constructor(dataSource = null, dataSnapshot = null, options = null, modelOptions = {}) {
        super(Account, dataSource, dataSnapshot, options, modelOptions);
    }
}