import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addItem, deleteItem } from "./item.action.creators"

class ItemList extends Component {
    render () {
        const { items, addItem, deleteItem } = this.props

        return (
            <div>
                <form onSubmit={ (e) => {
                    e.preventDefault()
                    addItem(this.refs.name.value)
                } }>
                    <input type="text" name="name" ref="name"/>
                    <button type="submit">Add</button>
                </form>
                <ul className="item-list">
                    {
                        items.map((item) => {
                            return (
                                <li key={ item.name }>{ item.name } <a className="delete" onClick={ (e) => {
                                    e.preventDefault()
                                    deleteItem(item.name)
                                } }>&times;</a></li>
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

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ addItem, deleteItem }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)