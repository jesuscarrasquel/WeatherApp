const INITIAL_STATE = {
  loading: false,
  location: "",
  error: false,
};

// Types
const LOCATION_LOADING = "LOCATION_LOADING";
const LOCATION_SUCCESS = "LOCATION_SUCCESS";
const LOCATION_FAILURE = "LOCATION_FAILURE";

// Reducer
export default function LocationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOCATION_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        location: action.payload,
      };
    case LOCATION_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}

// Actions
export const locationLoading = () => ({
  type: LOCATION_LOADING,
});
export const locationSuccess = (data) => ({
  type: LOCATION_SUCCESS,
  payload: data,
});
export const locationFailure = () => ({
  type: LOCATION_FAILURE,
});
