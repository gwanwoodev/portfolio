import Card from "./card";
import {Cell, Grid, Row} from '@material/react-layout-grid';

const MyAppCards = (_props:any) => {
    return(
        <div className="contents-cards">
            <Grid>
                <Row>
                    <Cell columns={4}>
                        <Card />
                    </Cell>
                    <Cell columns={4}>
                        <Card />
                    </Cell>

                    <Cell columns={4}>
                        <Card />
                    </Cell>

                    <Cell columns={4}>
                        <Card />
                    </Cell>                                                                              

                    <Cell columns={4}>
                        <Card />
                    </Cell>     

                    <Cell columns={4}>
                        <Card />
                    </Cell>     

                    <Cell columns={4}>
                        <Card />
                    </Cell>     

                    <Cell columns={4}>
                        <Card />
                    </Cell>     
                    
                    <Cell columns={4}>
                        <Card />
                    </Cell>     

                    <Cell columns={4}>
                        <Card />
                    </Cell>                                                                                                                             
                </Row>
            </Grid>
        </div>
    )
}

export default MyAppCards;