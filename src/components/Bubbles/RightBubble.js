import React from 'react';
import {View, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Text, Image} from 'native-base';
import Svg, {Path} from 'react-native-svg';

export default function RightBubble({text, timestamp, status}) {
  return (
    <View style={[styles.item, styles.itemOut]}>
      <View style={styles.balloon}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.timestamp}>{timestamp}</Text>

        <View style={[styles.arrowContainer, styles.arrowRightContainer]}>
          <Svg
            style={styles.arrowRight}
            width={moderateScale(15.5, 0.6)}
            height={moderateScale(17.5, 0.6)}
            viewBox="32.485 17.5 15.515 17.5"
            enable-background="new 32.485 17.5 15.515 17.5">
            <Path
              d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
              fill="#1084ff"
              x="0"
              y="0"
            />
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: moderateScale(7, 2),
    flexDirection: 'row',
  },
  itemIn: {
    marginLeft: 20,
  },
  itemOut: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  balloon: {
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 20,
    backgroundColor: '#1084ff',
  },
  arrowContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1,
  },
  arrowLeftContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },

  arrowRightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  arrowLeft: {
    left: moderateScale(-6, 0.5),
  },

  arrowRight: {
    right: moderateScale(-6, 0.5),
  },
  text: {
    paddingTop: 5,
    color: 'white',
    // textAlign: 'right',
  },
  timestamp: {
    color: 'lightgray',
    fontSize: 12,
    textAlign: 'right',
  },
});
