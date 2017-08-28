import {
  RECEIVE_USER_PINS,
  RECEIVE_PIN,
  CLEAR_ERRORS,
  RECEIVE_ERRORS,
  DELETE_PIN } from '../actions/pin_actions';
import { merge, omit } from 'lodash';

const defaultState = {
  userPins: {},
  pin: {},
  errors: [],
};

const PinReducer = (state = defaultState, action) => {
  let nextState;

  switch (action.type) {
    case RECEIVE_USER_PINS:
      nextState = merge({}, defaultState, {userPins: action.userPins});
      return nextState;
    case RECEIVE_PIN:
      const addedPinState = merge(
        {}, state, {userPins: {[action.pin.id]: action.pin}});
      nextState = merge({}, addedPinState, {pin: action.pin});
      return nextState;
    case DELETE_PIN:
      const withoutPin = omit(state.userPins, [action.pin.id]);
      nextState = merge({}, {userPins: withoutPin});
      return nextState;
    case RECEIVE_ERRORS:
      nextState = merge({}, state, {errors: action.errors});
      return nextState;
    case CLEAR_ERRORS:
      nextState = Object.assign({}, state, {errors: []});
      return nextState;
    default:
      return state;
  }
};

export default PinReducer;