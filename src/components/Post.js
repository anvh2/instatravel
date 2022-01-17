/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SCALE, ScreenName } from '../constants';
import { TextAbstract } from '../utils/convert';
import { MsToPeriod } from '../utils/time';
import AvatarWithBagde from './AvartarWithBadge';
import SlideShow from './SlideShow';

function Post(props) {
  const { data, navigation, handleLike } = props;
  const [liked, setLiked] = useState(data.liked);
  const [likes, setLikes] = useState(data.likes);

  function handleNavigate() {
    if (navigation) {
      navigation.navigate(ScreenName.ViewPost, { post: data });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <AvatarWithBagde style={styles.avatar} avatar={data.author.avatar} />
        <View>
          <Text style={styles.dname}>{data.author.dname}</Text>
          <Text>
            {MsToPeriod(data.createTime)}
            {/* {' Singapore'} */}
          </Text>
        </View>
      </View>
      {/* <Divider /> */}
      <View style={{ flexDirection: 'row' }}>
        {data.places.map(place => (
          <Text
            key={place}
            style={{
              fontWeight: 'bold',
            }}>{`#${place}`}</Text>
        ))}
      </View>
      <Text style={styles.caption} onPress={handleNavigate}>
        {TextAbstract(data.caption, 90)}
      </Text>
      <SlideShow arrowSize={0} dataSource={data.images} />
      <Divider />
      <View style={styles.footer}>
        {liked ? (
          <Icon
            name="heart"
            size={SCALE(17)}
            color="#ff0062"
            style={{ marginRight: SCALE(10) }}
            onPress={() => {
              setLikes(likes - 1);
              setLiked(false);
              if (handleLike) {
                handleLike();
              }
            }}
          />
        ) : (
          <Icon
            name="heart-o"
            size={SCALE(17)}
            color="#000"
            style={{ marginRight: SCALE(10) }}
            onPress={() => {
              setLikes(likes + 1);
              setLiked(true);
              if (handleLike) {
                handleLike();
              }
            }}
          />
        )}
        <Icon
          name="comment-o"
          size={SCALE(17)}
          color="#000"
          style={{ marginRight: SCALE(10) }}
          onPress={handleNavigate}
        />
        <Text>
          {likes} {likes > 1 ? 'likes' : 'like'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  avatar: {
    marginBottom: SCALE(5),
    marginRight: SCALE(10),
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dname: {
    fontSize: SCALE(20),
  },
  time: {
    fontSize: SCALE(10),
  },
  caption: {
    fontSize: SCALE(13),
    marginBottom: SCALE(10),
  },
  footer: {
    flexDirection: 'row',
  },
});

export default Post;
