import "~/global.css";

import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Theme, ThemeProvider } from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView } from "react-native";
import * as Font from "expo-font";

import { NAV_THEME } from "~/lib/constants";
import { useColorScheme } from "~/lib/useColorScheme";
import { SessionProvider } from "~/lib/ctx";

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);
  const [loaded, error] = Font.useFonts({
    InterThin: require("~/assets/fonts/InterThin.ttf"),
    InterExtraLight: require("~/assets/fonts/InterExtraLight.ttf"),
    InterLight: require("~/assets/fonts/InterLight.ttf"),
    InterRegular: require("~/assets/fonts/InterRegular.ttf"),
    InterMedium: require("~/assets/fonts/InterMedium.ttf"),
    InterSemiBold: require("~/assets/fonts/InterSemiBold.ttf"),
    InterBold: require("~/assets/fonts/InterBold.ttf"),
    InterExtraBold: require("~/assets/fonts/InterExtraBold.ttf"),
    InterBlack: require("~/assets/fonts/InterBlack.ttf"),
  });

  React.useEffect(() => {
    if (loaded || error) {
      (async () => {
        const theme = await AsyncStorage.getItem("theme");
        if (Platform.OS === "web") {
          // Adds the background color to the html element to prevent white background on overscroll.
          document.documentElement.classList.add("bg-background");
        }
        if (!theme) {
          AsyncStorage.setItem("theme", colorScheme);
          setIsColorSchemeLoaded(true);
          return;
        }
        const colorTheme = theme === "dark" ? "dark" : "light";
        if (colorTheme !== colorScheme) {
          setColorScheme(colorTheme);

          setIsColorSchemeLoaded(true);
          return;
        }
        setIsColorSchemeLoaded(true);
      })().finally(() => {
        SplashScreen.hideAsync();
      });
    }
  }, [loaded, error]);

  if (!isColorSchemeLoaded && !loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <SafeAreaView>
        <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
        <SessionProvider>
          <Slot />
        </SessionProvider>
      </SafeAreaView>
      <PortalHost />
    </ThemeProvider>
  );
}
