import React from "react";
import "./card.css";

const Card = props => (
    <div className="card" onClick={props.imageClick}>
        <div className="img-container">
            <img alt={props.image.replace(".jpg", "")} src={requestAnimationFrame("../../images/" + props.image)} />
        </div>
    </div>
);

export default Card;