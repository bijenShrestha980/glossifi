import { Text } from "react-native";
import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import CustomHeader from "~/components/CustomHeader";
import { useSession } from "~/lib/ctx";
import { Settings } from "~/lib/icons/Settings";
import { History } from "~/lib/icons/History";
import { NotepadText } from "~/lib/icons/NotepadText";
import { LayoutDashboard } from "~/lib/icons/LayoutDashboard";

export default function AppLayout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            title: "Dashboard",
            drawerLabelStyle: { fontFamily: "PoppinsSemiBold" },
            drawerIcon: () => (
              <LayoutDashboard
                className="text-muted-foreground"
                size={24}
                strokeWidth={1.25}
              />
            ),
            header: () => <CustomHeader />,
          }}
        />
        <Drawer.Screen
          name="new-booking"
          options={{
            title: "New Booking",
            drawerLabelStyle: { fontFamily: "PoppinsSemiBold" },
            drawerIcon: () => (
              <NotepadText
                className="text-muted-foreground"
                size={24}
                strokeWidth={1.25}
              />
            ),
            header: () => <CustomHeader />,
          }}
        />
        <Drawer.Screen
          name="history"
          options={{
            title: "History",
            drawerLabelStyle: { fontFamily: "PoppinsSemiBold" },
            drawerIcon: () => (
              <History
                className="text-muted-foreground"
                size={24}
                strokeWidth={1.25}
              />
            ),
            header: () => <CustomHeader />,
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
            drawerLabelStyle: { fontFamily: "PoppinsSemiBold" },
            drawerIcon: () => (
              <Settings
                className="text-muted-foreground"
                size={24}
                strokeWidth={1.25}
              />
            ),
            header: () => <CustomHeader />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
