import React from 'react';
import {Link} from 'react-router-dom'

export default function Nav () {
    return (
        <nav className='navbar'>
            <h3>Zachariah Schneider</h3>
            <ul>

                <li>
                    <a target="_blank" href="https://www.facebook.com/zac.schneider2/">Facebook</a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/zachariah-schneider-a292214b/">LinkedIn</a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/Zoocko42">Github</a>
                </li>
            </ul>
        </nav>
    );
}