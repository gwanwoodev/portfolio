import React, {Component} from "react";
import Card from "./card";
import {Cell, Grid, Row} from '@material/react-layout-grid';

class MyAppCards extends Component {
    constructor(props: any) {
        super(props);
    }

    componentWillUpdate() {
        console.log(this.props);
    }

    render() {
        return(
            <div className="contents-cards">
                <Grid>
                    <Row>
                        <Cell columns={4}>
                            <Card />
                        </Cell>                                                                                                                       
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default MyAppCards;