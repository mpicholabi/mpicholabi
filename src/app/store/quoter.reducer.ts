import { Action, createReducer, on } from '@ngrx/store';

import * as quoterCalculate from '@/app/store/quoter.actions';
import { QuoterCalculateInterface } from '@/app/interfaces/quoter/quoterCalculate';

// 2 - Estado inicial
const initialState: QuoterCalculateInterface = {
  amount: 0,
  term: 12,
};

// 3 - Switch con las funciones puras
export const quoterReducer = createReducer(
  initialState,
  on(quoterCalculate.SET_QUOTER, (state, { payload }) => {
    return payload;
  })
);
