import Logger from '../services/Logger';

export default (dateBuildValue) => {
  const buildDateKeyName = 'build_date';
  const ls = window.localStorage;

  try {
    const localStorageBuildDateStr = ls.getItem(buildDateKeyName);

    if (localStorageBuildDateStr) {
      const localStorageBuildDate = JSON.parse(localStorageBuildDateStr);

      if (localStorageBuildDate !== dateBuildValue) {
        ls.clear();
        ls.setItem(buildDateKeyName, JSON.stringify(dateBuildValue));
      }
    } else {
      ls.setItem(buildDateKeyName, JSON.stringify(dateBuildValue));
    }
  } catch (error) {
    Logger.error(error);
  }
};
