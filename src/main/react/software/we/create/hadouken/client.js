import React from "react"
import thunk from "redux-thunk"
import { render } from "react-dom"
import { BrowserRouter } from "react-router"
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import { reducers } from "./reducers"
import { Hadouken } from "./components/hadouken/hadouken"

const store = createStore(reducers, window.__PRELOADED_STATE__, applyMiddleware(thunk))

const markup = (
    <Provider store={ store }>
        <BrowserRouter>
            <Hadouken/>
        </BrowserRouter>
    </Provider>
)

render(markup, document.getElementById("hadouken"))