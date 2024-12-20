import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useVariableValue} from '@devcycle/react-native-client-sdk';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PixelButton} from './PixelButton.tsx';

export function ActiveUpgradeOptions({
  variableKey,
  levelUpName,
}: {
  variableKey: string;
  levelUpName: string;
}) {
  // @ts-ignore
  const {options}: {options: string[]} = useVariableValue(variableKey, {options: []});

  return options.length !== 0 ? (
    <>
      <Text style={[styles.bankText, {padding: 8}]}>
        Vote for {levelUpName}:
      </Text>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <PixelButton
          onPress={() => {}}
          title={options[0]}
          style={styles.choiceButton}
          disabled={false}
        />
        <View style={{width: 4}} />
        <PixelButton
          onPress={() => {}}
          title={options[1]}
          style={styles.choiceButton}
          disabled={false}
        />
      </View>
    </>
  ) : null;
}

const styles = StyleSheet.create({
  bankText: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'SFPixelate',
    color: Colors.black,
  },
  choiceButton: {
    backgroundColor: '#E76F51', // Button color
    borderColor: '#5C304C', // Border color
    borderWidth: 4, // Thick border for pixel effect
    paddingVertical: 8, // Adjust padding for size
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
