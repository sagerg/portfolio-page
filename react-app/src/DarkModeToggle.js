import React, { Fragment } from 'react';
import Switch from '@material-ui/core/Switch';
import useDarkMode from 'use-dark-mode';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

export default function DarkModeToggle() {
  const darkMode = useDarkMode(false);

  const [state, setState] = React.useState({
    light: true, dark: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    darkMode.toggle();
  };

  return (
    <Fragment>
      <div className="mode">
        {darkMode.value ? <Brightness2Icon /> : <WbSunnyIcon />}
      </div>
      <Switch
        checked={state.dark}
        onChange={handleChange}
        name="dark"
        color="secondary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </Fragment>
  );
};