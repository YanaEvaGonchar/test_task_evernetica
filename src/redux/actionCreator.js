export const actionCreator = actionType => {
  return {
    started: () => ({
      type: actionType.REQUEST,
    }),
    done: data => ({
      type: actionType.SUCCESS,
      payload: data,
    }),
    failed: error => ({
      type: actionType.FAILURE,
      payload: {
        error,
      },
    }),
  };
};
