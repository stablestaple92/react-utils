import AsyncStorage from '@react-native-async-storage/async-storage';

export const canExecuteFunctionToday = async () => {
  try {
    const lastExecutedDate = await AsyncStorage.getItem('lastExecutedDate');
    const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const today = new Date().toLocaleDateString('en-US', {timeZone: currentTimeZone});

    return lastExecutedDate !== today;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const markFunctionAsExecutedToday = async () => {
  try {
    const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const today = new Date().toLocaleDateString('en-US', {timeZone: currentTimeZone});
    await AsyncStorage.setItem('lastExecutedDate', today);
  } catch (error) {
    console.error(error);
  }
};
