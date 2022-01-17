const periods = {
  year: 12 * 30 * 24 * 60 * 60 * 1000,
  month: 30 * 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};

export const MsToPeriod = timeCreated => {
  const now = new Date().getTime();
  var diff = now - timeCreated;

  if (diff < 0) {
    diff = 0;
  }

  if (diff > periods.year) {
    const num = Math.floor(diff / periods.year);
    return num + (num > 1 ? ' years' : ' year') + ' ago';
  } else if (diff > periods.month) {
    const num = Math.floor(diff / periods.month);
    return num + (num > 1 ? ' months' : ' month') + ' ago';
  } else if (diff > periods.week) {
    const num = Math.floor(diff / periods.week);
    return num + (num > 1 ? ' weeks' : ' week') + ' ago';
  } else if (diff > periods.day) {
    const num = Math.floor(diff / periods.day);
    return num + (num > 1 ? ' days' : ' day') + ' ago';
  } else if (diff > periods.hour) {
    const num = Math.floor(diff / periods.hour);
    return num + (num > 1 ? ' hours' : ' hour') + ' ago';
  } else if (diff > periods.minute) {
    const num = Math.floor(diff / periods.minute);
    return num + (num > 1 ? ' minutes' : ' minute') + ' ago';
  }

  const num = Math.floor(diff / periods.second);
  return num + (num > 1 ? ' seconds' : ' second') + ' ago';
};
