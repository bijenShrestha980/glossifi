import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";

const NewBooking = () => {
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <SafeAreaView className="flex-1 py-6">
      <Calendar
        current={date.toISOString()}
        mode="calendar"
        minimumDate={new Date().toISOString()}
      />
      <ScrollView className="px-5">
        <View className="border-[0.5px] border-[#8F8181] mb-7" />
        <View className="flex flex-row items-center gap-4 mb-4">
          <Button
            onPress={() => {}}
            variant={"grey"}
            size={"fit"}
            className="py-1 px-2"
          >
            <Text style={{ fontFamily: "PoppinsSemiBold" }}>Book Now</Text>
          </Button>
          <Button variant={"grey"} size={"fit"}>
            <Link href="/history" className="py-1 px-2">
              <Text style={{ fontFamily: "PoppinsSemiBold" }}>
                View History
              </Text>
            </Link>
          </Button>
        </View>
        <View className="flex gap-2">
          <Text
            className="text-xl text-primary"
            style={{ fontFamily: "PoppinsSemiBold" }}
          >
            Upcoming Bookings
          </Text>
          <Text
            className="text-sm text-primary"
            style={{ fontFamily: "PoppinsRegular" }}
          >
            No upcoming bookings found.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewBooking;
