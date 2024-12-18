import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function PixelProgressBar({ progress = 0, label }) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.percentage}>{`${progress}%`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 16,
  },
  label: {
    fontFamily: 'SFPixelate',
    fontSize: 12,
    color: '#264653',
    marginBottom: 8,
  },
  progressBar: {
    width: '100%',
    height: 24,
    backgroundColor: '#e9c46a', // Background of the progress bar
    borderColor: '#264653',    // Border for pixel-art effect
    borderWidth: 4,
    borderRadius: 0,           // Hard edges for pixel art
    overflow: 'hidden',        // Crop the progress
  },
  progress: {
    height: '100%',
    backgroundColor: '#2a9d8f', // Progress color
    borderRightColor: '#264653', // Simulates blocky pixel effect
    borderRightWidth: 4,
  },
  percentage: {
    fontFamily: 'SFPixelate',
    fontSize: 12,
    color: '#264653',
    marginTop: 8,
  },
});
