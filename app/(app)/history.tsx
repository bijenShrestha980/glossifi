import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Button } from "~/components/ui/button";

const History = () => {
  return (
    <SafeAreaView className="flex-1 py-6 px-5">
      <Text
        className="text-xl mb-2 text-primary"
        style={{ fontFamily: "PoppinsSemiBold" }}
      >
        My booking history
      </Text>
      <ScrollView>
        <HistoryCard />
        <HistoryCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const HistoryCard = () => {
  return (
    <View className="flex gap-2 py-5 border-b border-[#8F8181]">
      <View className="flex flex-row items-center justify-between gap-4">
        <Text
          className="text-primary"
          style={{ fontFamily: "PoppinsSemiBold" }}
        >
          5 Aug at 05:30 PM
        </Text>
        <Text
          className="text-primary"
          style={{ fontFamily: "PoppinsSemiBold" }}
        >
          Rs. 700.00
        </Text>
      </View>
      <View className="flex flex-row items-end justify-between gap-4">
        <View>
          <Text
            className="text-sm text-primary"
            style={{ fontFamily: "PoppinsRegular" }}
          >
            Maya Chan, Dharan 10
          </Text>
          <Text
            className="text-sm text-primary"
            style={{ fontFamily: "PoppinsRegular" }}
          >
            Haircut, Wash & Blowdry
          </Text>
        </View>
        <Button variant={"grey"} size={"fit"}>
          <Link href={"/new-booking"} className="py-1 px-2">
            <Text style={{ fontFamily: "PoppinsSemiBold" }}>Book again</Text>
          </Link>
        </Button>
      </View>
    </View>
  );
};

export default History;
