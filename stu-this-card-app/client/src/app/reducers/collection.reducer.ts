import { Action } from '@ngrx/store';
import { Collection } from './../models/collection.model';
import * as CollectionActions from './../actions/collection.actions';

const defColl: Collection = {
    name: '',
    id: '',
    its_3d: false,
    model_3d: ''
};

export function reducer(state: Collection =  defColl, action: CollectionActions.Actions) {

    switch (action.type) {
        case CollectionActions.CHANGE_COLLECTION:
            state = action.payload;
            return state;
        default:
            return state;
    }
}
