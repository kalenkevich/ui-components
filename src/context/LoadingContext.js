import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoadingContext = React.createContext(null);

export const LoadingProvider = LoadingContext.Provider;

export const LoadingConsumer = LoadingContext.Consumer;

export const LoadingApp = ({ children }) => {
  const [dataFetchingLoadingArea, setDataFetchingLoadingArea] = useState({});
  const [dataSavingLoadingArea, setDataSavingLoadingArea] = useState({});

  return (
    <LoadingProvider value={{
      startFetchingData: loadingArea => setDataFetchingLoadingArea(state => ({
        ...state,
        [loadingArea]: true,
      })),
      stopFetchingData: loadingArea => setDataFetchingLoadingArea(state => ({
        ...state,
        [loadingArea]: false,
      })),
      startSavingData: loadingArea => setDataSavingLoadingArea(state => ({
        ...state,
        [loadingArea]: true,
      })),
      stopSavingData: loadingArea => setDataSavingLoadingArea(state => ({
        ...state,
        [loadingArea]: false,
      })),
      isDataFetching: loadingArea => dataFetchingLoadingArea[loadingArea],
      isDataSaving: loadingArea => dataSavingLoadingArea[loadingArea],
      isLoading: loadingArea => dataFetchingLoadingArea[loadingArea] || dataSavingLoadingArea[loadingArea],
    }}>
      {children}
    </LoadingProvider>
  );
};

LoadingApp.propTypes = {
  children: PropTypes.node,
  isDataFetchingInitial: PropTypes.bool,
  isDataSavingInitial: PropTypes.bool,
};

export default LoadingContext;
