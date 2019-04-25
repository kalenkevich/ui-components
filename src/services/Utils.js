/* eslint-disable import/prefer-default-export */
export const getClassName = classNames => (classNames || []).reduce((result, className) => {
  if (!className) {
    return result;
  }

  return `${result} ${className}`;
}, '');
