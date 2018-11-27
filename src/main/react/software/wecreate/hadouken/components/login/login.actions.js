import { LOGIN, LOGIN_CANCEL, LOGIN_COMPLETE } from "./login.types"

export const loginAction = payload => ({ type: LOGIN, payload })
export const loginCancelAction = () => ({ type: LOGIN_CANCEL })
export const loginCompleteAction = ({ payload, error }) => ({ type: LOGIN_COMPLETE, payload, error })
