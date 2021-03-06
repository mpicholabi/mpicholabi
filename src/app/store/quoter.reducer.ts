import { createReducer, on } from '@ngrx/store';

import * as quoterCalculate from '@/app/store/quoter.actions';
import { QuoterCalculateInterface } from '@/app/interfaces/quoter/quoterCalculate';

// 2 - Estado inicial
const initialState: QuoterCalculateInterface = {
  amount: '',
  term: 12,
  fee: 1500,
};

// 3 - Switch con las funciones puras
export const quoterReducer = createReducer(
  initialState,
  on(quoterCalculate.SET_QUOTER, (state, { payload }) => {
    localStorage.setItem('quoter', JSON.stringify(payload));
    return payload;
  })
);
