import {useState, useEffect} from 'react';

/**
 * usePasswordValidator.tsx
 * 
 * 패스워드 validator
 * 
 * 
 */
export interface ValidationResultProps {
  isValid?: boolean;
  hasLength: boolean;
  hasLetter: boolean;
  hasNumber: boolean;
}

const usePasswordValidator = (): [ValidationResultProps, (password: string) => void] => {
  const [password, setPassword] = useState<string>('');
  const [result, setResult] = useState<ValidationResultProps>({
    isValid: false,
    hasLetter: false,
    hasNumber: false,
  });

  useEffect(() => {
    // 최소 패스워드 길이
    const hasLength = password.length >= 8;
    // 영어 포함 여부
    const hasLetter = /[a-zA-Z]/.test(password);
    // 숫자 포함 여부
    const hasNumber = /\d/.test(password);

    setResult({
      isValid: hasLength && hasLetter && hasNumber,
      hasLength,
      hasLetter,
      hasNumber,
    });
  }, [password]);

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return [result, handlePasswordChange];
};

export default usePasswordValidator;
