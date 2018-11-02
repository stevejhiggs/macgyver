import { Dispatch } from 'redux';
import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { RootState } from './reducer';

const create = actionCreatorFactory();
const createAsync = asyncFactory<RootState>(create as any);

export function promiseAction<Returns, ActionParams = {}, Error = {}>(
  // tslint:disable-next-line:no-any
  name: string, func: (params: ActionParams, dispatch?: Dispatch, getState?: any, extraArg?: any) => Promise<Returns>
) {
  return createAsync<ActionParams, Returns, Error>(name, func);
}
