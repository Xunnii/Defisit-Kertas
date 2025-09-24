import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { EditableTable } from '../components/common/EditableTable';

type Row = { id: string; uraian: string; dipasang: string; bongkar: string };

type FormData = {
    noAgenda: string;
    idPelanggan: string;
    alamat: string;
    tarifDaya: string;
    kapasitasOutputInverter: string;
    systemPLTSAtap: string;
    nik: string;
    layanan: string;
    noRegistrasiSLO: string;
    keperluan: string;
    garduTiang: string;
    idPelangganTetangga: string;
};

export const PerintahKerjaScreen = () => {
    const [formData, setFormData] = useState<FormData>({
        noAgenda: '',
        idPelanggan: '',
        alamat: '',
        tarifDaya: '',
        kapasitasOutputInverter: '',
        systemPLTSAtap: '',
        nik: '',
        layanan: '',
        noRegistrasiSLO: '',
        keperluan: '',
        garduTiang: '',
        idPelangganTetangga: '',
    });

    const [tableData, setTableData] = useState<Row[]>([]);

    const updateFormData = (key: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        // Handle form submission
        console.log('Form Data:', formData);
        console.log('Table Data:', tableData);
    };

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="p-3 mt-6">
                {/* Header */}
                <Text className="text-lg font-bold text-black mb-4 text-center">
                    PERINTAH KERJA
                </Text>

                {/* Section I: Dasar */}
                <View className="bg-gray-100 p-3 mb-3 rounded">
                    <Text className="text-sm font-semibold text-black mb-2">I. Dasar :</Text>
                    <View className="bg-white p-2 rounded border">
                        <Text className="text-xs text-gray-600">
                            [Dasar hukum atau referensi untuk pekerjaan ini]
                        </Text>
                    </View>
                </View>

                {/* Section II: Jenis Pekerjaan */}
                <View className="bg-gray-100 p-3 mb-3 rounded">
                    <Text className="text-sm font-semibold text-black mb-2">II. Jenis Pekerjaan :</Text>
                    <View className="bg-white p-2 rounded border">
                        <Text className="text-xs text-gray-600">
                            [Jenis pekerjaan yang akan dilaksanakan]
                        </Text>
                    </View>
                </View>

                {/* Section III: Data Pelanggan */}
                <View className="bg-gray-100 p-3 mb-3 rounded">
                    <Text className="text-sm font-semibold text-black mb-3">III. Data Pelanggan</Text>

                    <View className="space-y-2">
                        <View className="flex-row items-center">
                            <Text className="text-xs font-medium text-black w-24">1. No Agenda</Text>
                            <Text className="text-xs text-gray-600">:</Text>
                            <TextInput
                                value={formData.noAgenda}
                                onChangeText={(text) => updateFormData('noAgenda', text)}
                                placeholder=""
                                className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 ml-2 text-xs"
                            />
                        </View>

                        <View className="flex-row items-center">
                            <Text className="text-xs font-medium text-black w-24">2. ID Pelanggan</Text>
                            <Text className="text-xs text-gray-600">:</Text>
                            <TextInput
                                value={formData.idPelanggan}
                                onChangeText={(text) => updateFormData('idPelanggan', text)}
                                placeholder=""
                                className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 ml-2 text-xs"
                            />
                        </View>

                        <View className="flex-row items-start">
                            <Text className="text-xs font-medium text-black w-24">3. Alamat</Text>
                            <Text className="text-xs text-gray-600">:</Text>
                            <TextInput
                                value={formData.alamat}
                                onChangeText={(text) => updateFormData('alamat', text)}
                                placeholder=""
                                multiline
                                numberOfLines={2}
                                className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 ml-2 text-xs"
                            />
                        </View>

                        <View className="flex-row items-center">
                            <Text className="text-xs font-medium text-black w-24">4. Tarif / Daya</Text>
                            <Text className="text-xs text-gray-600">:</Text>
                            <TextInput
                                value={formData.tarifDaya}
                                onChangeText={(text) => updateFormData('tarifDaya', text)}
                                placeholder=""
                                className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 ml-2 text-xs"
                            />
                        </View>

                        <View className="flex-row items-center">
                            <Text className="text-xs font-medium text-black w-24">5. Kapasitas Output Inverter</Text>
                            <Text className="text-xs text-gray-600">:</Text>
                            <TextInput
                                value={formData.kapasitasOutputInverter}
                                onChangeText={(text) => updateFormData('kapasitasOutputInverter', text)}
                                placeholder=""
                                className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 ml-2 text-xs"
                            />
                        </View>

                        <View className="flex-row items-center">
                            <Text className="text-xs font-medium text-black w-24">6. System PLTS Atap</Text>
                            <Text className="text-xs text-gray-600">:</Text>
                            <TextInput
                                value={formData.systemPLTSAtap}
                                onChangeText={(text) => updateFormData('systemPLTSAtap', text)}
                                placeholder=""
                                className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 ml-2 text-xs"
                            />
                        </View>

                        <View className="flex-row items-center">
                            <Text className="text-xs font-medium text-black w-24">7. NIK</Text>
                            <Text className="text-xs text-gray-600">:</Text>
                            <TextInput
                                value={formData.nik}
                                onChangeText={(text) => updateFormData('nik', text)}
                                placeholder=""
                                className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 ml-2 text-xs"
                            />
                        </View>

                        <View className="flex-row items-center">
                            <Text className="text-xs font-medium text-black w-24">8. Layanan</Text>
                            <Text className="text-xs text-gray-600">:</Text>
                            <TextInput
                                value={formData.layanan}
                                onChangeText={(text) => updateFormData('layanan', text)}
                                placeholder=""
                                className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 ml-2 text-xs"
                            />
                        </View>

                        <View className="flex-row items-center">
                            <Text className="text-xs font-medium text-black w-24">9. No Registrasi SLO</Text>
                            <Text className="text-xs text-gray-600">:</Text>
                            <TextInput
                                value={formData.noRegistrasiSLO}
                                onChangeText={(text) => updateFormData('noRegistrasiSLO', text)}
                                placeholder=""
                                className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 ml-2 text-xs"
                            />
                        </View>

                        <View className="flex-row items-center">
                            <Text className="text-xs font-medium text-black w-24">10. Keperluan</Text>
                            <Text className="text-xs text-gray-600">:</Text>
                            <TextInput
                                value={formData.keperluan}
                                onChangeText={(text) => updateFormData('keperluan', text)}
                                placeholder=""
                                className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 ml-2 text-xs"
                            />
                        </View>

                        <View className="flex-row items-center">
                            <Text className="text-xs font-medium text-black w-24">11. Gardu Tiang</Text>
                            <Text className="text-xs text-gray-600">:</Text>
                            <TextInput
                                value={formData.garduTiang}
                                onChangeText={(text) => updateFormData('garduTiang', text)}
                                placeholder=""
                                className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 ml-2 text-xs"
                            />
                        </View>

                        <View className="flex-row items-center">
                            <Text className="text-xs font-medium text-black w-24">12. ID. Pelanggan Tetangga</Text>
                            <Text className="text-xs text-gray-600">:</Text>
                            <TextInput
                                value={formData.idPelangganTetangga}
                                onChangeText={(text) => updateFormData('idPelangganTetangga', text)}
                                placeholder=""
                                className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 ml-2 text-xs"
                            />
                        </View>
                    </View>
                </View>

                {/* Section IV: Tabel Pelaksanaan */}
                <View className="mb-4 ">
                    <Text className="text-sm font-semibold text-black mb-2">IV. Pelaksanaan :</Text>
                    <EditableTable
                        initialRows={[
                            { id: '1', uraian: '1. Letak APP', dipasang: '', bongkar: '' },
                            { id: '2', uraian: '2. Alat Pembatas', dipasang: '', bongkar: '' },
                            { id: '2a', uraian: '   a. Tanggal', dipasang: '', bongkar: '' },
                            { id: '2b', uraian: '   b. Merk/Type/ nomor', dipasang: '', bongkar: '' },
                            { id: '2c', uraian: '   c. Tahun Tera/ tahun buat', dipasang: '', bongkar: '' },
                            { id: '2d', uraian: '   d. ukuran/setting', dipasang: '', bongkar: '' },
                            { id: '3', uraian: '3. Meter kWh:', dipasang: '', bongkar: '' },
                            { id: '3a', uraian: '   a. Tanggal', dipasang: '', bongkar: '' },
                            { id: '3b', uraian: '   b. merk/type/ nomor', dipasang: '', bongkar: '' },
                            { id: '3c', uraian: '   c. tahun Tera / Tahun buat', dipasang: '', bongkar: '' },
                            { id: '3d', uraian: '   d. Kemampuan kWh Meter', dipasang: '', bongkar: '' },
                            { id: '3e', uraian: '   e. Konstanta Meter', dipasang: '', bongkar: '' },
                            { id: '3f', uraian: '   f. Stand Meter LWBP WBP', dipasang: '', bongkar: '' },
                            { id: '3g', uraian: '   g. Kwh Sisa', dipasang: '', bongkar: '' },
                            { id: '3h', uraian: '   h. trafo Arus, Trafo Tegangan', dipasang: '', bongkar: '' },
                            { id: '3i', uraian: '   i. trafo kali', dipasang: '', bongkar: '' },
                            { id: '4', uraian: '4. Saklerar Waktu:', dipasang: '', bongkar: '' },
                            { id: '4a', uraian: '   a. tanggal', dipasang: '', bongkar: '' },
                            { id: '4b', uraian: '   b. Merk/Type/ Nomor', dipasang: '', bongkar: '' },
                            { id: '4c', uraian: '   c. Tahun Tera / Nomor', dipasang: '', bongkar: '' },
                            { id: '4d', uraian: '   d. Penggerak', dipasang: '', bongkar: '' },
                            { id: '5', uraian: '5. Letak SLTR/ SLTM / SLTT*', dipasang: '', bongkar: '' },
                            { id: '6', uraian: '6. Jenis SLTR/ SLTM / SLTT*', dipasang: '', bongkar: '' },
                            { id: '7', uraian: '7. Panja. SLTR/ SLTM / SLTT*', dipasang: '', bongkar: '' },
                            { id: '8', uraian: '8. Fasa', dipasang: '', bongkar: '' },
                            { id: '9', uraian: '9. Tegangan Nominal', dipasang: '', bongkar: '' },
                            { id: '10', uraian: '10. Pengukuran', dipasang: '', bongkar: '' },
                            { id: '11', uraian: '11. Menggunakan Trafo Milik PLN', dipasang: '', bongkar: '' },
                            { id: '12', uraian: '12. Gambar Penyambungan', dipasang: '', bongkar: '' },
                            { id: '13', uraian: '13. ....................................', dipasang: '', bongkar: '' },
                        ]}
                        onChange={setTableData}
                    />
                </View>

                {/* Submit Button */}
                <TouchableOpacity
                    onPress={handleSubmit}
                    className="bg-blue-600 py-3 rounded-lg items-center mb-4"
                >
                    <Text className="text-white font-bold text-sm">Simpan Perintah Kerja</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
