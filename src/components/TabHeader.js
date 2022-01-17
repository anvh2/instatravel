import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

function TabHeader(props) {
  const { backable = false, navigation, centerText } = props;

  return (
    <>
      {backable ? (
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"
          containerStyle={styles.container}
          centerComponent={{
            text: centerText,
            style: { color: '#fff', fontSize: 20 },
          }}
          leftComponent={{
            icon: 'arrow-back',
            color: '#fff',
            onPress: () => {
              if (navigation) {
                navigation.pop();
              }
            },
          }}
        />
      ) : (
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"
          containerStyle={styles.container}
          centerComponent={{
            text: 'travel',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D46382',
    // backgroundColor: Constant.MAIN_BACKGROUND_COLOR,
    justifyContent: 'space-around',
  },
});

export default TabHeader;
