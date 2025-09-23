import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import Signature from 'react-native-signature-canvas';

interface SignaturePadProps {
    onSave?: (signature: string) => void;
    onClear?: () => void;
}

export const SignaturePad: React.FC<SignaturePadProps> = ({ onSave, onClear }) => {
    const signatureRef = useRef<any>(null);
    const [hasSignature, setHasSignature] = useState(false);

    const handleOK = (signature: string) => {
        console.log('Signature received:', signature ? 'Yes' : 'No');
        if (signature) {
            setHasSignature(true);
            onSave?.(signature);
        } else {
            Alert.alert('Peringatan', 'Silakan buat tanda tangan terlebih dahulu');
        }
    };

    const handleClear = () => {
        if (signatureRef.current) {
            signatureRef.current.clearSignature();
            setHasSignature(false);
        }
        onClear?.();
    };

    const handleEmpty = () => {
        console.log('Signature is empty');
        setHasSignature(false);
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
        <View style={styles.container}>
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

            <View style={styles.controls}>
                <TouchableOpacity style={styles.button} onPress={handleClear}>
                    <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.saveButton]}
                    onPress={() => {
                        if (signatureRef.current) {
                            signatureRef.current.readSignature();
                        }
                    }}
                >
                    <Text style={[styles.buttonText, styles.saveButtonText]}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    signatureContainer: {
        flex: 1,
        padding: 10,
    },
    signaturePad: {
        flex: 1,
        backgroundColor: '#f9fafb',
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        backgroundColor: 'white',
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
    },
    saveButton: {
        backgroundColor: '#007AFF',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    saveButtonText: {
        color: 'white',
    },
});
