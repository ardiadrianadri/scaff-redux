import { Action } from '../action';

export enum ActionsCalculator {
    ADD_ONE,
    SUBSTRACT_ONE
}

export interface ActionCalc extends Action{
    type: ActionsCalculator,
    payload?: number
}
