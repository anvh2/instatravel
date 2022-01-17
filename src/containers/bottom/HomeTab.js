import React from 'react';
import { ScrollView, View, StyleSheet, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import * as Constant from '../../constants';
import Post from '../../components/Post';
// import TabHeader from '../../components/TabHeader';
import { posts } from '../../assets/json';
import { Divider } from 'react-native-elements';

class HomeTab extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLike = () => {
    console.log('like');
  };

  handleComment = () => {
    console.log('comment');
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <TabHeader /> */}
        <ScrollView
          refreshControl={<RefreshControl />}
          style={styles.scrollview}
          showsVerticalScrollIndicator={false}>
          {posts.map(post => (
            <View key={post.postID}>
              <Post
                data={post}
                navigation={this.props.navigation}
                handleLike={this.handleLike}
              />
              <Divider />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constant.MAIN_BACKGROUND_COLOR,
    alignItems: 'center',
  },
  scrollview: {
    marginTop: 10,
    marginBottom: 10,
  },
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeTab);
