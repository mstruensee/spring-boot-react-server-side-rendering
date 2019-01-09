import React from "react"
import { Button } from "antd"

export const LoginButton = ({ ...attributes }) => (
    <Button
        htmlType={ "submit" }
        type={ "submit" }
        { ...attributes }
    >
        Login
    </Button>
)
