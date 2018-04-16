/**
 * Created by lundfall on 15/11/2016.
 */

import {Model}              from 'arva-js/core/Model.js';
import {PrioritisedArray}   from 'arva-js/data/PrioritisedArray.js';

export class User extends Model {
    get accounts() {}
    get password() {}
    get username() {}
    get timestamp() { return Date.now(); }          // last updated, numeric, ms since Unix epoch
    

    getId(){
        return this.id;
    }
}

export class Users extends PrioritisedArray {
    constructor(dataSource = null, dataSnapshot = null, options = null, modelOptions = {}) {
        super(User, dataSource, dataSnapshot, options, modelOptions);
    }
}