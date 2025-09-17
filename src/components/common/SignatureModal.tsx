import React, { useRef, useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Signature from 'react-native-signature-canvas';

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
    const signatureRef = useRef(null);

    const handleOK = (signature: string) => {
        console.log('Signature received:', signature ? 'Yes' : 'No');
        if (signature) {
            onSave(signature);
            onClose();
        } else {
            Alert.alert('Peringatan', 'Silakan buat tanda tangan terlebih dahulu');
        }
    };

    const handleClear = () => {
        if (signatureRef.current) {
            signatureRef.current.clearSignature();
        }
    };

    const handleEmpty = () => {
        console.log('Signature is empty');
    };

    const webStyle = `
        .m-signature-pad {
            box-shadow: none;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
        }
        .m-signature-pad--body {
            border: none;
        }
        .m-signature-pad--footer {
            display: none;
        }
    `;

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
                        <Signature
                            ref={signatureRef}
                            onOK={handleOK}
                            onEmpty={handleEmpty}
                            descriptionText=""
                            clearText=""
                            confirmText=""
                            webStyle={webStyle}
                            autoClear={false}
                            imageType="image/png"
                            style={styles.signaturePad}
                        />
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={handleClear}
                            style={styles.clearButton}
                        >
                            <Text style={styles.clearButtonText}>Hapus</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                if (signatureRef.current) {
                                    signatureRef.current.readSignature();
                                }
                            }}
                            style={styles.saveButton}
                        >
                            <Text style={styles.saveButtonText}>Simpan</Text>
                        </TouchableOpacity>
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
        padding: 16,
    },
    signaturePad: {
        height: 200,
        backgroundColor: '#f9fafb',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
    },
    clearButton: {
        backgroundColor: '#e5e7eb',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    clearButtonText: {
        color: '#374151',
        fontWeight: '500',
    },
    saveButton: {
        backgroundColor: '#14A0B7',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    saveButtonText: {
        color: 'white',
        fontWeight: '500',
    },
});