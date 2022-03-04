import { createAction, props } from '@ngrx/store';
import { QuoterCalculateInterface } from '@/app/interfaces/quoter/quoterCalculate';

export const SET_QUOTER = createAction(
  'SET_QUOTER',
  props<{ payload: QuoterCalculateInterface }>()
);
