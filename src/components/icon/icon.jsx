import { nanoid } from 'nanoid';
import React from 'react';

const Icon = ({define}) => (
    <svg viewBox="0 0 96.000000 96.000000">
        <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)">
            {define.map(item => (
                <path key={nanoid()} d={item}></path>
            ))}
        </g>
    </svg>  
);

export default Icon;