import React, { Component } from "react"
import { formattime } from "../util/timeTool"
import { Popover, Toast, Modal, Icon } from 'antd-mobile';
import { createFromIconfontCN } from '@ant-design/icons'
import "../pages/Comment/comment.css"

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2101807_rwg7r8zlf2.js',
});

const Item = Popover.Item;

const alert = Modal.alert;
const showAlert = () =>
    alert('举报', '太好了，我们一起净化评论区', [
        { text: '取消', onPress: () => console.log('cancel') },
        {
            text: '确认举报',
            onPress: () =>
                new Promise((resolve) => {
                    // Toast.info('onPress Promise', 1);
                    setTimeout(resolve, 1000);
                }),
        },
    ])

class CommentItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            selected: '',
        }
    }
    showToast() {
        Toast.info('已复制到剪切板了', 1);
    }
    onSelect = (opt) => {
        if(opt.props.value=="copy"){
            this.showToast();
        }
        else if(opt.props.value=="report"){
            showAlert();
        }
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    render() {
        let { author, avatar, content, likes, time } = this.props.commnet
        let popover = (
            <Popover mask
                overlayClassName="fortest"
                overlayStyle={{ color: 'currentColor' }}
                visible={this.state.visible}
                overlay={[
                    (<Item key="4" value="copy" data-seed="logId">复制</Item>),
                    (<Item key="5" value="report" style={{ whiteSpace: 'nowrap' }}>举报</Item>),
                    ,
                ]}
                align={{
                    overflow: { adjustY: 0, adjustX: 0 },
                    offset: [-10, 0],
                }}
                onVisibleChange={this.handleVisibleChange}
                onSelect={this.onSelect}
            >
                <div>
                    <Icon type="ellipsis" />
                </div>
            </Popover>
        )
        return (
            <li>
                <div className="boxL">
                    <img src={avatar} className="avatar" />
                </div>
                <div className="boxR">
                    <h2 className="nickname">{author}</h2>
                    <p className="commentContent">
                        {content}
                    </p>
                    <p className="addTime">
                        <span className="md">{formattime(time,'m-d')}</span><span className="hs">{formattime(time,'h:i')}</span>
                    </p>
                </div>
                <span className="iconItem liuyan">
                    <IconFont type="icon-liuyan" className="iconClass" />
                </span>
                <span className="iconItem dianzan">
                    <i>{likes}</i>
                    <IconFont type="icon-dianzan" className="iconClass" />
                </span>
                <span className="popoverItem">
                    {popover}
                </span>
            </li>
        )
    }
}

export default CommentItem;