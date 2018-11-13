import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

class ItemList extends Component {
    render () {
        const { items } = this.props

        return (
            <div>
                <form onSubmit={ () => console.log("add item") }>
                    <input type="text" name="name" ref="name"/>
                    <button type="submit">Add</button>
                </form>
                <ul className="item-list">
                    {
                        items.map((item) => {
                            return (
                                <li key={ item.name }>{ item.name } <a className="delete" onClick={ () => console.log("deleted item") }>&times;</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

ItemList.propTypes = {
    items: PropTypes.array
}

const mapStateToProps = ({ items }) => ({
    items
})


export const ItemListContainer = connect(mapStateToProps)(ItemList)