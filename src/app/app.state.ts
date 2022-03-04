import { ErrorInterface } from '@/app/interfaces/error';
import { QuoterCalculateInterface } from './interfaces/quoter/quoterCalculate';

export interface AppState {
  readonly errors: Array<ErrorInterface>;
  readonly quoter: QuoterCalculateInterface;
}
