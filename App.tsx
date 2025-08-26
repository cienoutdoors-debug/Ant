import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0b1220' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontSize: 28, fontWeight: '800', marginBottom: 8 }}>Ant Compass</Text>
        <Text style={{ color: '#9fb3ff', textAlign: 'center', paddingHorizontal: 24 }}>
          Minimal Expo app (SDK 52). Ready for EAS APK build.
        </Text>
        <Pressable
          onPress={() => setCount((c) => c + 1)}
          style={{ marginTop: 24, paddingVertical: 12, paddingHorizontal: 20, borderRadius: 12, backgroundColor: '#2c6cff' }}
        >
          <Text style={{ color: 'white', fontWeight: '700' }}>Tap test: {count}</Text>
        </Pressable>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
