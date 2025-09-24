import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface MenuScreenProps {
    onNavigate?: (screen: string) => void;
}

export const MenuScreen = ({ onNavigate }: MenuScreenProps) => {
    const menuItems = [
        {
            id: 'perintah-kerja',
            title: 'Perintah Kerja',
            description: 'Form perintah kerja untuk pelaksanaan pekerjaan',
            icon: 'file-document-edit',
            color: 'bg-blue-500'
        },
        {
            id: 'form',
            title: 'Form Lainnya',
            description: 'Form-form lainnya yang tersedia',
            icon: 'form-select',
            color: 'bg-green-500'
        },
        {
            id: 'profile',
            title: 'Profile',
            description: 'Kelola profil pengguna',
            icon: 'account',
            color: 'bg-purple-500'
        }
    ];

    const handleMenuPress = (menuId: string) => {
        onNavigate?.(menuId);
    };

    return (
        <ScrollView className="flex-1 bg-gray-50">
            <View className="p-4">
                <Text className="text-2xl font-bold text-black mb-6 text-center">
                    Menu Aplikasi
                </Text>

                <View className="space-y-4">
                    {menuItems.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => handleMenuPress(item.id)}
                            className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                        >
                            <View className="flex-row items-center">
                                <View className={`w-12 h-12 ${item.color} rounded-lg items-center justify-center mr-4`}>
                                    <MaterialCommunityIcons
                                        name={item.icon as any}
                                        size={24}
                                        color="white"
                                    />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-lg font-semibold text-black mb-1">
                                        {item.title}
                                    </Text>
                                    <Text className="text-sm text-gray-600">
                                        {item.description}
                                    </Text>
                                </View>
                                <MaterialCommunityIcons
                                    name="chevron-right"
                                    size={20}
                                    color="#9CA3AF"
                                />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};



