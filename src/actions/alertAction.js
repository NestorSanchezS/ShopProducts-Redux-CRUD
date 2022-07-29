import { SHOW_ALERT, HIDE_ALERT } from "../types/index.JS";

//View alert
export const viewAlert = (alert) => (dispatch) => {
  dispatch(createAlertError(alert));
};

const createAlertError = (alert) => ({
  type: SHOW_ALERT,
  payload: alert,
});

//hide alert
export const hideAlertAction = () => (dispatch) => {
  dispatch(hideAlert());
};

const hideAlert = () => ({
  type: HIDE_ALERT,
});
