import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { ThemeToggle } from "~/components/ThemeToggle";
import { Button } from "~/components/ui/button";
import { useSession } from "~/lib/ctx";

const Settings = () => {
  const { signOut } = useSession();

  return (
    <SafeAreaView className="flex-1 justify-between py-6 px-5">
      <View className="flex flex-row items-center justify-between">
        <Text
          className="text-xl mb-2 text-primary"
          style={{ fontFamily: "PoppinsSemiBold" }}
        >
          Settings
        </Text>
        <ThemeToggle />
      </View>

      <Button onPress={() => signOut()} variant={"default"}>
        <Text
          className="text-primary-foreground"
          style={{ fontFamily: "PoppinsSemiBold" }}
        >
          Sign out
        </Text>
      </Button>
    </SafeAreaView>
  );
};

export default Settings;
