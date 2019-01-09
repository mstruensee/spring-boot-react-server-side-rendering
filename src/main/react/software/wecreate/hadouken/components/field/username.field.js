import React from "react"
import PropTypes from "prop-types"
import { Form, Icon, Input } from "antd"
import styled from "styled-components"

const UserIcon = styled(Icon)`
    color: "rgba(0,0,0,.25)"
`

export const UsernameField = ({ getFieldDecorator, ...attributes }) => (
    <Form.Item>
        {
            getFieldDecorator("username", {
                rules: [
                    { required: true, message: "Username required." }
                ]
            })
            (
                <Input
                    autoComplete={ "off" }
                    name={ "username" }
                    placeholder={ "Username" }
                    prefix={ <UserIcon type={ "user" }/> }
                    { ...attributes }
                />
            )
        }
    </Form.Item>

)

UsernameField.propTypes = {
    getFieldDecorator: PropTypes.func.isRequired
}