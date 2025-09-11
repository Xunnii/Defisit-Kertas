// src/components/common/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    className?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export const Button = ({
    title,
    onPress,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    className = '',
    style,
    textStyle
}: ButtonProps) => {
    const getVariantClasses = () => {
        switch (variant) {
            case 'primary':
                return 'bg-blue-500';
            case 'secondary':
                return 'bg-gray-500';
            case 'outline':
                return 'bg-transparent border-2 border-blue-500';
            default:
                return 'bg-blue-500';
        }
    };

    const getSizeClasses = () => {
        switch (size) {
            case 'small':
                return 'py-2 px-4';
            case 'medium':
                return 'py-3 px-6';
            case 'large':
                return 'py-4 px-8';
            default:
                return 'py-3 px-6';
        }
    };

    const getTextColor = () => {
        switch (variant) {
            case 'outline':
                return 'text-blue-500';
            default:
                return 'text-white';
        }
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            className={`
        ${getVariantClasses()} 
        ${getSizeClasses()} 
        rounded-lg 
        items-center 
        justify-center
        ${disabled ? 'opacity-50' : ''}
        ${className}
      `}
            style={style}
        >
            <Text
                className={`font-semibold ${getTextColor()}`}
                style={textStyle}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};