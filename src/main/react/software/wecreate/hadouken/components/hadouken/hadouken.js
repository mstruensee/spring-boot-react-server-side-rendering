import React from "react"
import { Link, Route, Switch } from "react-router-dom"
import { Home } from "../home/home"
import { Child } from "../child/child"
import { FourOhFour } from "../404/four.oh.four"

import "../../styles/main.scss"

export const Hadouken = () => (
    <div>
        <h1>Hello Server Side Rendering!!!!</h1>
        <ul>
            <li><Link to={ "/" }>Home</Link></li>
            <li><Link to={ "/child" }>Child</Link></li>
            <li><Link to={ "/unno" }>Unno</Link></li>
        </ul>

        <Switch>
            <Route path={ "/" } exact component={ Home }/>
            <Route path={ "/child" } exact component={ Child }/>
            <Route component={ FourOhFour }/>
        </Switch>
    </div>
)