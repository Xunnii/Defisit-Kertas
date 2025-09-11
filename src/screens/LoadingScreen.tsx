import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
    const [fadeAnim] = useState(new Animated.Value(0));
    const [logoScale] = useState(new Animated.Value(0.5));
    const [loadingOpacity] = useState(new Animated.Value(0));

    useEffect(() => {
        // Sequence animations
        const startAnimations = () => {
            // 1. Fade in background
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }).start();

            // 2. Scale in logo after 300ms
            setTimeout(() => {
                Animated.spring(logoScale, {
                    toValue: 1,
                    tension: 50,
                    friction: 7,
                    useNativeDriver: true,
                }).start();
            }, 300);

            // 3. Show loading indicator after 600ms
            setTimeout(() => {
                Animated.timing(loadingOpacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            }, 600);
        };

        startAnimations();

        // Complete loading after 3 seconds
        const timer = setTimeout(() => {
            onLoadingComplete();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View className="flex-1">
            {/* Background Image */}
            <Animated.View
                style={{
                    opacity: fadeAnim,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Image
                    source={require('../assets/images/Loading-Screen.png')}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    resizeMode="cover"
                />
            </Animated.View>

            {/* Overlay untuk readability */}
            <View className="absolute inset-0 bg-black/20" />

            {/* Content Container */}
            <View className="flex-1 items-center justify-center px-8">
                {/* Logo PLN */}
                <Animated.View
                    style={{
                        transform: [{ scale: logoScale }],
                        opacity: fadeAnim,
                    }}
                    className="mb-8"
                >
                    <View className="items-center justify-center shadow-2xl">
                        <Image
                            source={require('../assets/images/LogoPLN.png')}
                            style={{
                                width: 80,
                                height: 80,
                            }}
                            resizeMode="contain"
                        />
                    </View>
                </Animated.View>

                {/* App Title */}
                <Animated.View
                    style={{ opacity: fadeAnim }}
                    className="mb-12"
                >
                    <Text className="text-white text-4xl font-bold text-center mb-2">
                        Kacang Panggang
                    </Text>
                    <Text className="text-white text-lg text-center opacity-90">
                        Aplikasi Kacang Terbaik
                    </Text>
                </Animated.View>

                {/* Loading Indicator */}
                <Animated.View
                    style={{ opacity: loadingOpacity }}
                    className="items-center"
                >
                    <ActivityIndicator size="large" color="#ffffff" />
                    <Text className="text-white text-base mt-4 opacity-80">
                        Memuat aplikasi...
                    </Text>
                </Animated.View>
            </View>
        </View>
    );
};

