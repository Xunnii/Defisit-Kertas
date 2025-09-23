import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { SignaturePad } from '../SignaturePad';

interface SignatureModalProps {
    isVisible: boolean;
    onClose: () => void;
    onSave: (signature: string) => void;
    title?: string;
}

export const SignatureModal = ({
    isVisible,
    onClose,
    onSave,
    title = "Tanda Tangan"
}: SignatureModalProps) => {
    const [hasSignature, setHasSignature] = useState(false);

    const handleSave = (signature: string) => {
        console.log('Signature received:', signature ? 'Yes' : 'No');
        if (signature) {
            onSave(signature);
            onClose();
        } else {
            Alert.alert('Peringatan', 'Silakan buat tanda tangan terlebih dahulu');
        }
    };

    const handleClear = () => {
        setHasSignature(false);
    };

    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.title}>{title}</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.closeButton}>Tutup</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Signature Area */}
                    <View style={styles.signatureContainer}>
                        <SignaturePad
                            onSave={handleSave}
                            onClear={handleClear}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 12,
        width: '100%',
        maxWidth: 400,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1f2937',
    },
    closeButton: {
        color: '#14A0B7',
        fontWeight: '600',
    },
    signatureContainer: {
        height: 300,
        padding: 0,
    },
});