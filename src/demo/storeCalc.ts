import { ActionCalc, ActionsCalculator } from './actions';
import { ReducerCalc } from './reducerCalc';
import { Store } from '../store';
import { ErrorCalc } from './errorCalc';

export class StoreCalc extends Store<number> {

    constructor() {
        let reducer: ReducerCalc = new ReducerCalc();
        let error: ErrorCalc = new ErrorCalc();

        super(reducer,0,error);
    }
}