import React from 'react';

const SettingsContext = React.createContext(null);

export const SettingsProvider = SettingsContext.Provider;

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
