import React, { Component } from "react"
import { connect } from "react-redux"
import { requestNewsDetailAction, getNewsDetailAction } from "../../store/modules/detail"
import { createFromIconfontCN } from '@ant-design/icons'
import "./detail.css"

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2101807_rwg7r8zlf2.js',
});

class Detail extends Component {
    constructor(props) {
        super(props)
        this.detailRef = React.createRef();
    }
    render() {
        let { body, css, image, title, id } = this.props.getNewsDetail
        if (this.detailRef.current != undefined && body != null) {
            this.detailRef.current.innerHTML = body;
            document.getElementsByClassName('img-place-holder')[0].innerHTML = `<img src='${image}' class='thumb'/>`;
            let ele = document.createElement('h2');
            ele.innerText = title;
            ele.className = "title";
            document.getElementsByClassName('headline')[0].appendChild(ele);
        }
        
        return (
            <div className="detailWrap">
                {
                    css != null ?
                        <link rel="stylesheet" href={css[0]} />
                        : null
                }
                <div ref={this.detailRef}></div>
                <div className="footerNav">
                    <span className="goBack" onClick={() => { this.props.history.go(-1) }}>
                        <IconFont type="icon-fanhui" className="iconClass" />
                    </span>
                    <ul>
                        <li>
                            <span className="navItem" onClick={() => { this.props.history.push(`/comment/${id}`) }}>
                                <IconFont type="icon-pinglun" className="iconClass" />
                                {/* <i>228</i> */}
                            </span>
                        </li>
                        <li>
                            <span className="navItem">
                                {/* <IconFont type="icon-dianzan" className="iconClass" /> */}
                                <IconFont type="icon-yidianzan" className="iconClass" />
                                {/* <i>26</i> */}
                            </span>
                        </li>
                        <li>
                            <span className="navItem">
                                {/* <IconFont type="icon-shoucang" className="iconClass" /> */}
                                <IconFont type="icon-yishoucang" className="iconClass" />
                            </span>
                        </li>
                        <li>
                            <span className="navItem">
                                <IconFont type="icon-shangchuan" className="iconClass" />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.props.requestNewsDetail(this.props.match.params.id)
    }
}
const mapStateToProps = (state) => {
    return {
        getNewsDetail: getNewsDetailAction(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestNewsDetail: (id) => {
            dispatch(requestNewsDetailAction(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);