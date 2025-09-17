import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';

const Section = ({ title, children }: { title?: string; children: React.ReactNode }) => (
    <View className="bg-gray-200 rounded-xl p-3 mb-4 mx-3">
        {title ? (
            <Text className="text-xs font-semibold text-black mb-2">{title}</Text>
        ) : null}
        {children}
    </View>
);

const Field = ({ label, placeholder }: { label: string; placeholder?: string }) => (
    <View className="mb-3">
        <Text className="text-xs font-semibold text-black mb-1">{label}</Text>
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF"
            className="bg-white rounded-lg px-3 py-2 text-sm"
        />
    </View>
);

export const FormScreen = () => {
    return (
        <View className="flex-1 bg-white">
            <View className="bg-primary px-4 rounded-b-3xl pt-12 pb-4 items-center">
                <Text className="text-white font-extrabold text-base">Formulir Survey</Text>
                <Text className="text-white font-extrabold text-base">Permohonan Listrik</Text>
            </View>

            <ScrollView contentContainerStyle={{ paddingVertical: 12, paddingBottom: 32 }}>
                <Section>
                    <Field label="Nama :" placeholder="" />
                    <Field label="Alamat :" placeholder="" />
                    <View className='flex-row gap-3'>
                        <View className='flex-1'>
                            <Field label="Kode RBM :" placeholder="" />
                        </View>

                        <View className='flex-1'>
                            <Field label="Telp :" placeholder="" />
                        </View>
                    </View>
                </Section>

                <Section>
                    <View className='flex-row gap-3'>
                        <View className='flex-1'>
                            <Field label="Tarif :" placeholder="" />
                        </View>
                        <View className='flex-1'>

                            <Field label="Daya :" placeholder="" />
                        </View>
                    </View>
                    <Field label="Rp. Bp :" placeholder="" />
                </Section>

                <Section>
                    <View className="flex-row gap-3">
                        <View className="flex-1">
                            <Field label="Sambungan Langsung :" placeholder="" />
                        </View>
                        <View className="flex-1">
                            <Field label="Tiang :" placeholder="" />
                        </View>
                    </View>

                    <View className="flex-row gap-3">
                        <View className="flex-1">
                            <Field label="Perluasan JTR :" placeholder="" />
                        </View>
                        <View className="flex-1">
                            <Field label="Tiang :" placeholder="" />
                        </View>
                    </View>

                    <View className="flex-row gap-3">
                        <View className="flex-1">
                            <Field label="Perluasan JTM/KTM:" placeholder="" />
                        </View>
                        <View className="flex-1">
                            <Field label="Tiang :" placeholder="" />
                        </View>
                    </View>

                    <View className="flex-row gap-3">
                        <View className="flex-1">
                            <Field label="Penambahan Trafo :" placeholder="" />
                        </View>
                        <View className="flex-1">
                            <Field label="Tiang :" placeholder="" />
                        </View>
                    </View>
                </Section>

                <Section>
                    <Field label="a. Pen" placeholder="" />
                    <Field label="Kap P" placeholder="" />
                    <Field label="Beban Max" placeholder="" />
                </Section>

                <Section>
                    <Field label="No / Nama" placeholder="" />
                    <Field label="Jenis" placeholder="" />
                    <Field label="Kap Gard" placeholder="" />
                    <Field label="Beban Gard" placeholder="" />
                    <Field label="Persentase" placeholder="" />
                    <Field label="Teg. di" placeholder="" />
                </Section>
            </ScrollView>
        </View>

    );
};


