/* global CLIENT_ONLY_PRELOADED_STATE */
import React from "react"
import thunk from "redux-thunk"
import { hydrate } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import { reducers } from "./reducers"
import { Hadouken } from "./components/hadouken/hadouken"

const store = createStore(reducers, window.__PRELOADED_STATE__ || CLIENT_ONLY_PRELOADED_STATE, applyMiddleware(thunk))

const markup = (
    <Provider store={ store }>
        <BrowserRouter>
            <Hadouken/>
        </BrowserRouter>
    </Provider>
)

hydrate(markup, document.getElementById("hadouken"))