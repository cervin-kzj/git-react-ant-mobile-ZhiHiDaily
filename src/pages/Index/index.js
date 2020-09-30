import React, { Component } from "react"
import { connect } from "react-redux"
import {
    requestTopStoriesAction,
    requestBeforeAction,
    getTopStoriesAction,
    getStoriesAction,
    setNAction,
    getNAction,
    getIsLoadAction
} from "../../store/modules/latest"
import Banner from "../../components/Banner"
import IndexNav from "../../components/IndexNav"
import IndexList from "../../components/IndexList"

import "./index.css"
class Index extends Component {
    constructor(props) {
        super(props)
        this.refNav = React.createRef();
    }
    componentWillMount() {
        this.props.requestTopStories()
    }
    render() {
        // console.log('~~render~~')
        return (
            <div className="indexWrap">
                <IndexNav ref={this.refNav}></IndexNav>
                <Banner topStories={this.props.topStoriesAction}></Banner>
                <IndexList list={this.props.storiesAction}></IndexList>
            </div>
        )
    }
    componentDidMount() {
        let wh, dh, sh;
        wh = document.documentElement.clientHeight;
        // console.log('wh', wh);
        window.onscroll = () => {
            // console.log("~onscroll~");
            let arr = [];

            let titleBoxEle = document.getElementsByClassName("titleBox");
            // console.log("titleBoxEle", titleBoxEle.length);

            for (let i = 0; i < titleBoxEle.length; i++) {
                // console.log(titleBoxEle[i], titleBoxEle[i].getBoundingClientRect().top);

                // es5:
                // arr.push(titleBoxEle[i].getBoundingClientRect().top);
                // es6:
                arr = [
                    ...arr,
                    titleBoxEle[i].getBoundingClientRect().top
                ]
            }
            // console.log(arr);
            arr.forEach((item, index) => {
                if (item <= document.getElementsByClassName('headerNav')[0].clientHeight) {
                    // console.log(titleBoxEle[index].innerText);
                    document.getElementsByClassName("active")[0].innerText = titleBoxEle[index].innerText;
                }
            })

            if (document.getElementsByClassName("active")[0].innerText == "今日新闻") {
                document.getElementsByClassName("active")[0].innerText = "知乎日报";
            }

            dh = document.documentElement.offsetHeight;
            // console.log('dh', dh);

            sh = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log('sh', sh);

            if (wh + sh + 50 >= dh) {
                if (this.props.isLoadAction == true) {
                    this.props.setN();
                    this.props.requestBefore();
                }
            }
        }
    }
    componentWillUnmount() {
        window.onscroll = null;
    }
}
const mapStateToProps = (state) => {
    return {
        topStoriesAction: getTopStoriesAction(state),
        storiesAction: getStoriesAction(state),
        nAction: getNAction(state),
        isLoadAction: getIsLoadAction(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestTopStories: () => {
            return dispatch(requestTopStoriesAction())
        },
        requestBefore: () => dispatch(requestBeforeAction()),
        setN: () => dispatch(setNAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);