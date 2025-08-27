import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome6';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

// Responsive scaling functions
const scale = size => (width / 390) * size;
const verticalScale = size => (height / 844) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const Collection = () => {
  const navigation = useNavigation();

  const data1 = [
    {
      id: 1,
      toptitle: 'Card board',
      subtitle: '02 feb 2025',
      weight: '5 kg',
    },
    {
      id: 2,
      toptitle: 'Card board',
      subtitle: '01 feb 2025',
      weight: '5 kg',
    },
    {
      id: 3,
      toptitle: 'Card board',
      subtitle: '01 feb 2025',
      weight: '5 kg',
    },
    {
      id: 4,
      toptitle: 'Card board',
      subtitle: '01 feb 2025',
      weight: '5 kg',
    },
    {
      id: 5,
      toptitle: 'Card board',
      subtitle: '01 feb 2025',
      weight: '5 kg',
    },
    {
      id: 6,
      toptitle: 'Card board',
      subtitle: '01 feb 2025',
      weight: '5 kg',
    },
    {
      id: 7,
      toptitle: 'Card board',
      subtitle: '01 feb 2025',
      weight: '5 kg',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.flatListItem}>
      <Image
        source={require('../images/right-up.png')} // Make sure to add the image to your project
        style={styles.listImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.toptitle}>{item.toptitle}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
      <Text style={styles.weightText}>{item.weight}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.Collectorview}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon2 name="angle-left" size={moderateScale(24)} color="black" />
        </TouchableOpacity>
        <Text style={styles.Collectortext}>Collectors</Text>
      </View>

      <View style={styles.subtopview}>
        <View style={styles.collectionview}>
          <Image
            source={{
              uri: 'https://img.favpng.com/25/20/17/recycling-symbol-reuse-vector-graphics-logo-png-favpng-zUZ1USJ4wrL0jrhZ0uDnKPTr5.jpg',
            }}
            style={styles.recycleImage}
          />
          <Text style={styles.totalcollectiontext}>Total Collection</Text>
        </View>
        <Text style={styles.twohundredtext}>200 kg</Text>
      </View>

      <View style={styles.rowview}>
        <TouchableOpacity style={styles.selecttouchable} >
        <View style={styles.infoContainer}>
         <View style={styles.addressTextContainer}>
            <Text style={styles.AddressText}>Select Pincode</Text>
           </View>
           <Icon1 name="angle-down" size={moderateScale(20)} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selecttouchable} >
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Select Date</Text>
          <Icon1 name="angle-down" size={moderateScale(20)} color="black" />
        </View>
        </TouchableOpacity>
       
      </View>

      <View>
        <Text style={styles.pasttext}>Past Collections</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data1}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
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
  Collectortext: {
    fontWeight: '500',
    fontSize: moderateScale(18),
    marginLeft: moderateScale(15),
  },
  Collectorview: {
    flexDirection: 'row',
    marginTop: moderateScale(0),
    marginBottom: 5,
  },
 infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8),
    marginTop: verticalScale(2),
    padding:moderateScale(5),
    paddingHorizontal:moderateScale(10)
  },
  rowview: {flexDirection: 'row', gap: 25, marginTop: 15, alignSelf: 'center'},
  collectionview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recycleImage: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  totalcollectiontext: {
    fontWeight: '500',
    fontSize: moderateScale(18),
    marginLeft: moderateScale(10),
  },
  twohundredtext: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    marginTop: verticalScale(5),
    textAlign: 'center',
  },
  subtopview: {
    backgroundColor: 'white',
    borderRadius: moderateScale(20),
    marginTop: verticalScale(25),
    padding: moderateScale(10),
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginHorizontal: moderateScale(90),
  },
  
  pasttext: {
    fontWeight: 'bold',
    fontSize: 17.5,
    marginTop: moderateScale(30),
    marginBottom: moderateScale(5),
  },

  flatListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    padding: moderateScale(5),
    marginTop: moderateScale(10),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
  },
  listImage: {
    width: moderateScale(50),
    height: moderateScale(40),
    borderRadius: moderateScale(8),
  },
  textContainer: {
    marginLeft: moderateScale(15),
    flex: 1,
  },
  toptitle: {
    fontWeight: '600',
    fontSize: moderateScale(16),
  },
  subtitle: {
    color: 'gray',
    fontSize: moderateScale(14),
    marginTop: verticalScale(2),
  },
  weightText: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    marginLeft: 'auto',
    marginRight: moderateScale(10),
  },
  flatListContent: {
    paddingBottom: verticalScale(10),
  },
  AddressText: {
    color: 'black',
    fontSize: moderateScale(13),
    fontWeight: '500',
  },
  infoText: {
    color: 'black',
    fontSize: moderateScale(13),
    fontWeight: '500',
  },
  selecttouchable:{backgroundColor:"#D6ECF3",borderRadius:10}
});

export default Collection;
