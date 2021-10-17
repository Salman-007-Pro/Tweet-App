import React from 'react';
import {StackActions, CommonActions, DrawerActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(route, params) {
  navigationRef.current.navigate(route, params);
}

export function goBack(count = 1) {
  if (typeof count === 'number' && count > 0) {
    return navigationRef.current.dispatch(state => {
      const routes = state.routes.slice(0, -count);
      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });
  }
  navigationRef.current.goBack();
}

export function pop(count = 1) {
  const popAction = StackActions.pop(count);
  navigationRef.current.dispatch(popAction);
}

export function reset(route, params) {
  navigationRef.current.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: route, params}],
    }),
  );
}

export function resetToRoutes(routes = []) {
  navigationRef.current.dispatch(
    CommonActions.reset({
      index: routes.length - 1,
      routes: routes,
    }),
  );
}
