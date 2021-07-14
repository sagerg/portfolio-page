import React from 'react';
import Switch from '@material-ui/core/Switch';
import useDarkMode from 'use-dark-mode';

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
    <div>
      <span>☾</span>
      <Switch
        checked={state.dark}
        onChange={handleChange}
        name="dark"
        color="secondary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <span>☀</span>
    </div>
  );
};