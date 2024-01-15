import {useEffect, useState} from 'react';

/**
 * useEmailValidator
 * 
 * 이메일 유형에 맞는지 검사하는 훅
 * 
 * @param email 
 * 
 * @returns isEmailValid: boolean
 */
function useEmailValidator(email: string) {
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    const regex = new RegExp(
      /^(?:(?:[^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(?:(?:[^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i,
    );
    setIsEmailValid(regex.test(email));
  }, [email]);
  return isEmailValid;
}

export default useEmailValidator;
