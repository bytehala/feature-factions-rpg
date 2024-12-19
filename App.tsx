import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import PixelProgressBar from './src/PixelProgressBar.tsx';
import {GoldProvider, useGold} from './src/GoldContext.tsx';

function AppContent() {
  const {gold} = useGold();
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{paddingHorizontal: 12, alignItems: 'center'}}>
        <Text style={[styles.sectionTitle, styles.raceText]}>{'Aetheron'}</Text>
        <Text style={[styles.bankText]}>{'Sylvan Reliquary: 1,000,000'}</Text>

        <Image source={require('./assets/A_race.png')} />

        <View style={{flexDirection: 'row'}}>
          <PixelProgressBar label="Mining" />
          <Text style={[styles.sectionTitle, styles.goldText]}>{gold}💰</Text>
        </View>
        <PixelButton
          title={'Donate 💰 to Faction'}
          onPress={() => console.log('Button Pressed')}
          style={styles.button}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <PixelButton
            onPress={() => {}}
            title={'Thrusters'}
            style={styles.pickedButton}
          />
          <View style={{width: 4}} />
          <PixelButton
            onPress={() => {}}
            title={'Armor'}
            style={styles.choiceButton}
            disabled={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function App(): React.JSX.Element {
  return (
    <GoldProvider>
      <AppContent />
    </GoldProvider>
  );
}

function PixelButton({
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
    <TouchableOpacity onPress={onPress} style={[style, buttonStyle]} disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  raceText: {
    padding: 32,
  },
  goldText: {
    paddingTop: 32,
    paddingLeft: 4,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: '600',
    fontFamily: 'SFPixelate',
    color: Colors.black,
  },
  bankText: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'SFPixelate',
    color: Colors.black,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'SFPixelate',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#E76F51', // Button color
    borderColor: '#5C304C', // Border color
    borderWidth: 4, // Thick border for pixel effect
    paddingVertical: 8, // Adjust padding for size
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    width: '100%',
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
  pickedButton: {
    backgroundColor: '#4EAE40', // Button color
    borderColor: '#05282F', // Border color
    borderWidth: 4, // Thick border for pixel effect
    paddingVertical: 8, // Adjust padding for size
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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

export default App;
