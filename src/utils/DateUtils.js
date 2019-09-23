export const pad = number => (number < 10 ? `0${number}` : number);

export const getDate = () => {
  const newDate = new Date();
  const offset = Math.abs(newDate.getTimezoneOffset() / 60);

  return `${newDate.getUTCFullYear()
  }-${pad(newDate.getUTCMonth() + 1)
  }-${pad(newDate.getUTCDate())
  }T${pad(newDate.getUTCHours())
  }:${pad(newDate.getUTCMinutes())
  }:${pad(newDate.getUTCSeconds())
  }+${pad(offset)
  }:00`;
};

export const getFormattedDate = (dateRaw) => {
  const date = new Date(dateRaw);

  return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};
