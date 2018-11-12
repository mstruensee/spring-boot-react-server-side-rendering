import React from "react"
import thunk from "redux-thunk"
import { renderToString } from "react-dom/server"
import { createServerRenderContext, ServerRouter } from "react-router"
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import { reducers } from "./reducers"
import { Hadouken } from "./components/hadouken/hadouken"

window.render = (template, model) => {
    const context = createServerRenderContext()
    const { location } = JSON.parse(model.get("requestData"))
    const preloadedState = JSON.parse(model.get("preloadedState"))

    const store = createStore(reducers, preloadedState, applyMiddleware(thunk))

    const markup = renderToString(
        <Provider store={ store }>
            <ServerRouter location={ location } context={ context }>
                <Hadouken/>
            </ServerRouter>
        </Provider>
    )

    return template
        .replace("SERVER_RENDERED_HTML", markup)
        .replace("SERVER_RENDERED_STATE", JSON.stringify(preloadedState))
}