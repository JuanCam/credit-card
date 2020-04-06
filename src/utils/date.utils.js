const getMonthsList = () => {
  const months = [];
  const MONTHS_IN_YEAR = 12;

  for (let monthIndex = 1; monthIndex <= MONTHS_IN_YEAR; monthIndex++) {
    months.push(`${monthIndex}`.length < 2 ? `0${monthIndex}` : monthIndex);
  }

  return months;
};

const getYearsListFromPlus = (year = (new Date()).getFullYear(), plusYears = 10) => {
  const years = [];

  for (let indexYear = year; indexYear < year + plusYears; indexYear++) {
    years.push(indexYear);
  }

  return years;
}

export {
  getMonthsList,
  getYearsListFromPlus
};
