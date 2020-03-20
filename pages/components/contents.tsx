import React, { Component } from "react";

class Contents extends Component {
    state = {}
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <div className="contents-tags">
                <p className="tag">All</p>
                <p className="tag">Publishing</p>
                <p className="tag">Javascript</p>
                <p className="tag">React.js</p>
                <p className="tag">Node.js</p>
            </div>
        )
    }
}

export default Contents;