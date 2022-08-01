import React from 'react';
import { nanoid } from 'nanoid';

interface IProps {
    define: string[];
    width?: number;
    height?: number;
    transform?: string;
}

const Icon = ({ define, width=96, height=96, transform }: IProps) => (
    <svg viewBox={`0 0 ${width} ${height}`}>
        <g transform={transform}>
            {define.map(item => (
                <path key={nanoid()} d={item}></path>
            ))}
        </g>
    </svg>  
);

export default React.memo(Icon);