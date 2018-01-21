import { AsyncActionCreators } from 'typescript-fsa';

// https://github.com/aikoven/typescript-fsa/issues/5#issuecomment-255347353
export default function wrapAsyncWorker<TParameters, TSuccess, TError>(
  asyncAction: AsyncActionCreators<TParameters, TSuccess, TError>,
  worker: (params: TParameters) => Promise<TSuccess>,
) {
  return function wrappedWorker(dispatch: Function, params: TParameters): Promise<TSuccess> {
    dispatch(asyncAction.started(params));
    return worker(params).then(result => {
      dispatch(asyncAction.done({ params, result }));
      return result;
    // tslint:disable-next-line:align
    }, (error: TError) => {
      dispatch(asyncAction.failed({ params, error }));
      throw error;
    });
  };
}
