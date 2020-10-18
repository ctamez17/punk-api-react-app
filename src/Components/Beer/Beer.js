import React from 'react';
import './Beer.css';
import Like from '../Heart/Heart.js';

const Beer = ({ beer }) => {
    const{ name, tagline, first_brewed, image_url} = beer;
    return (
        <li className="beer_list-item">
            <ul>
                <h2>{name}</h2>
                <p>{tagline}</p>
                <p>{first_brewed}</p>
                {/* <button >Like 👍</button> */}
                
                <br></br><br></br>
                <img src={image_url} className="beer_image"/>
                <Like />
            </ul>
        </li>
    )
}

export default Beer;