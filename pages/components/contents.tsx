import React, { Component } from "react";
import Cards from "./cards";

class Contents extends Component {
    state = {}
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <div className="wrapper-contents">
                <Cards />
            </div>
        )
    }
}

export default Contents;