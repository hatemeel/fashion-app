import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    width: 280,
    marginBottom: 40,
    textAlign: 'center',
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
      <Text variant="title2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
      <Button variant={last ? 'primary' : 'default'} {...{ onPress }}>
        {last ? "Let's get started" : 'Next'}
      </Button>
    </View>
  );
};

export default Subslide;
