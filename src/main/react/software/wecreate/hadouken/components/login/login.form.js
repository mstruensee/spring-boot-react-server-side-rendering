import React, { Component } from "react"
import FieldText from "@atlaskit/field-text"
import Button from "@atlaskit/button"
import Form, { Field, FormFooter, FormSection } from "@atlaskit/form"

export class LoginForm extends Component {

    state = {
        username: "",
        password: ""
    }

    constructor (props) {
        super(props)
        this.form = React.createRef()
    }

    onSubmitHandler = () => {
        if (!this.form.current.validate()) this.form.submit()
    }

    validateClickHandler = () => {
        this.form.current.validate()
    }

    onFieldChangeHandler = ({ target: { name, value } }) => {
        this.setState(() => ({
            [name]: value
        }))
    }

    render () {
        const { username, password } = this.state

        return (
            <Form
                name={ "login" }
                onSubmit={ this.onSubmitHandler }
                action={ "/api/v1/auth/login" }
                method={ "post" }
                ref={ this.form }
            >
                <FormSection>
                    <Field isRequired validateOnChange invalidMessage="Invalid Message">
                        <FieldText name={ "username" } placeholder={ "Username" } autoComplete={ "off" } value={ username } onChange={ this.onFieldChangeHandler } isRequired shouldFitContainer/>
                    </Field>
                    <Field isRequired validateOnChange>
                        <FieldText name={ "password" } placeholder={ "Password" } type={ "password" } autoComplete={ "off" } value={ password } onChange={ this.onFieldChangeHandler } isRequired shouldFitContainer/>
                    </Field>
                </FormSection>
                <FormFooter>
                    <Button appearance={ "primary" } type={ "submit" } onClick={ this.validateClickHandler }>
                        Login
                    </Button>
                </FormFooter>
            </Form>
        )
    }
}
