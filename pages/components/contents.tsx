import React, { Component } from "react";
import Cards from "./cards";

interface Props {
    data: Array<Object>;
}

class Contents extends Component<Props> {
    state = {}
    constructor(props: Props) {
        super(props);
    }

    render() {
        return(
            <div className="wrapper-contents">
                <Cards {...this.props.data}/>
            </div>
        )
    }
}

export default Contents;