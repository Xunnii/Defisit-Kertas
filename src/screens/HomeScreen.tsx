import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Container } from '../components/common/Container';

export const HomeScreen = () => {
    return (
        <Container>
            <ScrollView className="flex-1">
                {/* Header Section */}
                <View className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-b-3xl mb-6">
                    {/* <Text className="text-black text-3xl font-bold mb-2">Selamat Datang!</Text> */}
                    <Text className="text text-3xl font-bold mb-2">Selamat Datang!</Text>
                    <Text className="text-white text-lg opacity-90">Aplikasi Kacang Panggang</Text>
                </View>

                {/* Main Content */}
                <View className="px-4">
                    {/* Feature Cards */}
                    <View className="mb-6">
                        <Text className="text-2xl font-bold text-gray-800 mb-4">Fitur Utama</Text>

                        <View className="space-y-4">
                            <TouchableOpacity className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                                <View className="flex-row items-center">
                                    <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center mr-4">
                                        <Text className="text-blue-600 text-xl">🥜</Text>
                                    </View>
                                    <View className="flex-1">
                                        <Text className="text-lg font-semibold text-gray-800">Produk Kacang</Text>
                                        <Text className="text-gray-600">Lihat koleksi kacang panggang terbaik</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                                <View className="flex-row items-center">
                                    <View className="w-12 h-12 bg-green-100 rounded-full items-center justify-center mr-4">
                                        <Text className="text-green-600 text-xl">🛒</Text>
                                    </View>
                                    <View className="flex-1">
                                        <Text className="text-lg font-semibold text-gray-800">MASUKAN</Text>
                                        <Text className="text-gray-600">Pesan kacang panggang favorit Anda</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                                <View className="flex-row items-center">
                                    <View className="w-12 h-12 bg-orange-100 rounded-full items-center justify-center mr-4">
                                        <Text className="text-orange-600 text-xl">📞</Text>
                                    </View>
                                    <View className="flex-1">
                                        <Text className="text-lg font-semibold text-gray-800">Hubungi Kami</Text>
                                        <Text className="text-gray-600">Customer service siap membantu</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Stats Section */}
                    <View className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-2xl mb-6">
                        <Text className="text-white text-xl font-bold mb-4">Statistik Hari Ini</Text>
                        <View className="flex-row justify-between">
                            <View className="items-center">
                                <Text className="text-white text-2xl font-bold">150+</Text>
                                <Text className="text-white opacity-80">Produk Terjual</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-white text-2xl font-bold">98%</Text>
                                <Text className="text-white opacity-80">Kepuasan</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-white text-2xl font-bold">24/7</Text>
                                <Text className="text-white opacity-80">Layanan</Text>
                            </View>
                        </View>
                    </View>

                    {/* Quick Actions */}
                    <View className="mb-6">
                        <Text className="text-2xl font-bold text-gray-800 mb-4">Aksi Cepat</Text>
                        <View className="flex-row space-x-3">
                            <TouchableOpacity className="flex-1 bg-blue-500 py-3 px-4 rounded-xl">
                                <Text className="text-white text-center font-semibold">Lihat Menu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="flex-1 bg-green-500 py-3 px-4 rounded-xl">
                                <Text className="text-white text-center font-semibold">Pesan</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Recent Activity */}
                    <View className="bg-gray-50 p-4 rounded-xl">
                        <Text className="text-lg font-semibold text-gray-800 mb-3">Aktivitas Terbaru</Text>
                        <View className="space-y-2">
                            <View className="flex-row items-center">
                                <View className="w-2 h-2 bg-green-500 rounded-full mr-3"></View>
                                <Text className="text-gray-700">Pesanan #1234 berhasil diproses</Text>
                            </View>
                            <View className="flex-row items-center">
                                <View className="w-2 h-2 bg-blue-500 rounded-full mr-3"></View>
                                <Text className="text-gray-700">Produk baru ditambahkan ke katalog</Text>
                            </View>
                            <View className="flex-row items-center">
                                <View className="w-2 h-2 bg-orange-500 rounded-full mr-3"></View>
                                <Text className="text-gray-700">Promo khusus akhir bulan</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Container>
    );
};
