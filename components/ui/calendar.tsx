import * as React from "react";
import { StyleSheet } from "react-native";

import DatePicker from "react-native-modern-datepicker";

export type CalendarProps = React.ComponentProps<typeof DatePicker>;

function Calendar({ options, style, ...props }: CalendarProps) {
  return (
    <DatePicker
      options={{
        backgroundColor: "#000000",
        mainColor: "#000000",
        borderColor: "transparent",
        textHeaderFontSize: 20,
        defaultFont: "PoppinsRegular",
        headerFont: "PoppinsSemiBold",
      }}
      style={StyleSheet.flatten([styles.dateTimePicker, style])}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  dateTimePicker: {
    backgroundColor: "transparent",
    borderRadius: 5,
  },
});

Calendar.displayName = "Calendar";

export { Calendar };
