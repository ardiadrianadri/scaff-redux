import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { Action } from './action';
import { Reducer } from './reducer';
import { ErrorStore } from './error';

import 'rxjs/add/operator/scan';

export abstract class Store<T> extends BehaviorSubject<T> {
    private _dispatcher: Subject<Action>;

    constructor ( private _reducer:Reducer<T>, private initialState: T, errorStore: ErrorStore) {
        super(initialState);

        this._dispatcher = new Subject<Action>();
        this._dispatcher
        .scan((state: T, action: Action) => {
            const nextState: T = this._reducer.reduce(state, action);
            return nextState;
        }, initialState)
        .subscribe(
            (state: T) => super.next(state),
            error => { errorStore.deal(error); }
        );

    }

    getState(): T {
        return this.value;
    }

    dispatch(action: Action): void {
        this._dispatcher.next(action);
    }
}