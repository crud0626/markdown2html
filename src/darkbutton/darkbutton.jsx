import React from 'react';

const DarkButton = ({onChangeDark}) => (
    <label class="dark-mode-button">
        <input type="checkbox" onClick={onChangeDark}/>
        <span className="onoff-switch"></span> 
    </label>
    );

export default DarkButton;