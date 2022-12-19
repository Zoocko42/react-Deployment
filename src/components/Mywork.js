import React from 'react';
import habHotLogo from './assets/Habitation Hotspot-1.jpg';

export default function MyWork() {
    return(
        <article id='workArticle'>
            <h3 id='workHead'>My Work</h3>

            <div id='habHotspotCard' className='card'>
                <a href='https://habitationhotspot.com/' target="_blank">
                    <img src={habHotLogo}></img>
                </a>
                <div className='container'>
                    <h3>Habitation Hotspot</h3>
                    <p>A lightweight app to help find useful locations in a new neighborhood.</p>
                    <a href='https://github.com/Zoocko42/skrongproject1' target="_blank">Github Link</a>
                </div>


            </div>

            <div className='card'>
            </div>

        </article>
    )
}