export var findErrors = (msg, status, id = null) => {
  return {
    payload: { msg, status, id }
  };
};

export var clearError = () => {
  return {
    msg: {},
    status: null,
    id: null
  };
};
