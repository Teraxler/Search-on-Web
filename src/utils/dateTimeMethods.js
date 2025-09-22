import { pad } from "./stringMethods";

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDateTime() {
  const date = new Date();

  return normalizeDateTime(date);
}

function normalizeDateTime(dateTime) {
  const date = new Date(dateTime);

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    weekday: date.getDay() + 1,
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    milliSecond: date.getMilliseconds(),
  };
}

function formattingDateTime(dateTime) {
  const stringDateTime = {
    year: dateTime.year,
    month: dateTime.month,
    day: dateTime.day,
    hour: dateTime.hour,
    minute: dateTime.minute,
    second: dateTime.second,
    yearStr: pad(dateTime.year, 4),
    monthStr: pad(dateTime.month),
    dayStr: pad(dateTime.day),
    hourStr: pad(dateTime.hour),
    minuteStr: pad(dateTime.minute),
    secondStr: pad(dateTime.second),

    weekdayName: WEEKDAYS[dateTime.weekday - 1],
    monthName: MONTHS[dateTime.month - 1],
  };

  return {
    ...stringDateTime,
    date: `${stringDateTime.monthStr}/${stringDateTime.dayStr}/${stringDateTime.yearStr}`,
    time: `${stringDateTime.hourStr}:${stringDateTime.minuteStr}:${stringDateTime.secondStr}`,
    iso: `${stringDateTime.yearStr}-${stringDateTime.monthStr}-${stringDateTime.dayStr}T${stringDateTime.hourStr}:${stringDateTime.minuteStr}:${stringDateTime.secondStr}`,
  };
}

function calcRelativeDateTimeDifference(
  isoDateTime = "1970-01-01T00:00:00.000Z"
) {
  const currentDateTime = new Date();
  const inputDateTime = new Date(isoDateTime);

  return convertMilliSecondsToDateTime(currentDateTime - inputDateTime);
}

function convertMilliSecondsToDateTime(milliSeconds) {
  let result = null;

  const SEC_TO_MILLISEC = 1000;
  const MIN_TO_MILLISEC = 60 * SEC_TO_MILLISEC;
  const HOUR_TO_MILLISEC = 60 * MIN_TO_MILLISEC;
  const DAY_TO_MILLISEC = 24 * HOUR_TO_MILLISEC;
  const WEEK_TO_MILLISEC = 7 * DAY_TO_MILLISEC;
  const MONTH_TO_MILLISEC = 30.4166 * DAY_TO_MILLISEC;
  const YEAR_TO_MILLISEC = 365.25 * DAY_TO_MILLISEC;

  const seconds = Math.floor(milliSeconds / SEC_TO_MILLISEC);
  const minutes = Math.floor(milliSeconds / MIN_TO_MILLISEC);
  const hours = Math.floor(milliSeconds / HOUR_TO_MILLISEC);
  const days = Math.floor(milliSeconds / DAY_TO_MILLISEC);
  const weeks = Math.floor(milliSeconds / WEEK_TO_MILLISEC);
  const months = Math.floor(milliSeconds / MONTH_TO_MILLISEC);
  const years = Math.floor(milliSeconds / YEAR_TO_MILLISEC);

  if (months >= 12) {
    result = `${years} سال قبل`;
  } else if (days >= 30) {
    result = `${months} ماه قبل`;
  } else if (days >= 7) {
    result = `${weeks} هفته قبل`;
  } else if (hours >= 24) {
    result = `${days} روز قبل`;
  } else if (minutes >= 60) {
    result = `${hours} ساعت قبل`;
  } else if (seconds >= 60) {
    result = `${minutes} دقیقه قبل`;
  } else {
    result = `لحظاتی قبل`;
  }

  return result;
}

function convertMonthToMonthName(month) {
  return MONTHS[month - 1];
}

export {
  getDateTime,
  normalizeDateTime,
  formattingDateTime,
  calcRelativeDateTimeDifference,
  convertMilliSecondsToDateTime,
  convertMonthToMonthName,
};
