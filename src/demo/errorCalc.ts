import { ErrorStore } from '../error';

export class ErrorCalc implements ErrorStore {

    deal (error: any) {
        console.error('Error: ', error);
    }
}