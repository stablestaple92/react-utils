/**
 * number.ts
 * 
 * 숫자 관련
 * 
 */

// 숫자에 컴마 넣기 (string으로 보여주기)
export function formatInput(input: string): string {
  // 소수점 이하의 숫자를 분리합니다.
  let [integerPart, decimalPart] = input.split('.');

  if (integerPart === '0') {
    return '0';
  }
  // 정수 부분에 대해서만 콤마를 추가합니다.
  integerPart = integerPart
    .replace(/\D+/g, '')
    .replace(/^0+/, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // 소수점 이하의 숫자가 있을 경우, 이를 다시 합칩니다.
  return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
}

// 컴마 제거하기 (실제 값을 api 값을 넣을때)
export function removeCommas(input: string): string {
  const digitsOnly = input.replace(/,/g, '');

  return digitsOnly;
}