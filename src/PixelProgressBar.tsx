import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useGold } from './GoldContext.tsx';

export default function PixelProgressBar({ label }: { label: string }) {
  const { incrementGold } = useGold();
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(progress);

  // Sync the ref with the progress state
  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev >= 100 ? 0 : prev + 1;

        if (newProgress === 0) {
          // Schedule `incrementGold` after the state update completes
          setTimeout(() => {
            incrementGold();
          }, 0);
        }

        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [incrementGold]);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 16,
    flex: 1,
  },
  label: {
    fontFamily: 'SFPixelate',
    fontSize: 24,
    color: '#264653',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  progressBar: {
    width: '100%',
    height: 24,
    backgroundColor: '#305960', // Background of the progress bar
    borderColor: '#0A1C1E',    // Border for pixel-art effect
    borderWidth: 4,
    borderRadius: 0,           // Hard edges for pixel art
    overflow: 'hidden',        // Crop the progress
  },
  progress: {
    height: '100%',
    backgroundColor: '#40986A', // Progress color
  },
});
