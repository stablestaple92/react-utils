import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

const i18nParam = 'translation';

const useTimeLeftToEndOfMonth = (targetDate: string) => {
  const [timeLeft, setTimeLeft] = useState<string>('');
  const {t} = useTranslation('', {keyPrefix: i18nParam});
  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfMonth = new Date(targetDate);
    const diff = endOfMonth.getTime() - now.getTime();
    console.log(targetDate);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days < 0 ? 0 : days}${t('values.time.day')} ${hours < 0 ? 0 : hours}${t('values.time.hour')} ${minutes < 0 ? 0 : minutes}${t(
      'values.time.minute',
    )}`;
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  return timeLeft;
};

export default useTimeLeftToEndOfMonth;
