import { View, Text, TouchableOpacity } from 'react-native';
import { useRef } from 'react';
import LottieView from 'lottie-react-native';

import Colors from '@/constants/Colors';

const AnimationScreen = () => {
    const animation = useRef<LottieView>(null);

    return (
        <View>
           <LottieView 
            autoPlay
            ref={animation}
            style={{
                width: 200,
                height: 200,
                backgroundColor: Colors.white,
            }}

            source={require('@/assets/animations/NetflixBlue.lottie')}
           />

           <TouchableOpacity onPress={(() => animation.current?.play())}>
            <Text>Play</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={(() => animation.current?.pause())}>
            <Text>Pause</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={(() => animation.current?.reset())}>
            <Text>Reset</Text>
           </TouchableOpacity>
        </View>
    );
};

export default AnimationScreen;