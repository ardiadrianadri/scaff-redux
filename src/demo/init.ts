import { StoreCalc } from './storeCalc';
import {ActionCalc, ActionsCalculator} from './actions';

let store: StoreCalc = new StoreCalc();
let action: ActionCalc = {
    type: ActionsCalculator.ADD_ONE
}

console.log ('### Initial state: ', store.getState());

store.dispatch(action);

console.log('### State ADD_ONE: ', store.getState());

store.dispatch(action);

console.log('### State ADD_ONE (second): ', store.getState());

action.type = ActionsCalculator.SUBSTRACT_ONE;
store.dispatch(action);

console.log('### State SUBSTRACT_ONE: ', store.getState());