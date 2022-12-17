export const emailReducer = (state, action) => {
  switch (action.type) {
    case "setEmail": {
      return { ...state, value: action.payload };
    }
    case "setError": {
      return { ...state, error: action.payload };
    }
    case "clearEmail": {
      return { ...state, value: "" };
    }
    default: {
      return state;
    }
  }
};
export const passwordReducer = (state, action) => {
  switch (action.type) {
    case "setPassword": {
      return { ...state, value: action.payload };
    }
    case "setError": {
      return { ...state, error: action.payload };
    }
    case "clearPassword": {
      return { ...state, value: "" };
    }
    default: {
      return state;
    }
  }
};
