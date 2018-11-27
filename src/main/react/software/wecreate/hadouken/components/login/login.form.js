import React from "react"
import { Form } from "antd"
import { UsernameField } from "../field/username.field"
import { PasswordField } from "../field/password.field"
import { LoginButton } from "../button/login.button"
import { connect } from "react-redux"
import { loginAction } from "./login.actions"

@connect(store => ({}), dispatch => ({
	login: ({ username, password }) => dispatch(loginAction({ username, password }))
}))
export class LoginForm extends React.Component {

	render () {
		const { form: { getFieldDecorator, validateFields }, login } = this.props
		return (
			<Form onSubmit={ e => {
				e.preventDefault()
				validateFields((err, { username, password }) => {
					if (!err) {
						login({ username, password })
					}
				})
			} }
			      name={ "login" }
			>
				<UsernameField getFieldDecorator={ getFieldDecorator }/>
				<PasswordField getFieldDecorator={ getFieldDecorator }/>
				<LoginButton/>
			</Form>
		)
	}
}

export const AntDLoginForm = Form.create()(LoginForm)
