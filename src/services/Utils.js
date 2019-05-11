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
