import { View, Text } from 'react-native'
import React from 'react'

const ProtectedScreen = () => {
  return (
    <View>
      <Text style={{ fontFamily: 'TE', fontSize: 30 }}>Hello user</Text>
    </View>
  );
};

export default ProtectedScreen;