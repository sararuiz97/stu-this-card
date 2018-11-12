import { Collection } from './models/collection.model';

export interface AppState {
  readonly collection: Collection;
}
