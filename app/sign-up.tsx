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

export default function SignUp() {
  const { signIn } = useSession();
  const [hide, setHide] = useState(true);
  const [hideConfirm, setHideConfirm] = useState(true);

  return (
    <ScrollView>
      <View className="flex-1 justify-between items-center gap-5 p-12">
        <View className="w-full justify-center items-center gap-5">
          <Avatar
            alt="Glodifi logo"
            className="w-[168px] h-[168px] rounded-none"
          >
            <AvatarImage source={require("@/../assets/images/logo.png")} />
            <AvatarFallback>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: 30 }}>
                Glodifi
              </Text>
            </AvatarFallback>
          </Avatar>
          <Text
            className="text-xl mb-[45px] text-black"
            style={{ fontFamily: "PoppinsBold" }}
          >
            Welcome back to our app
          </Text>
          <View className="flex items-center gap-6 w-full mb-[30px]">
            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoComplete="email"
              className="w-full"
              style={{ fontFamily: "PoppinsRegular" }}
            />
            <Input
              placeholder="First Name"
              className="w-full"
              style={{ fontFamily: "PoppinsRegular" }}
            />
            <Input
              placeholder="Last Name"
              className="w-full"
              style={{ fontFamily: "PoppinsRegular" }}
            />
            <Input
              placeholder="Mobile"
              className="w-full"
              keyboardType="phone-pad"
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
            <View className="relative w-full">
              <Input
                placeholder="Confirm Password"
                autoComplete="password"
                secureTextEntry={hideConfirm}
                style={{ fontFamily: "PoppinsRegular" }}
              />
              {hideConfirm ? (
                <Button
                  variant={"ghost"}
                  className="active:bg-transparent h-[46px] w-fit absolute right-0 top-0"
                  size={"sm"}
                  onPress={() => setHideConfirm(false)}
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
            <Button
              onPress={() => {
                signIn();
                // Navigate after signing in. You may want to tweak this to ensure sign-in is
                // successful before navigating.
                router.replace("/");
              }}
              variant={"secondary"}
              className="w-[190px]"
            >
              <Text style={{ fontFamily: "PoppinsSemiBold" }}>Sign up</Text>
            </Button>
          </View>
          <View className="border-[0.5px] border-black w-full max-w-[260px] mb-[30px]" />
          <View className="flex flex-row items-center justify-center w-full">
            <Text
              className="text-black"
              style={{ fontFamily: "PoppinsRegular" }}
            >
              Already have an account?
            </Text>
            <Button
              variant={"ghost"}
              className="active:bg-transparent w-fit ml-1 p-0"
              size={"sm"}
            >
              <Link href={"/sign-in"}>
                <Text
                  className="text-black"
                  style={{ fontFamily: "PoppinsBold" }}
                >
                  Login
                </Text>
              </Link>
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
