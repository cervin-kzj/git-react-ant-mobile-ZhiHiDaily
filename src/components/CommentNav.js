import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import { NavBar, Icon } from 'antd-mobile';
class CommentNav extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.go(-1)}
            >{`${this.props.LongComments + this.props.ShortComments} 条评论`}</NavBar>
        )
    }
}

export default withRouter(CommentNav);