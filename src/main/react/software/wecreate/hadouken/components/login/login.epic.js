import { Observable } from "rxjs"
import { LOGIN, LOGIN_CANCEL } from "./login.types"
import { loginCompleteAction } from "./login.actions"
import 'rxjs/Rx';


export const loginEpic = (action$, store, { post }) =>
	action$.
		ofType(LOGIN)
		.mergeMap(({ username, password }) => {
				return post("/api/v1/auth/login", { credentials: "same-origin", username, password })
					.map(({ response }) => {
						debugger
						return loginCompleteAction({ error: false, payload: response })
					})
					.catch(({ response }) => {
						debugger
						return Observable.of(loginCompleteAction({ error: true, payload: response }))
					})
					.takeUntil(action$.ofType(LOGIN_CANCEL))
			}
		)
