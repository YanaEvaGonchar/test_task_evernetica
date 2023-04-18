export default function apiMiddleware({ dispatch, getState }) {
  return next => action => {
    if (action?.type?.endsWith("FAILURE")) {
      console.log('error')
    } else {
      next(action);
    }
  };
}
