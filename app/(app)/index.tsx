import { SafeAreaView, ScrollView } from "react-native";
import Slider from "~/components/Slider";

export default function Screen() {
  return (
    <SafeAreaView className="flex-1 py-6">
      <ScrollView>
        <Slider />
        <Slider title="Location Near You" />
      </ScrollView>
    </SafeAreaView>
  );
}
