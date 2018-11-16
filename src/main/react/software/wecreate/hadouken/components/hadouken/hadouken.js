import React from "react"
import { Route, Switch } from "react-router-dom"
import { Home } from "../home/home"
import { FourOhFour } from "../404/four.oh.four"

import "../../styles/main.scss"
import { LoginPage } from "../login/login.page"

export const Hadouken = () => (
    <Switch>
        <Route path={ "/" } exact component={ Home }/>
        <Route path={ "/login" } exact component={ LoginPage }/>
        <Route component={ FourOhFour }/>
    </Switch>
)