import { Action } from './action';

export interface Reducer<T> {
    reduce (state: T, action: Action ): T;
}