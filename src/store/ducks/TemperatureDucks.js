const INITIAL_STATE = {
  loading: false,
  temperature: "",
  error: false,
  theme: false,
};

// Types
const TEMPERATURE_LOADING = "TEMPERATURE_LOADING";
const TEMPERATURE_SUCCESS = "TEMPERATURE_SUCCESS";
const TEMPERATURE_FAILURE = "TEMPERATURE_FAILURE";
const CHANGE_THEME = "CHANGE_THEME";

// Reducer
export default function temperatureReducer(state = INITIAL_STATE, action) {
  // const { type, payload } = action;

  switch (action.type) {
    case TEMPERATURE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TEMPERATURE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        temperature: action.payload,
      };
    case TEMPERATURE_FAILURE:
      return {
        ...state,
        error: true,
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: !state.theme,
      };
    default:
      return state;
  }
}

// Actions
export const temperatureLoading = () => ({
  type: TEMPERATURE_LOADING,
});
export const temperatureSuccess = (data) => ({
  type: TEMPERATURE_SUCCESS,
  payload: data,
});
export const temperatureFailure = () => ({
  type: TEMPERATURE_FAILURE,
});
export const changeTheme = () => ({
  type: CHANGE_THEME,
});
