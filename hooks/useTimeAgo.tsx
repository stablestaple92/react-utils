import {useState, useEffect} from 'react';

const useTimeAgo = (utcTimestamp: string) => {
  const [timeAgo, setTimeAgo] = useState<string>('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = new Date();
      const postDate = new Date(utcTimestamp);
      const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

      if (diffInSeconds < 60) {
        setTimeAgo('몇 초 전');
      } else if (diffInSeconds < 3600) {
        setTimeAgo(`${Math.floor(diffInSeconds / 60)}분 전`);
      } else if (diffInSeconds < 86400) {
        setTimeAgo(`${Math.floor(diffInSeconds / 3600)}시간 전`);
      } else if (diffInSeconds < 604800) {
        setTimeAgo(`${Math.floor(diffInSeconds / 86400)}일 전`);
      } else {
        setTimeAgo(
          postDate.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
        );
      }
    };

    calculateTimeAgo();
    const interval = setInterval(calculateTimeAgo, 60000); // 1분마다 업데이트

    return () => {
      clearInterval(interval);
    };
  }, [utcTimestamp]);

  return timeAgo;
};

export default useTimeAgo;
