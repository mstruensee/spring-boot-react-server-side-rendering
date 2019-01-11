import React from "react"
import ReduxThunk from "redux-thunk"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import { reducers } from "./reducers"
import { Hadouken } from "./components/hadouken/hadouken"

window.render = (template, model) => {
    const { location } = JSON.parse(model.get("requestData"))
    const preloadedState = JSON.parse(model.get("preloadedState"))

    const store = createStore(reducers, preloadedState, applyMiddleware(ReduxThunk))

    const markup = renderToString(
        <Provider store={ store }>
            <StaticRouter location={ location } context={ {} }>
                <Hadouken/>
            </StaticRouter>
        </Provider>
    )

    return template
        .replace("<div id=\"hadouken\"></div>", `<div id="hadouken">${markup}</div>`)
        .replace("window.__PRELOADED_STATE__ = undefined", `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}`)
}