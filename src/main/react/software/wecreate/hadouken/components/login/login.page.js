import React from "react"
import { LoginForm } from "./login.form"
import styled from "styled-components"
import { LoginFormHooks } from "./login.form.hook"

const LoginPageStyled = styled.div`
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const LoginPage = () => (
    <LoginPageStyled className={ "login-page" }>
        <LoginFormHooks/>
    </LoginPageStyled>
)