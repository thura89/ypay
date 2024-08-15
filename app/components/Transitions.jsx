import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

const Transitions = () => {
  const [transitions, setTransitions] = useState([
    { id: 1, msg: "EPC Bill", type: "out", time: "July 6 2024" },
    { id: 2, msg: "Invoice Payment", type: "in", time: "August 12 2024" },
    { id: 3, msg: "Meeting Reminder", type: "out", time: "September 1 2024" },
    { id: 4, msg: "Project Update", type: "in", time: "October 15 2024" },
    { id: 5, msg: "Salary Credit", type: "in", time: "November 10 2024" },
    { id: 6, msg: "Tax Notice", type: "out", time: "December 20 2024" },
    { id: 7, msg: "Holiday Announcement", type: "out", time: "January 5 2025" },
    { id: 8, msg: "Utility Bill", type: "out", time: "February 9 2025" },
    { id: 9, msg: "Subscription Renewal", type: "in", time: "March 25 2025" },
    { id: 10, msg: "Event Invitation", type: "out", time: "April 18 2025" },
  ]);
  return (
    <ScrollView>
      {transitions.map((transition) => {
        return (
          <View key={transition.id}>
            <MaterialIcons
              name="compare-arrows"
              size={32}
              color={transition.type === "in" ? "green" : "brown"}
            />
            <View>
              <Text>{transition.msg}</Text>
              <Text>{transition.time}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Transitions;
