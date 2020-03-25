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
        const cards = this.props.data.map((card) => {
            return(
                <Cell columns={4} key={card._id}>
                    <Card title={card.title} preview={card.preview} thumbnail={card.thumbnail}>

                    </Card>
                </Cell>
            )
        })

        return(
            <div className="contents-cards">
                <Grid>
                    <Row>
                        {cards}                                                                                                                
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default MyAppCards;