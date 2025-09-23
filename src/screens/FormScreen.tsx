import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SignatureModal } from '../components/common/SignatureModal';
import { EditableTable } from '../components/common/EditableTable';

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
    const [showSignatureModal, setShowSignatureModal] = useState(false);
    const [signature, setSignature] = useState<string | null>(null);

    const handleSaveSignature = (signatureData: string) => {
        setSignature(signatureData);
        console.log('Signature saved:', signatureData);
        Alert.alert('Berhasil', 'Tanda tangan berhasil disimpan!');
    };

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

                {/* Tabel Pelaksanaan (IV) */}
                <Section>
                    <Text className="text-xs font-semibold text-black mb-2">IV. Pelaksanaan</Text>
                    <EditableTable />
                </Section>

                {/* Signature Section */}
                <Section title="Tanda Tangan">
                    <TouchableOpacity
                        onPress={() => setShowSignatureModal(true)}
                        className={`p-4 rounded-lg border-2 border-dashed ${signature ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-gray-50'
                            }`}
                    >
                        <Text className={`text-center font-medium ${signature ? 'text-green-700' : 'text-gray-600'
                            }`}>
                            {signature ? '✓ Tanda Tangan Sudah Ditambahkan' : 'Tap untuk menambahkan tanda tangan'}
                        </Text>
                    </TouchableOpacity>
                </Section>
            </ScrollView>

            <SignatureModal
                isVisible={showSignatureModal}
                onClose={() => setShowSignatureModal(false)}
                onSave={handleSaveSignature}
                title="Tanda Tangan"
            />
        </View>

    );
};


