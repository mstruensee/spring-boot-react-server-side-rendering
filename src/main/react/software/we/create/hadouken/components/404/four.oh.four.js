import React from "react"

export const FourOhFour = ({ location: { pathname } = {} }) => (
    <div>
        <h2>Not Found!</h2>
        <p>Could not find { pathname }.</p>
    </div>
)