import { Action } from '@ngrx/store';
import { Collection } from './../models/collection.model';
import * as CollectionActions from './../actions/collection.actions';

export function reducer(state: Collection, action: CollectionActions.Actions) {

    switch (action.type) {
        case CollectionActions.CHANGE_COLLECTION:
            state = action.payload;
            return state;
        default:
            return state;
    }
}
