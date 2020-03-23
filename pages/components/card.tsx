import React from 'react';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons
  } from "@material/react-card";
import Button from "@material/react-button";

const MyAppCard = (_props: any) => {
    return (
        <Card>
            <CardPrimaryContent>
                <CardMedia square imageUrl="https://gwanwoodev.github.io/assets/img/posts/momentum_base.jpg" />
            </CardPrimaryContent>

            <CardActions className="card-preview">
                <p>Preview Text</p>
            </CardActions>

            <CardActions className="card-footer">
                <CardActionButtons>
                    <Button outlined raised className="card-btn">Demo</Button>
                </CardActionButtons>
            </CardActions>
        </Card>
    );
}

export default MyAppCard;