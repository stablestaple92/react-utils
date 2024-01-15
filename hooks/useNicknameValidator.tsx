import {useState, useEffect} from 'react';

/**
 * useNicknameValidator.tsx
 * 
 * 닉네임 Validator
 * 
 * 
 */
type ValidationState = {
  isValid: boolean;
  lengthValid: boolean;
  specialCharactersValid: boolean;
};

const useNicknameValidator = (): [
  ValidationState,
  (nickname: string) => void,
] => {
  const [nickname, setNickname] = useState<string>('');
  const [validationState, setValidationState] = useState<ValidationState>({
    isValid: false,
    lengthValid: false,
    specialCharactersValid: false,
  });

  useEffect(() => {
    // 최대 글자수
    const isValidLength = nickname.length <= 12;
    // 특수 문자 포함 여부 체크
    const hasValidCharacters = /^[\p{L}\p{N}_.-]{1,12}$/u.test(nickname);

    setValidationState({
      isValid: isValidLength && hasValidCharacters,
      lengthValid: isValidLength,
      specialCharactersValid: hasValidCharacters,
    });
  }, [nickname]);

  const validateNickName = (value: string) => {
    setNickname(value);
  };

  return [validationState, validateNickName];
};

export default useNicknameValidator;
