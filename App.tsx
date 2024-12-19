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

import 'react-native-get-random-values';
import DeviceInfo from 'react-native-device-info';
import '@react-native-async-storage/async-storage';
import {DevCycleClient, useIsDevCycleInitialized, withDevCycleProvider} from '@devcycle/react-native-client-sdk';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import PixelProgressBar from './src/PixelProgressBar.tsx';
import {GoldProvider, useGold} from './src/GoldContext.tsx';

global.DeviceInfo = DeviceInfo;

const races = {
  A: {
    name: 'Aetheron',
    bankName: 'Central Node',
    levelUpName: 'upgrade',
    imagePath: require('./assets/A_race.png'),
    options: ['Thrusters', 'Armor'],
  },
  B: {
    name: 'Bessari',
    bankName: 'Guild Vault',
    levelUpName: 'advancement',
    imagePath: require('./assets/B_race.png'),
    options: ['Trade', 'Martial Arts'],
  },
  C: {
    name: 'Calenwyn',
    bankName: 'Sylvan Reliquary',
    levelUpName: 'blessing',
    imagePath: require('./assets/C_race.png'),
    options: ['Heal', 'Cloaking'],
  },
};

function AppContent() {
  const {gold, bankTotalGold, depositGold} = useGold();
  // // random between 300,000 to 500,000
  // const randomGold = Math.floor(Math.random() * 200000) + 300000;
  // // format with commas
  const formattedBankTotalGold = bankTotalGold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // // random between 1 to 99
  // const randomMined = Math.floor(Math.random() * 99) + 1;
  // // random 0 or 1
  // const randomChoice = Math.floor(Math.random() * 2);
  const accessor = 'C';
  const {name, bankName, imagePath, levelUpName, options} = races[accessor];
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{paddingHorizontal: 12, alignItems: 'center'}}>
        <Text style={[styles.sectionTitle, styles.raceText]}>{name}</Text>
        <Text style={[styles.bankText]}>{`${bankName}: ${formattedBankTotalGold}`}</Text>

        <Image source={imagePath} />

        <View style={{flexDirection: 'row'}}>
          <PixelProgressBar label="Mining" />
          <Text style={[styles.sectionTitle, styles.goldText]}>{gold}💰</Text>
        </View>
        <PixelButton
          title={'Donate 💰 to Faction'}
          onPress={() => {
            console.log(`Sending ${gold} gold to the faction (backend call)`);
            depositGold();
          }}
          style={styles.button}
        />
        <View>
          <Text style={[styles.bankText, {padding: 8}]}>Vote for {levelUpName}:</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <PixelButton
            onPress={() => {}}
            title={options[0]}
            style={styles.choiceButton}
            disabled={true}
          />
          <View style={{width: 4}} />
          <PixelButton
            onPress={() => {}}
            title={options[1]}
            style={styles.pickedButton}
            disabled={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function App(): React.JSX.Element {
  const devcycleReady = useIsDevCycleInitialized();

  if (!devcycleReady) {
    return <></>;
  }
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
