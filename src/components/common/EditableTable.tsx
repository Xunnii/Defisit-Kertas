import React, { useMemo, useState } from 'react';
import { View, Text, TextInput } from 'react-native';

type Row = { id: string; uraian: string; dipasang: string; bongkar: string };

interface EditableTableProps {
    title?: string;
    initialRows?: Row[];
    onChange?: (rows: Row[]) => void;
}

export const EditableTable = ({ title, initialRows, onChange }: EditableTableProps) => {
    const seedRows: Row[] = useMemo(
        () =>
            initialRows ?? [
                { id: '1', uraian: '1. Letak APP', dipasang: '', bongkar: '' },
                { id: '2', uraian: '2. Alat Pembatas\n   a. Tanggal\n   b. Merk/Type/ nomor\n   c. Tahun Tera/ tahun buat\n   d. ukuran/setting', dipasang: '', bongkar: '' },
                { id: '3', uraian: '3. Meter kWh :\n   a. Tanggal\n   b. merk/type/ nomor\n   c. tahun Tera / Tahun buat\n   d. Kemampuan kWh Meter\n   e. Konstanta Meter\n   f. Stand Meter LWBP WBP\n   g. kWh Sisa\n   h. trafo Arus, Trafo Tegangan\n   i. trafo kali', dipasang: '', bongkar: '' },
                { id: '4', uraian: '4. Saklar Waktu :\n   a. tanggal\n   b. Merk/Type/ Nomor', dipasang: '', bongkar: '' },
            ],
        [initialRows]
    );

    const [rows, setRows] = useState<Row[]>(seedRows);

    const updateCell = (id: string, key: 'dipasang' | 'bongkar', value: string) => {
        setRows(prev => {
            const next = prev.map(r => (r.id === id ? { ...r, [key]: value } : r));
            onChange?.(next);
            return next;
        });
    };


    return (
        <View className="mx-3 mb-6">
            {title ? (
                <Text className="text-xs font-semibold text-black mb-2">{title}</Text>
            ) : null}

            {/* Header */}
            <View className="flex-row bg-gray-200 rounded-t-xl">
                <Text className="flex-[2] px-3 py-2 text-xs font-semibold text-black">Uraian</Text>
                <Text className="flex-1 px-3 py-2 text-xs font-semibold text-black text-center">Dipasang</Text>
                <Text className="flex-1 px-3 py-2 text-xs font-semibold text-black text-center">Bongkar</Text>
            </View>

            {/* Body */}
            <View className="bg-white rounded-b-xl border border-gray-200">
                {rows.map((row) => (
                    <View key={row.id} className="flex-row border-b border-gray-100 px-2 py-2">
                        <View className="flex-[2] bg-gray-50 rounded-md px-2 py-2 mr-2">
                            <Text className="text-[13px] text-black">{row.uraian}</Text>
                        </View>
                        <TextInput
                            value={row.dipasang}
                            onChangeText={(t) => updateCell(row.id, 'dipasang', t)}
                            placeholder="Isi"
                            placeholderTextColor="#9CA3AF"
                            className="flex-1 bg-white rounded-md px-2 py-2 mr-2 text-[13px] text-right border border-gray-200"
                        />
                        <TextInput
                            value={row.bongkar}
                            onChangeText={(t) => updateCell(row.id, 'bongkar', t)}
                            placeholder="Isi"
                            placeholderTextColor="#9CA3AF"
                            className="flex-1 bg-white rounded-md px-2 py-2 mr-2 text-[13px] text-right border border-gray-200"
                        />
                    </View>
                ))}
            </View>
        </View>
    );
};


