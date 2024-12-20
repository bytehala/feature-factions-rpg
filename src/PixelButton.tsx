import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export function PixelButton({
  onPress,
  title,
  style,
  disabled,
}: {
  onPress: () => void;
  title: string;
  style: StyleProp<ViewStyle>;
  disabled?: boolean;
}) {
  const buttonStyle = disabled ? styles.disabledButton : style;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style, buttonStyle]}
      disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'SFPixelate',
    color: Colors.black,
  },

  disabledButton: {
    backgroundColor: '#B8B8B8', // Button color
    borderColor: '#888888', // Border color
    borderWidth: 4, // Thick border for pixel effect
    paddingVertical: 8, // Adjust padding for size
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
