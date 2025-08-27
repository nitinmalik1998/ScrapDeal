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
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome6';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

// Responsive scaling functions
const scale = size => (width / 390) * size;
const verticalScale = size => (height / 844) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const Vendorcollection = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      profile: {
        uri: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
      },
      name: 'Sunny Sharma',
      pincode: '110086',
      mobile: '+91 9878005440',
    },
  ];

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

  const  renderItem=({item}) => (
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
  )

  return (
    <View style={styles.container}>
      <View style={styles.Collectorview}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon2 name="angle-left" size={moderateScale(24)} color="black" />
        </TouchableOpacity>
        <Text style={styles.Collectortext}>Vendors</Text>
      </View>
      <View style={styles.topview}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.2EShyfI2Bd3IwXWanmxrgwHaHa?cb=iwp1&pid=ImgDet&w=203&h=203&c=7&dpr=1.3',
          }}
          style={styles.photo}
        />
        <Text style={styles.sunnytext}>Sunny Sharma</Text>
        <View style={styles.craftContainer}>
          <Icon4
            name="store-mall-directory"
            size={moderateScale(16)}
            color="grey"
          />
          <Text style={styles.craftText}>Big Deals shop</Text>
        </View>
        <View style={styles.rowview}>
         <View style={styles.infoContainer}>
                   <Icon2 name="location-dot" size={moderateScale(15)} color="red" />
                   <View style={styles.addressTextContainer}>
                     <Text style={styles.AddressText}>12,Main Market, karol</Text>
                     <Text style={styles.AddressText}>Bagh, New Delhi</Text>
                   </View>
                 </View>
          <View style={styles.infoContainer}>
            <Icon3 name="call" size={moderateScale(15)} color="#00A572" />
            <Text style={styles.infoText}>+91 9878005440</Text>
          </View>
        </View>
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
  photo: {height: 80, width: 80, borderRadius: 50},
  topview: {alignItems: 'center', marginTop: moderateScale(20)},
  sunnytext: {fontWeight: '500', fontSize: 20, marginTop: moderateScale(5)},
  craftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(6),
    marginTop: verticalScale(2),
  },
  craftText: {
    color: 'grey',
    fontSize: moderateScale(12),
    fontWeight: '500',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(6),
    marginTop: verticalScale(2),
  },
  rowview: {flexDirection: 'row', gap: 25, marginTop: 15},
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
  deletetext: {fontWeight: 'bold', color: 'white'},
  deleteview: {
    flexDirection: 'row',
    backgroundColor: '#cc0000',
    alignSelf: 'center',
    padding: 9,
    borderRadius: 8,
    gap: 5,
    marginTop: 15,
  },
  pasttext: {fontWeight: 'bold', fontSize: 17.5, marginTop: moderateScale(30),marginBottom:moderateScale(5)},

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
    color: 'gray',
    fontSize: moderateScale(12.5),
    fontWeight: "500",
  },
  infoText: {
    color: 'gray',
    fontSize: moderateScale(12.5),
    fontWeight: '500',
  },
});

export default Vendorcollection;
