import {useSetRecoilState} from 'recoil';

import toastMessageAtom from 'atom/toastMessageAtom';
import toastAtom from 'atom/toastAtom';

const useToast = () => {
  const setToastMessage = useSetRecoilState(toastMessageAtom);
  const setToast = useSetRecoilState(toastAtom);

  const openToast = (message: string, check: boolean | undefined) => {
    setToast(check);
    setToastMessage(message);
  };

  return {openToast};
};

export default useToast;
