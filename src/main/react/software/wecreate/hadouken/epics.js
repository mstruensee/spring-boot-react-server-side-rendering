import { combineEpics } from "redux-observable"
import { loginEpic } from "./components/login/login.epic"

export const epics = combineEpics(
	loginEpic
)