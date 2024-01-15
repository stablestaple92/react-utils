import {createNavigationContainerRef} from '@react-navigation/native';

/**
 * useCustomNavigator.tsx
 * 
 * tsx 형식이 아닌 파일에서 react-navigation 사용하기
 * 
 * 사용 방법 
 * 1. import * as CustomNavigation from 'hooks/useCustomNavigator';
 * CustomNavigation.navigate('XXX');
 */

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
