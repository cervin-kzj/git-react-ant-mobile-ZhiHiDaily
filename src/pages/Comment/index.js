import React, { Component } from "react"
import { connect } from "react-redux"
import {
    requestLongCommentsAction,
    requestShortCommentsAction,
    getLongCommentsAction,
    getShortCommentsAction
} from "../../store/modules/comments"
import { Accordion } from 'antd-mobile';

import "./comment.css"

import CommentItem from "../../components/CommentItem"
import CommentNav from "../../components/CommentNav"

class Comment extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        let id = this.props.match.params.id;
        this.props.requestLongComments(id);
        this.props.requestShortComments(id);
    }

    render() {
        return (
            <div className="commentWrap">
                <CommentNav
                    LongComments={this.props.getLongComments.length}
                    ShortComments={this.props.getShortComments.length}
                >
                </CommentNav>
                <div className="container">
                    <Accordion accordion defaultActiveKey="0" className="my-accordion">
                        <Accordion.Panel header={`${this.props.getShortComments.length} 条短评论`}>
                            <ul className="commentList">
                                {
                                    this.props.getShortComments != []
                                        ?
                                        this.props.getShortComments.map((item, index) => {
                                            return <CommentItem key={index} commnet={item}></CommentItem>
                                        })
                                        :
                                        null
                                }

                            </ul>
                        </Accordion.Panel>
                        <Accordion.Panel header={`${this.props.getLongComments.length} 长短评论`} className="pad">
                            <ul className="commentList">
                                {
                                    this.props.getLongComments != []
                                        ?
                                        this.props.getLongComments.map((item, index) => {
                                            return <CommentItem key={index} commnet={item}></CommentItem>
                                        })
                                        :
                                        null
                                }
                            </ul>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        getLongComments: getLongCommentsAction(state),
        getShortComments: getShortCommentsAction(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestLongComments: (id) => {
            dispatch(requestLongCommentsAction(id))
        },
        requestShortComments: (id) => {
            dispatch(requestShortCommentsAction(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment);