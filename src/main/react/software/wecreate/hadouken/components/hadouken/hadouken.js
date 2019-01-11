import React from "react"
import { Route, Switch } from "react-router-dom"
import { Home } from "../home/home"
import { FourOhFour } from "../404/four.oh.four"

import "../../styles/main.scss"
import { Child } from "../child/child"
// import "../../../../../../../../node_modules/antd/dist/antd.css"


export const Hadouken = () => (
    <Switch>
        <Route path={ "/" } exact component={ Home }/>
        <Route path={ "/child" } exact component={ Child }/>
        <Route component={ FourOhFour }/>
    </Switch>
)