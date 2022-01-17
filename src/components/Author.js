import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SCALE } from '../constants';
import AvatarWithBagde from './AvartarWithBadge';

function Author(props) {
  const { data } = props;

  return (
    <View>
      <AvatarWithBagde
        style={styles.avatar}
        avatar={data.avatar}
        size={'small'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  avatar: {
    padding: SCALE(5),
  },
});

export default Author;
