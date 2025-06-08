import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BaseToastProps, ToastType } from 'react-native-toast-message';
import SuccessCheckIcon from '../../assets/icons/successcheck';
import CloseIcon from '../../assets/icons/close';

// Extend props correctly using ToastType
type CustomToastProps = BaseToastProps & { type: ToastType };

const CustomToast = ({ text1, text2, onPress, type }: CustomToastProps) => {
  const isError = type === 'error';

  return (
    <View style={[styles.container, isError && styles.errorContainer]}>
      {!isError && <SuccessCheckIcon size={14.5} />}
      <View style={styles.textContainer}>
        {text1 && <Text style={[styles.text1, isError && styles.errorText1]}>{text1}</Text>}
        {text2 && <Text style={[styles.text2, isError && styles.errorText2]}>{text2}</Text>}
      </View>
      <TouchableOpacity onPress={onPress}>
        <CloseIcon size={10.5} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomToast;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 10,
    gap: 10,
  },
  errorContainer: {
    borderLeftColor: '#EF4444',
  },
  textContainer: {
    flex: 1,
  },
  text1: {
    fontWeight: '700',
    color: '#333',
    fontSize: 14,
  },
  text2: {
    fontSize: 14,
    color: '#334155',
    fontWeight: '600',
    lineHeight: 20,
  },
  errorText1: {
    color: '#B91C1C',
  },
  errorText2: {
    color: '#991B1B',
  },
});