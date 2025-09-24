import React, { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  LoadingScreen,
  HomeScreen,
  ProfileScreen,
  FormScreen,
  MenuScreen,
  PerintahKerjaScreen
} from './src/screens';
import { Navigation } from './src/navigation';

import './global.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentScreen, setCurrentScreen] = useState('form');

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen />;
      case 'menu':
        return <MenuScreen onNavigate={setCurrentScreen} />;
      case 'form':
        return <FormScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'perintah-kerja':
        return <PerintahKerjaScreen />;
      default:
        return <HomeScreen />;
    }
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="light" />
      {renderScreen()}
      <Navigation
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
      />
    </View>
  );
}
