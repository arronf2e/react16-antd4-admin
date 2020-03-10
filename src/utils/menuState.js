import Cookies from "js-cookie";

const ExpandState = "expand-state";

export function getExpandState() {
  return Cookies.get(ExpandState) || false;
}

export function setExpandState(value) {
  return Cookies.set(ExpandState, value);
}
