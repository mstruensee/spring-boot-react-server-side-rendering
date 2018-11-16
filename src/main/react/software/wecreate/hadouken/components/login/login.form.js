import React, { Component, useState } from "react"
import FieldText from "@atlaskit/field-text"
import Button from "@atlaskit/button"
// import { Checkbox } from '@atlaskit/checkbox';
import Form, { Field, FormFooter, FormSection } from "@atlaskit/form"

export class LoginForm extends Component {

    constructor (props) {
        super(props)
        this.form = React.createRef()
    }

    onSubmitHandler = () => {
        console.log("onSubmitHandler")
        // Calling validate on the form will update it's fields state
        const validateResult = this.form.current.validate()
        console.log(validateResult)

        if (validateResult.isInvalid) {
            console.log("onSubmitHandler = Form Fields Invalid")
        } else {
            // Now call submit when your done
            this.form.submit()
        }
    }

    validateClickHandler = () => {
        this.form.current.validate()
        console.log(this.form)
    }

    render () {
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
                        <FieldText name={ "username" } placeholder={ "Username" } autoComplete={ "off" } isRequired shouldFitContainer/>
                    </Field>
                    <Field isRequired validateOnChange>
                        <FieldText name={ "password" } placeholder={ "Password" } type={ "password" } isRequired shouldFitContainer/>
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
