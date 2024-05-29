import { View, StyleSheet } from 'react-native';
import { useRef } from 'react';
import LottieView from 'lottie-react-native';
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView)

import Colors from '@/constants/Colors';

const AnimatedSplashScreen = ({
    onAnimationFinish = (isCancelled) => {},
}: {
    onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
    const animation = useRef<LottieView>(null);

    return (
        <View 
            style={styles.parent} 
        >
           <AnimatedLottieView
           exiting={ZoomOut}
            ref={animation}
            onAnimationFinish={onAnimationFinish}
            loop={false}
            autoPlay
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

export default AnimatedSplashScreen;