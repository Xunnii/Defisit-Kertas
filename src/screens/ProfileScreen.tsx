import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Container } from '../components/common/Container';

export const ProfileScreen = () => {
    const menuItems = [
        { id: 'edit-profile', label: 'Edit Profil', icon: '✏️', color: 'bg-blue-500' },
        { id: 'address', label: 'Alamat Saya', icon: '📍', color: 'bg-green-500' },
        { id: 'payment', label: 'Metode Pembayaran', icon: '💳', color: 'bg-purple-500' },
        { id: 'notifications', label: 'Notifikasi', icon: '🔔', color: 'bg-orange-500' },
        { id: 'help', label: 'Bantuan', icon: '❓', color: 'bg-gray-500' },
        { id: 'about', label: 'Tentang Aplikasi', icon: 'ℹ️', color: 'bg-indigo-500' }
    ];

    return (
        <Container>
            <ScrollView className="flex-1">
                {/* Header */}
                <View className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-b-3xl mb-6">
                    <View className="items-center">
                        <View className="w-20 h-20 bg-white rounded-full items-center justify-center mb-4">
                            <Text className="text-4xl">👤</Text>
                        </View>
                        <Text className="text-white text-2xl font-bold mb-1">John Doe</Text>
                        <Text className="text-white opacity-80">john.doe@email.com</Text>
                        <Text className="text-white opacity-80 text-sm">+62 812 3456 7890</Text>
                    </View>
                </View>

                {/* Stats Cards */}
                <View className="px-4 mb-6">
                    <View className="flex-row space-x-3">
                        <View className="flex-1 bg-white p-4 rounded-xl shadow-lg items-center">
                            <Text className="text-2xl font-bold text-blue-600">12</Text>
                            <Text className="text-gray-600 text-sm">Total Pesanan</Text>
                        </View>
                        <View className="flex-1 bg-white p-4 rounded-xl shadow-lg items-center">
                            <Text className="text-2xl font-bold text-green-600">Rp 2.5M</Text>
                            <Text className="text-gray-600 text-sm">Total Belanja</Text>
                        </View>
                        <View className="flex-1 bg-white p-4 rounded-xl shadow-lg items-center">
                            <Text className="text-2xl font-bold text-purple-600">4.9</Text>
                            <Text className="text-gray-600 text-sm">Rating</Text>
                        </View>
                    </View>
                </View>

                {/* Menu Items */}
                <View className="px-4 mb-6">
                    <Text className="text-xl font-bold text-gray-800 mb-4">Pengaturan</Text>

                    <View className="space-y-3">
                        {menuItems.map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex-row items-center"
                            >
                                <View className={`w-10 h-10 ${item.color} rounded-full items-center justify-center mr-4`}>
                                    <Text className="text-white text-lg">{item.icon}</Text>
                                </View>
                                <Text className="text-gray-800 font-medium flex-1">{item.label}</Text>
                                <Text className="text-gray-400">›</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Recent Activity */}
                <View className="px-4 mb-6">
                    <Text className="text-xl font-bold text-gray-800 mb-4">Aktivitas Terbaru</Text>

                    <View className="bg-white p-4 rounded-xl shadow-lg">
                        <View className="space-y-3">
                            <View className="flex-row items-center">
                                <View className="w-2 h-2 bg-green-500 rounded-full mr-3"></View>
                                <Text className="text-gray-700 flex-1">Pesanan #ORD-001 berhasil dikirim</Text>
                                <Text className="text-gray-400 text-sm">2 jam lalu</Text>
                            </View>
                            <View className="flex-row items-center">
                                <View className="w-2 h-2 bg-blue-500 rounded-full mr-3"></View>
                                <Text className="text-gray-700 flex-1">Profil berhasil diperbarui</Text>
                                <Text className="text-gray-400 text-sm">1 hari lalu</Text>
                            </View>
                            <View className="flex-row items-center">
                                <View className="w-2 h-2 bg-orange-500 rounded-full mr-3"></View>
                                <Text className="text-gray-700 flex-1">Alamat baru ditambahkan</Text>
                                <Text className="text-gray-400 text-sm">3 hari lalu</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Logout Button */}
                <View className="px-4 mb-8">
                    <TouchableOpacity className="bg-red-500 py-4 rounded-xl">
                        <Text className="text-white text-center text-lg font-bold">Keluar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Container>
    );
};
