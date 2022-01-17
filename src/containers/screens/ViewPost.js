/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Divider, Input } from 'react-native-elements';
import SlideShow from '../../components/SlideShow';
import AvatarWithBagde from '../../components/AvartarWithBadge';
import * as Constant from '../../constants';
import { SCALE } from '../../constants';
import { MsToPeriod } from '../../utils/time';
import Comment from '../../components/Comment';

function LineWithText(props) {
  const { text } = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: SCALE(10),
        marginRight: SCALE(10),
      }}>
      <View style={{ flex: 1, height: 1, backgroundColor: '#CCCCCC' }} />
      <View>
        <Text
          style={{
            width: 100,
            textAlign: 'center',
            fontSize: SCALE(11),
            color: '#CCCCCC',
          }}>
          {text}
        </Text>
      </View>
      <View style={{ flex: 1, height: 1, backgroundColor: '#CCCCCC' }} />
    </View>
  );
}

class ViewPost extends React.Component {
  constructor(props) {
    super(props);

    const { post } = this.props.route.params;

    this.state = {
      liked: post.liked,
      likes: post.likes,
      newCmt: '',
      comments: post.comments,
    };
    this.data = {
      post: post,
    };
  }

  handleLike = () => {
    console.log('like');
  };

  handleComment = () => {
    const { newCmt, comments } = this.state;

    if (newCmt) {
      this.setState({
        comments: [
          {
            // current user here
            id: 5,
            author: {
              userID: 3,
              dname: 'Hermione Granger',
              avatar:
                'https://bookriot.com/wp-content/uploads/2019/07/hermione-granger-feature-640x340-1280x720.jpg',
            },
            content: newCmt,
            liked: false,
            likes: 0,
            createTime: Date.now(),
          },
          ...comments,
        ],
        newCmt: '',
      });
    }
  };

  render() {
    const { post } = this.data;
    const { liked, likes, newCmt, comments } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.title}>
            <FontAwesome
              name={'angle-left'}
              style={{
                marginLeft: SCALE(5),
                padding: SCALE(5),
              }}
              size={SCALE(30)}
              color={'#000'}
              onPress={() => {
                const { navigation } = this.props;
                if (navigation) {
                  navigation.pop();
                }
              }}
            />
            <AvatarWithBagde
              style={styles.avatar}
              avatar={post.author.avatar}
            />
            <View>
              <Text style={styles.dname}>{post.author.dname}</Text>
              <Text>
                {MsToPeriod(post.createTime) + ' '}
                {/* {<MaterialIcons name={'public'} />} */}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: SCALE(5) }}>
            {post.places.map(place => (
              <Text
                key={place}
                style={{
                  fontWeight: 'bold',
                }}>{`#${place}`}</Text>
            ))}
          </View>
          <Text style={styles.caption}>{post.caption}</Text>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: SCALE(10),
              marginLeft: SCALE(5),
            }}>
            {post.tags.map(tag => (
              <Text
                key={tag}
                style={{
                  fontWeight: 'bold',
                }}>{`#${tag}`}</Text>
            ))}
          </View>
          <View>
            <SlideShow arrowSize={0} dataSource={post.images} />
          </View>
          <View style={styles.footer}>
            {liked ? (
              <FontAwesome
                name="heart"
                size={SCALE(17)}
                color="#ff0062"
                style={{ marginRight: SCALE(10) }}
                onPress={() => {
                  this.setState({
                    likes: likes - 1,
                    liked: !liked,
                  });
                  this.handleLike();
                }}
              />
            ) : (
              <FontAwesome
                name="heart-o"
                size={SCALE(17)}
                color="#000"
                style={{ marginRight: SCALE(10) }}
                onPress={() => {
                  this.setState({
                    likes: likes + 1,
                    liked: !liked,
                  });
                  this.handleLike();
                }}
              />
            )}
            <FontAwesome
              name="comment-o"
              size={SCALE(17)}
              color="#000"
              style={{ marginRight: SCALE(10) }}
            />
            <Text>
              {likes} {likes > 1 ? 'likes' : 'like'}
            </Text>
          </View>
          <Divider />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              height: SCALE(35),
              marginTop: SCALE(2),
            }}>
            <AvatarWithBagde
              style={{
                marginTop: SCALE(2),
                marginLeft: SCALE(6),
              }}
              avatar={post.author.avatar}
              size={'small'}
            />
            <Input
              containerStyle={{
                width: '92%',
              }}
              inputContainerStyle={{
                borderWidth: 1,
                borderRadius: SCALE(50),
                marginTop: SCALE(3),
                height: '80%',
              }}
              inputStyle={{
                fontSize: SCALE(11),
                marginLeft: SCALE(5),
              }}
              placeholder={'Comment...'}
              value={newCmt}
              rightIcon={
                <FontAwesome
                  name="send"
                  color="#000"
                  size={SCALE(11)}
                  style={{ marginRight: SCALE(7) }}
                  onPress={this.handleComment}
                />
              }
              onChangeText={text => {
                this.setState({ newCmt: text });
              }}
            />
          </View>
          <LineWithText text={`${comments.length} comments`} />
          {comments.map(cmt => (
            <View key={cmt.id}>
              <Comment data={cmt} />
            </View>
          ))}
          {/* <SafeAreaView style={{ flex: 1 }}>
            <FlatList
              data={comments}
              keyExtractor={cmt => cmt.id}
              renderItem={cmt => {
                <Comment data={cmt} />;
              }}
            />
          </SafeAreaView> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constant.MAIN_BACKGROUND_COLOR,
  },
  avatar: {
    padding: SCALE(10),
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SCALE(20),
  },
  dname: {
    fontSize: SCALE(20),
  },
  time: {
    fontSize: SCALE(10),
  },
  caption: {
    fontSize: SCALE(13),
    padding: SCALE(5),
  },
  footer: {
    flexDirection: 'row',
    padding: SCALE(5),
  },
});

export default ViewPost;
