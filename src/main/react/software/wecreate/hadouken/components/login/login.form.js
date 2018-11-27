import React from "react"
import { Form } from "antd"
import { UsernameField } from "../field/username.field"
import { PasswordField } from "../field/password.field"
import { LoginButton } from "../button/login.button"

const LoginForm = ({ form: { getFieldDecorator, validateFields } }) => (
    <Form onSubmit={ (e) => {
        e.preventDefault()
        validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values, 'trigger login action/epic')
            }
        })
    } }
          action={ "/api/v1/auth/login" }
          method={ "post" }
          name={ "login" }
    >
        <UsernameField getFieldDecorator={ getFieldDecorator }/>
        <PasswordField getFieldDecorator={ getFieldDecorator }/>
        <LoginButton/>
    </Form>
)

export const AntDLoginForm = Form.create()(LoginForm)
