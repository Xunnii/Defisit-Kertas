import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Container } from '../components/common/Container';

const orders = [
    {
        id: 'ORD-001',
        date: '15 Jan 2024',
        status: 'Dikirim',
        total: 'Rp 125.000',
        items: ['Kacang Almond', 'Kacang Mete'],
        statusColor: 'bg-green-500'
    },
    {
        id: 'ORD-002',
        date: '12 Jan 2024',
        status: 'Diproses',
        total: 'Rp 85.000',
        items: ['Kacang Walnut'],
        statusColor: 'bg-yellow-500'
    },
    {
        id: 'ORD-003',
        date: '10 Jan 2024',
        status: 'Selesai',
        total: 'Rp 200.000',
        items: ['Kacang Pistachio', 'Kacang Almond'],
        statusColor: 'bg-blue-500'
    }
];

export const OrderScreen = () => {
    return (
        <Container>
            <ScrollView className="flex-1">
                {/* Header */}
                <View className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-b-3xl mb-6">
                    <Text className="text-white text-3xl font-bold mb-2">Pesanan Saya</Text>
                    <Text className="text-white text-lg opacity-90">Kelola pesanan Anda</Text>
                </View>

                {/* Order Stats */}
                <View className="px-4 mb-6">
                    <View className="bg-white p-4 rounded-xl shadow-lg">
                        <View className="flex-row justify-between">
                            <View className="items-center">
                                <Text className="text-2xl font-bold text-gray-800">3</Text>
                                <Text className="text-gray-600 text-sm">Total Pesanan</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-2xl font-bold text-green-600">1</Text>
                                <Text className="text-gray-600 text-sm">Selesai</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-2xl font-bold text-yellow-600">1</Text>
                                <Text className="text-gray-600 text-sm">Diproses</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-2xl font-bold text-blue-600">1</Text>
                                <Text className="text-gray-600 text-sm">Dikirim</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Order List */}
                <View className="px-4">
                    <Text className="text-xl font-bold text-gray-800 mb-4">Riwayat Pesanan</Text>

                    <View className="space-y-4">
                        {orders.map((order) => (
                            <TouchableOpacity
                                key={order.id}
                                className="bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                            >
                                {/* Order Header */}
                                <View className="flex-row justify-between items-start mb-3">
                                    <View>
                                        <Text className="text-lg font-bold text-gray-800">#{order.id}</Text>
                                        <Text className="text-gray-600 text-sm">{order.date}</Text>
                                    </View>
                                    <View className={`${order.statusColor} px-3 py-1 rounded-full`}>
                                        <Text className="text-white text-xs font-semibold">{order.status}</Text>
                                    </View>
                                </View>

                                {/* Order Items */}
                                <View className="mb-3">
                                    <Text className="text-gray-700 font-medium mb-1">Items:</Text>
                                    {order.items.map((item, index) => (
                                        <Text key={index} className="text-gray-600 text-sm">• {item}</Text>
                                    ))}
                                </View>

                                {/* Order Footer */}
                                <View className="flex-row justify-between items-center">
                                    <Text className="text-lg font-bold text-green-600">{order.total}</Text>
                                    <View className="flex-row space-x-2">
                                        <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-lg">
                                            <Text className="text-gray-700 font-semibold">Detail</Text>
                                        </TouchableOpacity>
                                        {order.status === 'Dikirim' && (
                                            <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg">
                                                <Text className="text-white font-semibold">Lacak</Text>
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Quick Actions */}
                <View className="px-4 mt-6 mb-8">
                    <View className="flex-row space-x-3">
                        <TouchableOpacity className="flex-1 bg-green-500 py-3 px-4 rounded-xl">
                            <Text className="text-white text-center font-semibold">Pesan Lagi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-1 bg-blue-500 py-3 px-4 rounded-xl">
                            <Text className="text-white text-center font-semibold">Bantuan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Container>
    );
};
