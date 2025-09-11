import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

type NavigationProps = {
    currentScreen: string;
    onNavigate: (screen: string) => void;
};

export const Navigation = ({ currentScreen, onNavigate }: NavigationProps) => {
    const navItems = [
        { id: 'home', label: 'Beranda', icon: '🏠' },
        { id: 'products', label: 'Produk', icon: '🥜' },
        { id: 'orders', label: 'Pesanan', icon: '📦' },
        { id: 'profile', label: 'Profil', icon: '👤' }
    ];

    return (
        <View className="bg-white border-t border-gray-200 px-4 py-2">
            <View className="flex-row justify-around">
                {navItems.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => onNavigate(item.id)}
                        className={`flex-1 items-center py-2 px-1 ${currentScreen === item.id ? 'bg-blue-50 rounded-lg' : ''
                            }`}
                    >
                        <Text className="text-2xl mb-1">{item.icon}</Text>
                        <Text
                            className={`text-xs font-medium ${currentScreen === item.id ? 'text-blue-600' : 'text-gray-500'
                                }`}
                        >
                            {item.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};
