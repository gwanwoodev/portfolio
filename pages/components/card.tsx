import React from 'react';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
  } from "@material/react-card";

const MyAppCard = (_props: any) => {
    return (
        <Card>
            <CardPrimaryContent>
                <h1>Header</h1>
                <CardMedia square imageUrl="https://gwanwoodev.github.io/assets/img/posts/momentum_base_placehold.jpg" />
            </CardPrimaryContent>

            <CardActions>
                <CardActionButtons>
                    <button>Click Me</button>
                </CardActionButtons>
            </CardActions>

            <CardActionIcons>
                <i>Click Me Too!</i>
            </CardActionIcons>
        </Card>
    );
}

export default MyAppCard;