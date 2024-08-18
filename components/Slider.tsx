import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { sliderData } from "~/constants/data";
import { Badge } from "./ui/badge";

const Slider = ({ title = "Recommended" }: { title?: string }) => {
  return (
    <View className="px-5">
      <View>
        <Text className="font-semibold text-xl mb-5">{title}</Text>
      </View>
      <FlatList
        data={sliderData}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            className={`w-[152px] h-[210px] z-20 pr-5 mb-6 mr-5 shadow-xl bg-white rounded-md`}
          >
            <Image
              source={{
                uri: item.image,
                width: 154,
                height: 134,
              }}
              className="rounded-t-md"
            />
            <View className="p-2">
              <View className="mb-2">
                <Text className="font-semibold">{item.title}</Text>
                <Text className="font-light text-xs">{item.address}</Text>
              </View>
              <Badge variant={"outline"} className="w-[74px] px-[3px] py-[2px]">
                <Text className="font-medium text-xs line-clamp-1">
                  {item.type}
                </Text>
              </Badge>
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default Slider;
