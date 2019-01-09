import { Observable } from "rxjs"
import { LOGIN, LOGIN_CANCEL } from "./login.types"
import { loginCompleteAction } from "./login.actions"
import { mergeMap } from "rxjs/operators"
import { ofType } from "redux-observable"

export const loginEpic = (action$, store, { post }) =>
	action$.pipe(
		ofType(LOGIN),
		mergeMap(() =>
			post("/api/v1/auth/login")
				.map(({ response }) => loginCompleteAction({ error: false, payload: response }))
				.catch(({ response }) => Observable.of(loginCompleteAction({ error: true, payload: response })))
				.takeUntil(action$.ofType(LOGIN_CANCEL))
		)
	)
