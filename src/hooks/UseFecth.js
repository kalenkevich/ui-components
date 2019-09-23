import { useContext, useState, useEffect } from 'react';
import LoadingContext from '../context/LoadingContext';
import Logger from '../services/Logger';

export const defaultOptions = {
  defaultValue: null,
  loadingArea: 'global',
};

export default (promise, options = defaultOptions) => {
  const {
    startLoadingData,
    stopLoadingData,
    isLoading,
  } = useContext(LoadingContext);

  const [data, setData] = useState(options.defaultValue);
  const [error, setError] = useState(null);

  const isDataLoading = isLoading(options.loadingArea);

  const fetch = async () => {
    try {
      startLoadingData(options.loadingArea);

      const fetchedData = await promise;

      setData(fetchedData);
    } catch (err) {
      setError(error);
      Logger.error(err);
    } finally {
      stopLoadingData(options.loadingArea);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return [data, setData, error, isDataLoading];
};
