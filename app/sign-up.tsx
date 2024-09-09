import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Link, router } from "expo-router";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Eye } from "~/lib/icons/Eye";
import { EyeOff } from "~/lib/icons/EyeOff";
import { useSession } from "~/lib/ctx";
import { Label } from "~/components/ui/label";

export default function SignUp() {
  const { signIn } = useSession();
  const [hide, setHide] = useState(true);
  const [hideConfirm, setHideConfirm] = useState(true);

  return (
    <ScrollView>
      <View className="w-full items-center gap-5 px-6 p-10 pt-20">
        <View className="w-full justify-center items-start gap-3 mb-12">
          <Text
            style={{
              fontFamily: "InterSemiBold",
              fontSize: 28,
              lineHeight: 40,
            }}
          >
            Create an Account
          </Text>
        </View>
        <View className="w-full justify-center items-start">
          <View className="w-full flex items-center gap-4 mb-6">
            <View className="w-full flex flex-row justify-between items-center gap-4">
              <View className="flex-1 gap-2">
                <Label nativeID="firstName" className="medium-text">
                  First Name
                </Label>
                <Input
                  placeholder="Enter First name"
                  className="w-full"
                  style={{ fontFamily: "InterRegular" }}
                />
              </View>
              <View className="flex-1 gap-2">
                <Label nativeID="lastName" className="medium-text">
                  Last Name
                </Label>
                <Input
                  placeholder="Enter Last name"
                  className="w-full"
                  style={{ fontFamily: "InterRegular" }}
                />
              </View>
            </View>
            <View className="w-full flex gap-2">
              <Label nativeID="email" className="medium-text">
                Email Address
              </Label>
              <Input
                placeholder="Enter Email"
                keyboardType="email-address"
                autoComplete="email"
                className="w-full"
                style={{ fontFamily: "InterRegular" }}
              />
            </View>
            <View className="w-full flex gap-2">
              <Label nativeID="mobile" className="medium-text">
                Phone Number
              </Label>
              <Input
                placeholder="Enter Phone number"
                keyboardType="phone-pad"
                className="w-full"
                style={{ fontFamily: "InterRegular" }}
              />
            </View>
            <View className="w-full flex gap-2">
              <Label nativeID="userName" className="medium-text">
                User Name
              </Label>
              <Input
                placeholder="Enter User name"
                className="w-full"
                style={{ fontFamily: "InterRegular" }}
              />
            </View>
            <View className="w-full flex gap-2">
              <Label nativeID="password" className="medium-text">
                Password
              </Label>
              <View className="relative">
                <Input
                  placeholder="Enter Password"
                  autoComplete="password"
                  secureTextEntry={hide}
                  style={{ fontFamily: "InterRegular" }}
                />
                {hide ? (
                  <Button
                    variant={"ghost"}
                    className="active:bg-transparent h-full w-fit absolute right-0 top-0"
                    size={"sm"}
                    onPress={() => setHide(false)}
                  >
                    <EyeOff
                      className="text-[#999DA3]"
                      size={24}
                      strokeWidth={2}
                    />
                  </Button>
                ) : (
                  <Button
                    variant={"ghost"}
                    className="active:bg-transparent h-full w-fit absolute right-0 top-0"
                    size={"sm"}
                    onPress={() => setHide(true)}
                  >
                    <Eye className="text-[#999DA3]" size={24} strokeWidth={2} />
                  </Button>
                )}
              </View>
            </View>
            <View className="w-full flex gap-2">
              <Label nativeID="password" className="medium-text">
                Confirm Password
              </Label>
              <View className="relative">
                <Input
                  placeholder="Re-enter Password"
                  autoComplete="password"
                  secureTextEntry={hideConfirm}
                  style={{ fontFamily: "InterRegular" }}
                />
                {hideConfirm ? (
                  <Button
                    variant={"ghost"}
                    className="active:bg-transparent h-full w-fit absolute right-0 top-0"
                    size={"sm"}
                    onPress={() => setHideConfirm(false)}
                  >
                    <EyeOff
                      className="text-[#999DA3]"
                      size={24}
                      strokeWidth={2}
                    />
                  </Button>
                ) : (
                  <Button
                    variant={"ghost"}
                    className="active:bg-transparent h-full w-fit absolute right-0 top-0"
                    size={"sm"}
                    onPress={() => setHide(true)}
                  >
                    <Eye className="text-[#999DA3]" size={24} strokeWidth={2} />
                  </Button>
                )}
              </View>
            </View>
          </View>
          <View className="flex flex-row gap-2 mb-4">
            <Text
              style={{
                fontFamily: "InterRegular",
                fontSize: 14,
                color: "#999DA3",
              }}
            >
              By continuing, you agree to our
            </Text>
            <Link
              href={"/terms-of-service"}
              className="text-secondary"
              style={{ fontFamily: "InterRegular", fontSize: 14 }}
            >
              terms of service
            </Link>
          </View>
          <Button
            onPress={() => {
              router.replace("/otp");
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
              Sign Up
            </Text>
          </Button>
        </View>
        <View className="w-full flex flex-row justify-center items-center gap-1">
          <Text
            style={{
              fontFamily: "InterRegular",
              fontSize: 16,
              color: "#999DA3",
            }}
          >
            Already have an account?
          </Text>
          <Link
            href={"/sign-in"}
            className="text-secondary"
            style={{ fontFamily: "InterSemiBold", fontSize: 16 }}
          >
            Sign in here
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
