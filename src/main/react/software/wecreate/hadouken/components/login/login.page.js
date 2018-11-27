import React from "react"
import { AntDLoginForm } from "./login.form"
import styled from "styled-components"

const LoginPageStyled = styled.div`
    height: 100vh;
	display:flex;
	justify-content: center;
	align-items: center;
`
export const LoginPage = () => (
	<LoginPageStyled className={ "login-page" }>
		<AntDLoginForm/>
	</LoginPageStyled>
)