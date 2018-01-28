import actionCreatorFactory from 'typescript-fsa';
import { bindThunkAction } from 'typescript-fsa-redux-thunk';

const actionCreator = actionCreatorFactory();

export function promiseAction<Returns, Params = {}, Error = {}>(
  name: string, func: (params: Params) => Promise<Returns>
) {
  const forReducer = actionCreator.async<Params, Returns, Error>(name);
  const action = bindThunkAction(forReducer, func);

  return {
    action,
    forReducer
  };
}
