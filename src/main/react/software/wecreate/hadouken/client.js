/* global CLIENT_ONLY_PRELOADED_STATE */
import React from "react"
import ReduxThunk from "redux-thunk"
import { hydrate } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import {
    applyMiddleware,
    createStore,
} from "redux"
import { Provider } from "react-redux"
import { reducers } from "./reducers"
import { Hadouken } from "./components/hadouken/hadouken"
// import { createEpicMiddleware } from "redux-observable"
// import { ajax } from "rxjs/ajax"
// import { epics } from "./epics"

// const epicMiddleware = createEpicMiddleware({
// 	dependencies: { ajax: ajax, get: ajax.get, post: ajax.post, put: ajax.put, patch: ajax.patch, del: ajax.delete }
// })

const store = createStore(reducers, window.__PRELOADED_STATE__ || CLIENT_ONLY_PRELOADED_STATE, applyMiddleware(ReduxThunk/*, epicMiddleware*/))
// epicMiddleware.run(epics)

const markup = (
    <Provider store={ store }>
        <BrowserRouter>
            <Hadouken/>
        </BrowserRouter>
    </Provider>
)

hydrate(markup, document.getElementById("hadouken"))