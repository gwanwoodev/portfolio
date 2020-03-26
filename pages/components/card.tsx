import React from 'react';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons
  } from "@material/react-card";
import Button from "@material/react-button";

const MyAppCard = (props: any) => {
    return (
        <Card>
            <a href={props.directLink} target="_blank">
                <CardPrimaryContent>
                        <CardMedia square imageUrl={props.thumbnail} />
                </CardPrimaryContent>
            </a>

            <CardActions className="card-preview">
                {props.preview}
            </CardActions>

            <CardActions className="card-footer">
                <CardActionButtons>
                    <Button outlined raised className="card-btn" target='_blank' href={props.directLink}>Demo</Button>
                </CardActionButtons>
            </CardActions>
        </Card>
    );
}

export default MyAppCard;