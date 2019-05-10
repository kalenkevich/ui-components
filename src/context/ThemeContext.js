import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'react-jss';
import defaultTheme from '../theme';

const ThemeContext = React.createContext({
  theme: defaultTheme,
  changeTheme: () => {},
});

const ThemedApp = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const changeTheme = (newTheme) => {
    setTheme({
      ...theme,
      ...newTheme,
    });
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      changeTheme,
    }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemedApp.propTypes = {
  children: PropTypes.node,
};

export {
  ThemedApp,
};

export default ThemeContext;
