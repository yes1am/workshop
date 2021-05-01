/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  RefreshControl,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Item = ({item}) => {
  return (
    <View>
      <Text style={styles.itemText}>{item.id}</Text>
    </View>
  );
};

const defaultList = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
  {
    id: '4',
  },
  {
    id: '5',
  },
  {
    id: '6',
  },
  {
    id: '7',
  },
  {
    id: '8',
  },
  {
    id: '9',
  },
  {
    id: '10',
  },
  {
    id: '11',
  },
  {
    id: '12',
  },
  {
    id: '13',
  },
  {
    id: '14',
  },
  {
    id: '15',
  },
  {
    id: '16',
  },
  {
    id: '17',
  },
  {
    id: '18',
  },
  {
    id: '19',
  },
  {
    id: '20',
  },
];

async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [lists, setLists] = useState(defaultList.slice(0, 10));
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  async function onEndReached({distanceFromEnd}) {
    console.log('onEndReached');
    if (!isFetchingMore) {
      console.log('isFetchingMore');
      setIsFetchingMore(true);
      await sleep();
      setLists(defaultList);
      setIsFetchingMore(false);
    }
  }

  // 刷新数据
  async function refresh() {
    if (!isRefreshing) {
      setIsRefreshing(true);
      await sleep();
      setLists(defaultList.slice(0, 10));
      setIsRefreshing(false);
    }
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* 状态栏 */}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <FlatList
          refreshControl={
            <RefreshControl
              // false => 则隐藏 loading
              refreshing={isRefreshing}
              onRefresh={refresh}
            />
          }
          onEndReached={onEndReached}
          onEndReachedThreshold={0.0001}
          keyExtractor={(item, index) => item?.id}
          data={lists}
          renderItem={({item}) => <Item item={item} />}
          ListFooterComponent={
            <View style={styles.loadingPlaceholder}>
              {isFetchingMore ? <Text>LOADING ...</Text> : null}
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemText: {
    color: 'red',
    fontSize: 20,
    height: 120,
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
    textAlign: 'center',
    lineHeight: 120,
  },
  loadingPlaceholder: {
    height: 34,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
