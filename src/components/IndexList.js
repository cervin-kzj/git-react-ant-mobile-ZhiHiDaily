import React from "react"
import { withRouter } from "react-router-dom"

class IndexList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="indexListWrap">
                {
                    this.props.list.map((item, index) => {
                        return (
                            <div className="listItem" key={index}>
                                <div className="titleBox">
                                    {item.time}
                                </div>
                                <ul>
                                    {
                                        item.arr.map((item, index) => {
                                            return (
                                                <li key={index} className="liItem" onClick={() => { this.props.history.push(`/detail/${item.id}`) }}>

                                                    <div className="lBox">
                                                        <h3 className="title">{item.title}</h3>
                                                        <span className="hint">{item.hint}</span>
                                                    </div>
                                                    <div className="rBox">
                                                        <img src={item.images[0]} className="thumb" alt={item.title} />
                                                    </div>

                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default withRouter(IndexList);
