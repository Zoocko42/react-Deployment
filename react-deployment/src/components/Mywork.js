import React from 'react';
import habHotLogo from './assets/Habitation Hotspot-1.jpg';

export default function MyWork() {
    return(
        <article id='workArticle'>
            <h3 id='workHead'>My Work</h3>

            <card id='habHotspotCard'>
                <label>
                Habitation Hotspot
                <a href='https://habitationhotspot.com/' target="_blank">
                    <img src={habHotLogo}></img>
                </a>
                </label>
                <br></br>
                <a href='https://github.com/Zoocko42/skrongproject1' target="_blank">Github Link</a>
            </card>
            
            <card>
            </card>

        </article>
    )
}