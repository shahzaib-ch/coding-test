import ToggleButton from 'react-toggle-button';
import React from 'react';
import './../App.css';
import './../index.css';

const Toggle = (props) => {
  return(
    <div className="toggle">
    <ToggleButton
      inactiveLabel="ID"
      activeLabel="Name"
      colors={{
                activeThumb: {
                  base: 'rgb(250,250,250)',
                },
                inactiveThumb: {
                  base: 'rgb(250,250,250)',
                },
                active: {
                  base: 'rgb(207,221,245)',
                  hover: 'rgb(177, 191, 215)',
                },
                inactive: {
                  base: 'rgb(207,221,245)',
                  hover: 'rgb(177, 191, 215)',
                }
              }}
      value={props.status}
      onToggle={props.handler}
    />
    </div>
  );
}

export default Toggle;
