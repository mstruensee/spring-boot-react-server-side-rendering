import React, { useRef, useState } from "react"
import FieldText from "@atlaskit/field-text"
import Button from "@atlaskit/button"
import Form, { Field, FormFooter, FormSection } from "@atlaskit/form"

export const LoginFormHooks = () => {
    const form = useRef(null)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Form
            name={ "login" }
            onSubmit={ () => {
                if (!form.current.validate()) this.form.submit()
            } }
            action={ "/api/v1/auth/login" }
            method={ "post" }
            ref={ form }
        >
            <FormSection>
                <Field isRequired validateOnChange invalidMessage="Invalid Message">
                    <FieldText name={ "username" } placeholder={ "Username" } autoComplete={ "off" } value={ username } onChange={ setUsername } isRequired shouldFitContainer/>
                </Field>
                <Field isRequired validateOnChange>
                    <FieldText name={ "password" } placeholder={ "Password" } type={ "password" } autoComplete={ "off" } value={ password } onChange={ setPassword } isRequired shouldFitContainer/>
                </Field>
            </FormSection>
            <FormFooter>
                <Button appearance={ "primary" } type={ "submit" } onClick={ () => form.current.validate() }>
                    Login
                </Button>
            </FormFooter>
        </Form>
    )
}
