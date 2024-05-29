import { View, StyleSheet } from 'react-native';
import { useRef } from 'react';
import LottieView from 'lottie-react-native';

import Colors from '@/constants/Colors';
import { Stack } from 'expo-router';

const AnimationScreen = () => {
    const animation = useRef<LottieView>(null);

    return (
        <View style={styles.parent}>
            <Stack.Screen options={{ headerShown: false }}/>
           <LottieView 
            autoPlay
            ref={animation}
            style={{
                width: '80%',
                maxWidth: 200,
                height: '50%',
                maxHeight: 200,
                backgroundColor: Colors.white,
            }}

            source={require('@/assets/animations/NetflixBlue.lottie')}
           />
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
    }
});

export default AnimationScreen;