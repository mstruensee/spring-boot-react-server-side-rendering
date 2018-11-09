import React from "react"
import { Link, Match, Miss } from "react-router"
import { Home } from "../home/home"
import { Child } from "../child/child"
import { FourOhFour } from "../404/four.oh.four"

import "../../styles/main.css"

export const Hadouken = () => (
    <div>
        <h1>Hello Server Side Rendering!!!!</h1>
        <ul>
            <li><Link to={ "/" }>Home</Link></li>
            <li><Link to={ "/child" }>Child</Link></li>
        </ul>

        <Match exactly pattern={ "/" } component={ Home }/>
        <Match pattern={ "/child" } component={ Child }/>

        <Miss component={ FourOhFour }/>
    </div>
)