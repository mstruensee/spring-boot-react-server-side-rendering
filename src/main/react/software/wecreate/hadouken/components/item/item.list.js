import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

class ItemList extends Component {
    render() {
        const { items } = this.props

        return (
            <div>
                <form onSubmit={ (e) => {
                    e.preventDefault()
                    console.log("form submit")
                } }>
                    <input type={ "text" } name={ "name" }/>
                    <button type={ "submit" }>Add</button>
                </form>
                <ul className={ "item-list" }>
                    {
                        items.map((item) => (
                            <li key={ item.name }>{ item.name }
                                <a className={ "delete" } onClick={ (e) => {
                                    e.preventDefault()
                                    console.log("delete item")
                                } }>
                                    &times;
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

ItemList.propTypes = {
    items: PropTypes.array,
}

ItemList.defaultProps = {
    items: [],
}

const mapStateToProps = ({ ITEMS_REDUCER }) => ({
    items: ITEMS_REDUCER,
})

export const ItemListContainer = connect(mapStateToProps, null)(ItemList)