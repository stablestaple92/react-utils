import dayjs from 'dayjs';

/**
 * time.ts
 * 
 * 시간 관련
 * 
 */

export type DateTimeType = dayjs.Dayjs | string | number | undefined;

// local 시간을 UTC 시간으로 변경
export const translateForUTCTime = (date: DateTimeType, format?: string) => {
  return dayjs(date).utc().format(format);
};

// UTC 시간을 local 시간으로 변경
export const translateForLocalTime = (date: DateTimeType, format?: string) => {
  return dayjs.utc(date).local().format(format);
};

// 시간 포맷팅. 케이스에 따라 변경 할 것
export const translateDateForm = (date: DateTimeType, form?: string) => {
  const now = dayjs();
  const targetTime = dayjs(translateForLocalTime(date));

  const diffInSeconds = now.diff(targetTime, 'second');
  const diffInMinutes = now.diff(targetTime, 'minute');
  const diffInHours = now.diff(targetTime, 'hour');
  const diffInDays = now.diff(targetTime, 'day');
  let display: string;
  if (diffInSeconds < 0) {
    display = '1초 전';
  }
  if (diffInSeconds < 60) {
    display = `${diffInSeconds}초 전`;
  } else if (diffInMinutes < 60) {
    display = `${diffInMinutes}분 전`;
  } else if (diffInHours < 24) {
    display = `${diffInHours}시간 전`;
  } else if (diffInDays < 7) {
    display = `${diffInDays}일 전`;
  } else if (diffInDays < 365) {
    display = targetTime.format(form || 'YY. M. D');
  } else {
    display = targetTime.format(form || 'YYYY년 MM월 DD일');
  }
  return display;
};

// 기준을 잡고 새로운 요소인지 판단하는 함수 (일 기준))
export const getIsNew = (day: number, at?: string) => {
  const itemCreatedAt = dayjs(at);

  // 현재 날짜와 `item.createdAt` 사이의 차이를 일 단위로 계산합니다.
  const diffInDays = dayjs().diff(itemCreatedAt, 'day');

  // 며칠 이내에 생성된 경우 isNew를 true로 설정합니다.
  const isNew = diffInDays <= day;
  return isNew;
};


