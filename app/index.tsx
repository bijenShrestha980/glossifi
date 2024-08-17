import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Eye } from "~/lib/icons/Eye";
import { EyeOff } from "~/lib/icons/EyeOff";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Screen() {
  const [hide, setHide] = useState(true);
  return (
    <View className="flex-1 justify-between items-center gap-5 p-12">
      <View className="w-full justify-center items-center gap-5">
        <Avatar alt="Glodifi logo" className="w-[168px] h-[168px] rounded-none">
          <AvatarImage source={require("@/../assets/images/logo.png")} />
          <AvatarFallback>
            <Text style={{ fontFamily: "Poppins-Regular", fontSize: 30 }}>
              Glodifi
            </Text>
          </AvatarFallback>
        </Avatar>
        <Text className="text-xl font-bold mb-[45px]">
          Welcome back to our app
        </Text>
        <View className="flex items-center gap-6 w-full mb-[30px]">
          <Input
            placeholder="Enter Username"
            keyboardType="email-address"
            autoComplete="email"
            className="w-full"
          />
          <View className="relative w-full">
            <Input
              placeholder="Enter Password"
              autoComplete="password"
              secureTextEntry={hide}
            />
            {hide ? (
              <Button
                variant={"ghost"}
                className="active:bg-transparent h-[46px] w-fit absolute right-0 top-0"
                size={"sm"}
                onPress={() => setHide(false)}
              >
                <EyeOff
                  className="text-muted-foreground"
                  size={24}
                  strokeWidth={1.25}
                />
              </Button>
            ) : (
              <Button
                variant={"ghost"}
                className="active:bg-transparent h-[46px] w-fit absolute right-0 top-0"
                size={"sm"}
                onPress={() => setHide(true)}
              >
                <Eye
                  className="text-muted-foreground"
                  size={24}
                  strokeWidth={1.25}
                />
              </Button>
            )}
          </View>
          <Button onPress={() => {}} variant={"grey"} className="w-[190px]">
            <Text>Log in</Text>
          </Button>
        </View>
        <View className="border-[0.5px] border-black w-full max-w-[260px] mb-[30px]" />
        <View className="flex flex-row items-center justify-center w-full">
          <Text className="">Don’t have an account?</Text>
          <Button
            onPress={() => {}}
            variant={"ghost"}
            className="active:bg-transparent w-fit"
            size={"sm"}
          >
            <Text className="font-bold">Sign up</Text>
          </Button>
        </View>
      </View>
      <View className="w-full justify-center items-center">
        <Button
          onPress={() => {}}
          variant={"ghost"}
          className="active:bg-transparent w-fit"
          size={"sm"}
        >
          <Text className="font-bold">Have a business account?</Text>
        </Button>
        <Button
          onPress={() => {}}
          variant={"ghost"}
          className="active:bg-transparent w-fit"
          size={"sm"}
        >
          <Text className="text-[#663399]">Sign in as a professional</Text>
        </Button>
      </View>
    </View>
  );
}
