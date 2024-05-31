import { View, Text } from 'react-native'
import React from 'react'

const ProtectedScreen = () => {
  return (
    <View>
      <Text style={{ fontFamily: 'TE', fontSize: 30 }}>Hello user</Text>
      <Text style={{ fontFamily: 'TE', fontSize: 20 }}>You should see this page only if you are Authenticated.</Text>
    </View>
  );
};

export default ProtectedScreen;