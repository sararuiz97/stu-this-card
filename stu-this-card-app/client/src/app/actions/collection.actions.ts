import { Action } from '@ngrx/store';
import { Collection } from './../models/collection.model';

export const CHANGE_COLLECTION = '[COLLECTION] Change';

export class ChangeCollection implements Action {
    readonly type = CHANGE_COLLECTION;

    constructor(public payload: Collection) {}
}

export type Actions = ChangeCollection ;
