import React from "react";
import { StyleSheet, View } from "react-native";

interface CarouselProps {
    title: string;
}

const Carousel: React.FC<CarouselProps> = ({ title }) => (
    <View style={styles.container}>
        {title}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


export default Carousel;
