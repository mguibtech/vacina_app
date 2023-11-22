import {useCallback, useEffect, useMemo, useState} from 'react';
import {Appearance} from 'react-native';
import {Props, colorSchemeProps, themeType} from './types';
import {themeLight} from '../../constants/styles/themes/light';
import {themeDark} from '../../constants/styles/themes/dark';

const useAppearance = (): Props => {
  const [currentTheme, setCurrentTheme] = useState<themeType>(
    Appearance.getColorScheme() || 'dark',
  );

  const handleChangeAppearance = useCallback(
    ({colorScheme}: colorSchemeProps) => {
      if (colorScheme) {
        setCurrentTheme(colorScheme);
      }
    },
    [],
  );

  const theme = useMemo(() => {
    if (currentTheme === 'dark') return themeLight;
    return themeDark;
  }, [currentTheme]);

  useEffect(() => {
    Appearance.addChangeListener(handleChangeAppearance);

    // return () => Appearance.removeChangeListener(handleChangeAppearance);
  }, [handleChangeAppearance]);

  return {
    currentTheme,
    theme,
  };
};

export default useAppearance;
