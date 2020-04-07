import Card from "./card";
import {Cell, Grid, Row} from '@material/react-layout-grid';

const MyAppCards = (props) => {
    const { data = [] } = props;
    return(        
        <div className="contents-cards">
            <Grid>
                <Row>
                    {
                        data.map(card => (
                            <Cell columns={4} key={card._id}>
                                <Card title={card.title} preview={card.preview} thumbnail={card.thumbnail} directLink={card.directLink} />
                            </Cell>                            
                        ))
                    }
                </Row>
            </Grid>
        </div>
    )
}

export default MyAppCards;