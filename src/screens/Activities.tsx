import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatLink } from "@utils/links";

interface ActivitiesScreenProps {
    activities: string[];
}

const ActivitiesScreen: React.FC<ActivitiesScreenProps> = ({ activities }) => (
    <View style={styles.container}>
        {activities.map((activity, index) => (
            <View key={index}>
                <Text>{formatLink(activity)}</Text>
            </View>
        ))}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default ActivitiesScreen;
