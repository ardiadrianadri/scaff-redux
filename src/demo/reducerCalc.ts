import { Reducer } from '../reducer';

import { ActionCalc, ActionsCalculator } from './actions';

export class ReducerCalc implements Reducer<number> {

    reduce (state: number, action: ActionCalc ): number {
        let result: number = state;

        switch(action.type){
            case ActionsCalculator.ADD_ONE:
                result ++;
                break;
            case ActionsCalculator.SUBSTRACT_ONE:
                result --;
                break;

        }

        return result;
    }
}