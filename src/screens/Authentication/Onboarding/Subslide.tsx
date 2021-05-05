import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontFamily: 'sf-semibold',
    fontSize: 24,
    color: '#0c0d34',
  },
  description: {
    fontFamily: 'sf-regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#0c0d34',
    marginBottom: 40,
  },
});

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        title={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </View>
  );
};

export default Subslide;
