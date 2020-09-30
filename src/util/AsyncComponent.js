import React, { Component } from "react"

/**
*
* @param {*} fn Promise
*/
function AsyncComponent(fn) {
    class AsyncC extends Component {
        constructor(prop) {
            super(prop)
            this.state = {
                C: null
            }
        }
        render() {
            const { C } = this.state
            return (
                <div>
                    {
                        C ? <C {...this.props}></C> : null
                    }
                </div>
            )
        }
        componentDidMount() {
            try {
                fn().then(
                    (resolve) => {
                        this.setState({
                            C: resolve.default
                        })
                    },
                    (reject) => {
                        console.log(reject);
                    }
                )
            }
            catch (e) {
                console.error(e)
            }
        }
    }
    return AsyncC
}
export default AsyncComponent;