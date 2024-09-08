import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Link, router } from "expo-router";
import { Button } from "~/components/ui/button";
import { Eye } from "~/lib/icons/Eye";
import { EyeOff } from "~/lib/icons/EyeOff";
import { useSession } from "~/lib/ctx";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";

export default function SignIn() {
  const { signIn } = useSession();
  const [hide, setHide] = useState(true);

  return (
    <ScrollView>
      <View className="flex-1 justify-between items-center gap-5 px-6 py-10">
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
            style={{ fontFamily: "InterRegular", fontSize: 18, lineHeight: 26 }}
          >
            Welcome back to the app
          </Text>
        </View>
        <View className="w-full justify-center items-start">
          <View className="w-full flex items-center gap-4">
            <Input
              placeholder="Enter Username"
              keyboardType="email-address"
              autoComplete="email"
              className="w-full"
              style={{ fontFamily: "PoppinsRegular" }}
            />
            <View className="relative w-full">
              <Input
                placeholder="Enter Password"
                autoComplete="password"
                secureTextEntry={hide}
                style={{ fontFamily: "PoppinsRegular" }}
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
                  variant={"secondary"}
                  className="active:bg-transparent h-[46px] w-fit absolute right-0 top-0 bg-secondary"
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
            <Button
              onPress={() => {
                signIn();
                // Navigate after signing in. You may want to tweak this to ensure sign-in is
                // successful before navigating.
                router.replace("/");
              }}
              variant={"secondary"}
              className="w-[190px] rounded-lg h-12 text-secondary-foreground "
            >
              <Text style={{ fontFamily: "PoppinsSemiBold" }}>Log in</Text>
            </Button>
          </View>
          <View className="border-[0.5px] border-black w-full max-w-[260px] mb-[30px]" />
          <View className="flex flex-row items-center justify-center w-full">
            <Text
              className="text-black"
              style={{ fontFamily: "PoppinsRegular" }}
            >
              Don’t have an account?
            </Text>
            <Button
              variant={"ghost"}
              className="active:bg-transparent w-fit ml-1 p-0"
              size={"sm"}
            >
              <Link href={"/sign-up"}>
                <Text
                  className="text-black"
                  style={{ fontFamily: "PoppinsBold" }}
                >
                  Sign up
                </Text>
              </Link>
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
            <Text className="text-black" style={{ fontFamily: "PoppinsBold" }}>
              Have a business account?
            </Text>
          </Button>
          <Button
            onPress={() => {}}
            variant={"ghost"}
            className="active:bg-transparent w-fit"
            size={"sm"}
          >
            <Text
              className="text-[#663399]"
              style={{ fontFamily: "PoppinsRegular" }}
            >
              Sign in as a professional
            </Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
