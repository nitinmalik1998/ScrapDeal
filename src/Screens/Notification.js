import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome6';

const {width, height} = Dimensions.get('window');

// Responsive scaling functions
const scale = size => (width / 390) * size;
const verticalScale = size => (height / 844) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const Notification = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      title: 'Collect the scrap',
      subtitle: '2:00 pm',
      Message1: 'Collect the scrap at 5 pm and get',
      Message2: 'back as soon as possible',
    },
    {
      id: 2,
      title: 'Collect the scrap',
      subtitle: '2:00 pm',
      Message1: 'Collect the scrap at 5 pm and get',
      Message2: 'back as soon as possible',
    },
    {
      id: 3,
      title: 'Collect the scrap',
      subtitle: '2:00 pm',
      Message1: 'Collect the scrap at 5 pm and get',
      Message2: 'back as soon as possible',
    },
    {
      id: 4,
      title: 'Collect the scrap',
      subtitle: '2:00 pm',
      Message1: 'Collect the scrap at 5 pm and get',
      Message2: 'back as soon as possible',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.fullview}>
      <View style={styles.titlesubtitleview}>
        <Text style={styles.titletext}>{item.title}</Text>
        <Text style={styles.subtitletext}>{item.subtitle}</Text>
      </View>
      <View style={styles.messageview}>
        <Text style={styles.messagetext}>{item.Message1}</Text>
        <Text style={styles.messagetext}>{item.Message2}</Text>
      </View>
    </View>
  );

  return (
    
    <View style={styles.container}>
      <View style={styles.Notificationview}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon2 name="angle-left" size={moderateScale(24)} color="black" />
        </TouchableOpacity>
        <Text style={styles.Notificationtext}>Notification</Text>
      </View>
      <FlatList
      style={{marginTop:20}}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
         ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(30),
    marginHorizontal: moderateScale(15),
    marginBottom: moderateScale(15),
  },
  Notificationtext: {
    fontWeight: '500',
    fontSize: moderateScale(19),
    marginLeft: moderateScale(15),
  },
  Notificationview: {
    flexDirection: 'row',
    marginTop: moderateScale(0),
    marginBottom:moderateScale(5),
  },
  titlesubtitleview: {flexDirection: 'row', justifyContent: 'space-between'},
  titletext: {fontSize: 14, fontWeight: '500'},
  subtitletext: {color: 'green',fontSize: 14,},
  messagetext: {color: 'grey'},
  messageview: {paddingVertical: moderateScale(5)},
  fullview: {backgroundColor: '#D6ECF3', padding:moderateScale(12), borderRadius:20},
  separator: {
    height:14
  },
});

export default Notification;
