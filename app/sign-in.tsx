import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Link, router } from "expo-router";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Checkbox } from "~/components/ui/checkbox";
import { Separator } from "~/components/ui/seperator";
import { Eye } from "~/lib/icons/Eye";
import { EyeOff } from "~/lib/icons/EyeOff";
import { useSession } from "~/lib/ctx";

export default function SignIn() {
  const { signIn } = useSession();
  const [hide, setHide] = useState(true);
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView>
      <View className="w-full items-center gap-5 px-6 pb-10 pt-20">
        <View className="w-full justify-center items-start gap-3 mb-12">
          <Text
            style={{
              fontFamily: "InterSemiBold",
              fontSize: 28,
              lineHeight: 40,
            }}
          >
            Login
          </Text>
          <Text
            className="text-[#555]"
            style={{
              fontFamily: "InterRegular",
              fontSize: 18,
              lineHeight: 26,
            }}
          >
            Welcome back to the app
          </Text>
        </View>
        <View className="w-full justify-center items-start">
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
            <View className="w-full flex gap-2">
              <View className="flex flex-row justify-between items-center">
                <Label nativeID="password" className="medium-text">
                  Password
                </Label>
                <Link
                  href={"/forgot-password"}
                  className="text-secondary"
                  style={{ fontFamily: "InterMedium", fontSize: 12 }}
                >
                  Forgot Password?
                </Link>
              </View>
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
          </View>
          <View className="flex flex-row gap-4 mb-4">
            <Checkbox checked={checked} onCheckedChange={setChecked} />
            <Text
              style={{
                fontFamily: "InterLight",
                fontSize: 16,
                color: "#191D23",
              }}
            >
              Keep me signed in
            </Text>
          </View>
          <Button
            onPress={() => {
              signIn();
              router.replace("/");
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
              Log in
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
        <View className="w-full justify-center items-center">
          <Link
            href={"/sign-up"}
            className="text-secondary"
            style={{ fontFamily: "InterSemiBold", fontSize: 16 }}
          >
            Create an account
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
