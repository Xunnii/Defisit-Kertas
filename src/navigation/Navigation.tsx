import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


type NavigationProps = {
    currentScreen: string;
    onNavigate: (screen: string) => void;
};

export const Navigation = ({ currentScreen, onNavigate }: NavigationProps) => {
    const navItems = [
        { id: 'home', label: 'Home', icon: 'home' },
        { id: 'menu', label: 'Menu', icon: 'menu' },
        { id: 'form', label: 'Form', icon: 'file-document-edit' },
        { id: 'profile', label: 'Profile', icon: 'account' }
    ];

    return (
        <View className="bg-primary px-4 py-2">
            <View className="flex-row justify-around">
                {navItems.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => onNavigate(item.id)}
                        className={`flex-1 items-center py-2 px-1 ${currentScreen === item.id ? 'bg-secondary rounded-lg' : ''
                            }`}
                    >
                        <MaterialCommunityIcons
                            name={item.icon as any}
                            size={24}
                            color="white"
                            style={{ marginBottom: 4 }}
                        />
                        <Text
                            className={`text-xs font-medium ${currentScreen === item.id ? 'text-white' : 'text-white/80'
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
