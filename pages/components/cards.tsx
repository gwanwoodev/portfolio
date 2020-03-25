import React, {Component} from "react";
import Card from "./card";
import {Cell, Grid, Row} from '@material/react-layout-grid';

interface Props {
    data: any;
}

class MyAppCards extends Component<Props> {
    constructor(props: Props) {
        super(props);
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