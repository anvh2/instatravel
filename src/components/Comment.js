/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SCALE } from '../constants';
import { MsToPeriod } from '../utils/time';
import AvatarWithBagde from './AvartarWithBadge';

function Comment(props) {
  const { data, handleLike } = props;
  const [liked, setLiked] = useState(data.liked);
  const [likes, setLikes] = useState(data.likes);

  return (
    <View style={styles.container}>
      <View style={styles.comment}>
        <View style={styles.main}>
          <AvatarWithBagde
            style={styles.avatar}
            avatar={data.author.avatar}
            size={'small'}
          />
          <View>
            <Text style={styles.dname}>
              {data.author.dname}
              <Text
                style={{
                  fontWeight: 'normal',
                  fontSize: SCALE(10),
                  color: '#CCCCCC',
                }}>
                {'   ' + MsToPeriod(data.createTime)}
              </Text>
            </Text>
            <Text style={styles.content}>{data.content}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ marginRight: SCALE(5) }}>
            {likes > 0 ? `${likes}` : '  '}
          </Text>
          {liked ? (
            <Icon
              name="heart"
              size={SCALE(11)}
              color="#ff0062"
              style={styles.like}
              onPress={() => {
                setLiked(false);
                setLikes(likes - 1);
                if (handleLike) {
                  handleLike();
                }
              }}
            />
          ) : (
            <Icon
              name="heart-o"
              size={SCALE(11)}
              color="#000"
              style={styles.like}
              onPress={() => {
                setLiked(true);
                setLikes(likes + 1);
                if (handleLike) {
                  handleLike();
                }
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main: {
    flexDirection: 'row',
    width: '80%',
  },
  avatar: {
    padding: SCALE(5),
  },
  dname: {
    fontSize: SCALE(12),
    fontWeight: 'bold',
  },
  content: {
    fontSize: SCALE(11),
    marginLeft: SCALE(5),
  },
  like: {
    marginRight: SCALE(10),
  },
});

export default Comment;
