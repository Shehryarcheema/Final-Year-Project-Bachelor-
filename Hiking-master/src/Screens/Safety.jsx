import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const safetyTips = [
  {
    id: '1',
    title: 'Stay on the Trail',
    detail: 'Wandering off the path can cause harm to protected areas and put you at risk.'
  },
  {
    id: '2',
    title: 'Check the Weather',
    detail: 'Always check the forecast before departing to avoid any dangerous weather conditions.'
  },
  {
    id: '3',
    title: 'Notify Someone',
    detail: 'Let a friend or family member know where you’re going and when you expect to return.'
  },
  {
    id: '4',
    title: 'Pack the Essentials',
    detail: 'Ensure you have water, food, a map, a compass, and a first-aid kit.'
  },
  {
    id: '5',
    title: 'Wear Appropriate Clothing',
    detail: 'Dress for the weather. Wear layers that you can add or remove as needed, and sturdy footwear.'
  },
  {
    id: '6',
    title: 'Respect Wildlife',
    detail: 'Observe wildlife from a distance. Do not follow or approach them.'
  },
  {
    id: '7',
    title: 'Plan Your Route',
    detail: 'Know your route and stick to it. Use a trail map and mark out checkpoints.'
  },
  {
    id: '8',
    title: 'Learn Basic Repairs',
    detail: 'Carry a multi-tool and learn how to fix basic gear problems.'
  },
  {
    id: '9',
    title: 'Be Aware of Your Limits',
    detail: 'Don’t push yourself too hard, and take breaks as necessary.'
  },
  {
    id: '10',
    title: 'Leave No Trace',
    detail: 'Pack out all your trash, leftover food, and litter to keep the trail clean.'
  }
];

const SafetyTipsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {safetyTips.map((tip) => (
          <View key={tip.id} style={styles.tipItem}>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipDetail}>{tip.detail}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  tipItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:"white"
  },
  tipDetail: {
    marginTop: 5,
    fontSize: 16,
    color:"white"

  },
});

export default SafetyTipsScreen;
