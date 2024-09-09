import { ScrollView, View } from "react-native";
import { Link, router } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function ForgotPassword() {
  return (
    <ScrollView>
      <View className="flex-1 items-center gap-5 px-6 pb-10 pt-20">
        <View className="flex-1 w-full justify-center items-start gap-3 mb-12">
          <Text
            style={{
              fontFamily: "InterSemiBold",
              fontSize: 28,
              lineHeight: 40,
            }}
          >
            Forgot Password?
          </Text>
          <Text
            className="text-[#555]"
            style={{
              fontFamily: "InterRegular",
              fontSize: 18,
              lineHeight: 26,
            }}
          >
            Enter your email address to get the password reset link
          </Text>
        </View>
        {/* <KeyboardAwareScrollView> */}
        <View className="flex-1 w-full justify-center items-start">
          <View className="w-full flex items-center gap-4 mb-6">
            <View className="w-full flex gap-2">
              <Label nativeID="email" className="medium-text">
                Email Address
              </Label>
              <Input
                placeholder="Enter Email Address"
                keyboardType="email-address"
                autoComplete="email"
                className="w-full"
                style={{ fontFamily: "InterRegular" }}
              />
            </View>
          </View>
          <Button
            onPress={() => {
              router.replace("/sign-in");
            }}
            variant={"secondary"}
            className="w-full mb-4"
          >
            <Text
              style={{
                fontFamily: "InterMedium",
                fontSize: 16,
                lineHeight: 16,
                color: "#FFFFFF",
              }}
            >
              Password Reset
            </Text>
          </Button>
          {/* <View className="relative w-full mb-4">
            <Separator className="absolute left-0 top-[20px]" />
            <View className="w-full flex items-center">
              <Text
                style={{
                  fontFamily: "InterRegular",
                  fontSize: 14,
                  color: "#999DA3",
                  backgroundColor: "#FFFFFF",
                  width: 130,
                  padding: 8,
                  textAlign: "center",
                }}
              >
                or sign in with
              </Text>
            </View>
          </View>
          <Button
            onPress={() => {
              signIn();
              router.replace("/");
            }}
            variant={"grey"}
            className="w-full mb-4"
          >
            <Text
              style={{
                fontFamily: "InterMedium",
                fontSize: 16,
                lineHeight: 16,
                color: "#4B5768",
              }}
            >
              Continue with Google
            </Text>
          </Button> */}
        </View>
        {/* </KeyboardAwareScrollView> */}
      </View>
      <View className="flex-1 w-full justify-center items-center">
        <Link
          href={"/sign-up"}
          className="text-secondary"
          style={{ fontFamily: "InterSemiBold", fontSize: 16 }}
        >
          Create an account
        </Link>
      </View>
    </ScrollView>
  );
}
