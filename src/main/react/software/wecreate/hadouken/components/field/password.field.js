import React from "react"
import PropTypes from "prop-types"
import { Form, Icon, Input } from "antd"
import styled from "styled-components"

const LockIcon = styled(Icon)`
    color: "rgba(0,0,0,.25)"
`
export const PasswordField = ({ getFieldDecorator, ...attributes }) => (
    <Form.Item>
        {
            getFieldDecorator("password", {
                rules: [
                    { required: true, message: "Password required!" }
                ]
            })
            (
                <Input
                    autoComplete={ "off" }
                    name={ "password" }
                    prefix={ <LockIcon type={ "lock" }/> }
                    placeholder={ "Password" }
                    type={ "password" }
                    { ...attributes }
                />
            )
        }
    </Form.Item>
)

PasswordField.propTypes = {
    getFieldDecorator: PropTypes.func.isRequired
}