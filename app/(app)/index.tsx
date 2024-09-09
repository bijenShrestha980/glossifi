import { SafeAreaView, ScrollView, Text } from "react-native";
import { Button } from "~/components/ui/button";
import { useSession } from "~/lib/ctx";

export default function Screen() {
  const { signOut } = useSession();
  return (
    <ScrollView>
      <Button onPress={() => signOut()} variant={"secondary"}>
        <Text
          className="text-primary-foreground"
          style={{ fontFamily: "PoppinsSemiBold" }}
        >
          Sign out
        </Text>
      </Button>
    </ScrollView>
  );
}
