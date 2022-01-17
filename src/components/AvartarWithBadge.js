import React from 'react';
import { View } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';

function AvatarWithBagde(props) {
  const { style, avatar, size = 'medium', bagde = false } = props;

  return (
    <View style={style}>
      <Avatar
        rounded
        source={{
          uri: avatar,
        }}
        size={size}
      />
      {bagde ? <Badge status="success" /> : <></>}
    </View>
  );
}

export default AvatarWithBagde;
