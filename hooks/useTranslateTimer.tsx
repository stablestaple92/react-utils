import dayjs from 'dayjs';
import {DateTimeType, translateForLocalTime} from 'tools/locale.tool';
import {useTranslation} from 'react-i18next';

export const useTranslateTimer = (date: DateTimeType, form?: string) => {
  const {t} = useTranslation();

  const now = dayjs();
  const targetTime = dayjs(translateForLocalTime(date));

  const diffInSeconds = now.diff(targetTime, 'second');
  const diffInMinutes = now.diff(targetTime, 'minute');
  const diffInHours = now.diff(targetTime, 'hour');
  const diffInDays = now.diff(targetTime, 'day');
  let display;
  if (diffInSeconds < 0) {
    display = t('translation.values.time.now');
  } else if (diffInSeconds < 10) {
    display = t('translation.values.time.now');
  } else if (diffInSeconds < 60) {
    display = `${diffInSeconds}${t('translation.values.time.secondsAgo')}`;
  } else if (diffInMinutes < 60) {
    display = `${diffInMinutes}${t('translation.values.time.minutesAgo')}`;
  } else if (diffInHours < 24) {
    display = `${diffInHours}${t('translation.values.time.hoursAgo')}`;
  } else if (diffInDays < 7) {
    display = `${diffInDays}${t('translation.values.time.daysAgo')}`;
  } else if (diffInDays < 365) {
    display = targetTime.format(form || 'YY. M. D');
  } else {
    display = targetTime.format(form || 'YYYY년 MM월 DD일');
  }
  return display;
};
