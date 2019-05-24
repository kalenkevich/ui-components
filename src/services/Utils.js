/* eslint-disable import/prefer-default-export */
export const getClassName = classNames => (classNames || []).reduce((result, className) => {
  if (!className) {
    return result;
  }

  if (result.length === 0) {
    return className;
  }

  return `${result} ${className}`;
}, '');

export const getFormattedDate = (date) => {
  if (!date) {
    return '';
  }

  const formatter = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return formatter.format(date);
};

export const getFormattedDateRange = (dateStart, dateEnd) => {
  const formatter = new Intl.DateTimeFormat('en', {
    month: 'numeric',
    year: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return `${formatter.format(new Date(dateStart))} - ${formatter.format(new Date(dateEnd))}`;
};
