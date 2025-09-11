import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Container } from '../components/common/Container';

const products = [
    {
        id: 1,
        name: 'Kacang Almond Panggang',
        price: 'Rp 45.000',
        image: '🥜',
        rating: 4.8,
        description: 'Kacang almond panggang dengan rasa gurih dan renyah'
    },
    {
        id: 2,
        name: 'Kacang Mete Panggang',
        price: 'Rp 35.000',
        image: '🥜',
        rating: 4.9,
        description: 'Kacang mete panggang premium dengan cita rasa lezat'
    },
    {
        id: 3,
        name: 'Kacang Walnut Panggang',
        price: 'Rp 50.000',
        image: '🥜',
        rating: 4.7,
        description: 'Kacang walnut panggang kaya nutrisi dan bergizi'
    },
    {
        id: 4,
        name: 'Kacang Pistachio Panggang',
        price: 'Rp 60.000',
        image: '🥜',
        rating: 4.9,
        description: 'Kacang pistachio panggang dengan rasa premium'
    }
];

export const ProductScreen = () => {
    return (
        <Container>
            <ScrollView className="flex-1">
                {/* Header */}
                <View className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 rounded-b-3xl mb-6">
                    <Text className="text-white text-3xl font-bold mb-2">Produk Kami</Text>
                    <Text className="text-white text-lg opacity-90">Kacang Panggang Berkualitas Tinggi</Text>
                </View>

                {/* Search Bar */}
                <View className="px-4 mb-6">
                    <View className="bg-gray-100 rounded-xl p-4 flex-row items-center">
                        <Text className="text-gray-400 mr-3">🔍</Text>
                        <Text className="text-gray-500 flex-1">Cari produk kacang...</Text>
                    </View>
                </View>

                {/* Product Grid */}
                <View className="px-4">
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="text-xl font-bold text-gray-800">Semua Produk</Text>
                        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg">
                            <Text className="text-white font-semibold">Filter</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="space-y-4">
                        {products.map((product) => (
                            <TouchableOpacity
                                key={product.id}
                                className="bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                            >
                                <View className="flex-row">
                                    {/* Product Image */}
                                    <View className="w-20 h-20 bg-amber-100 rounded-xl items-center justify-center mr-4">
                                        <Text className="text-3xl">{product.image}</Text>
                                    </View>

                                    {/* Product Info */}
                                    <View className="flex-1">
                                        <Text className="text-lg font-bold text-gray-800 mb-1">
                                            {product.name}
                                        </Text>
                                        <Text className="text-gray-600 text-sm mb-2">
                                            {product.description}
                                        </Text>

                                        {/* Rating */}
                                        <View className="flex-row items-center mb-2">
                                            <Text className="text-yellow-500 mr-1">⭐</Text>
                                            <Text className="text-gray-600 text-sm">{product.rating}</Text>
                                        </View>

                                        {/* Price and Add Button */}
                                        <View className="flex-row justify-between items-center">
                                            <Text className="text-xl font-bold text-green-600">
                                                {product.price}
                                            </Text>
                                            <TouchableOpacity className="bg-green-500 px-4 py-2 rounded-lg">
                                                <Text className="text-white font-semibold">+ Keranjang</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Bottom CTA */}
                <View className="px-4 mt-6 mb-8">
                    <TouchableOpacity className="bg-gradient-to-r from-green-500 to-blue-500 py-4 rounded-xl">
                        <Text className="text-white text-center text-lg font-bold">
                            Lihat Semua Produk
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Container>
    );
};
