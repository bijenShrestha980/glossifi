import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Menu } from "~/lib/icons/Menu";

const CustomHeader = ({}) => {
  const navigation = useNavigation();

  return (
    <View
      className="flex flex-row justify-between items-center pt-6 pb-2 px-4 bg-[#FFFFFF]"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <Avatar alt="Glodifi logo" className="w-[50px] h-[50px] rounded-none">
        <AvatarImage source={require("@/../assets/images/logo-sm.png")} />
        <AvatarFallback>
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 30 }}>
            Glodifi
          </Text>
        </AvatarFallback>
      </Avatar>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Menu className="text-muted-foreground" size={24} strokeWidth={3} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
