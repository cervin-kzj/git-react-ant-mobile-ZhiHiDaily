import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import { Carousel } from 'antd-mobile';
import Item from "antd-mobile/lib/popover/Item";
class Banner extends Component {
    constructor(props) {
        super(props)
    }
    jumpUrl(id) {
        this.props.history.push(`/detail/${id}`);
    }
    render() {
        return (
            <Carousel
                autoplay={false}
                infinite
                // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                // afterChange={index => console.log('slide to', index)}
                className="banner"
            >
                {this.props.topStories.map(val => (
                    <a
                        key={val}
                        onClick={() => { this.jumpUrl(val.url.slice(val.url.lastIndexOf("/") + 1)) }}
                        style={{ position: 'relative', display: 'inline-block', width: '100%', height: '5.7rem' }}
                    >
                        <img
                            src={`${val.image}`}
                            alt={`${val.title}`}
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));

                            }}
                        />
                        <h2 className="newsTitle">{val.title}</h2>
                        <h3 className="newsHint">{val.hint}</h3>
                    </a>
                ))}
            </Carousel>
        )
    }
}
export default withRouter(Banner)