import React, {
    Component,
    PropTypes
} from "react"
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
                    <input type="text" name="name" ref="name"/>
                    <button type="submit">Add</button>
                </form>
                <ul className="item-list">
                    {
                        items.map((item) => {
                            return (
                                <li key={ item.name }>{ item.name } <a className="delete" onClick={ (e) => {
                                    e.preventDefault()
                                    console.log("delete item")
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

ItemList.defaultProps = {
    items: []
}

const mapStateToProps = ({ ITEMS_REDUCER }) => ({
    items: ITEMS_REDUCER
})

export default connect(mapStateToProps, null)(ItemList)