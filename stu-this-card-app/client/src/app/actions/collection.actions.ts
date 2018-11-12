import { Action } from '@ngrx/store';
import { Collection } from './../models/collection.model';

export const CHANGE_COLLECTION = '[COLLECTION] Change';
export const CHANGE_CREATOR = '[COLLECTION] Creator';

export class ChangeCollection implements Action {
    readonly type = CHANGE_COLLECTION;

    constructor(public payload: Collection) {}
}

export class ChangeCreator implements Action {
    readonly type = CHANGE_CREATOR;

    constructor(public payload: String) {}
}

export type Actions = ChangeCollection | ChangeCreator ;
