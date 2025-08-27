import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome6';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';


const {width, height} = Dimensions.get('window');

// Responsive scaling functions
const scale = size => (width / 390) * size;
const verticalScale = size => (height / 844) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const AllVendor = () => {

const navigation= useNavigation()

const datavendor=[
    {
        id:1,
        profile:{uri:"https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"},
        name:"Sunny Sharma",
        pincode:"110086",
        addressLine1: "12, Main Market,",
        addressLine2: "New Delhi, India",
        mobile:"+91 9878005440"
    },
    {
        id:2,
        profile:{uri:"https://th.bing.com/th/id/OIP.2EShyfI2Bd3IwXWanmxrgwHaHa?cb=iwp1&pid=ImgDet&w=203&h=203&c=7&dpr=1.3"},
        name:"Sunny Sharma",
        pincode:"110086",
        addressLine1: "34, Cross Lane,",
      addressLine2: "Mumbai, India",
        mobile:"+91 9878005440"
    },
    {
        id:3,
        profile:{uri:"https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"},
        name:"Sunny Sharma",
        pincode:"110086",
        addressLine1: "12, Main Market,",
        addressLine2: "New Delhi, India",
        mobile:"+91 9878005440"
    },
    {
        id:4,
        profile:{uri:"https://th.bing.com/th/id/OIP.2EShyfI2Bd3IwXWanmxrgwHaHa?cb=iwp1&pid=ImgDet&w=203&h=203&c=7&dpr=1.3"},
        name:"Sunny Sharma",
        pincode:"110086",
        addressLine1: "34, Cross Lane,",
      addressLine2: "Mumbai, India",
        mobile:"+91 9878005440"
    },
    {
        id:5,
        profile:{uri:"https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"},
        name:"Sunny Sharma",
        pincode:"110086",
        addressLine1: "12, Main Market,",
        addressLine2: "New Delhi, India",
        mobile:"+91 9878005440"
    },
    {
        id:6,
        profile:{uri:"https://th.bing.com/th/id/OIP.2EShyfI2Bd3IwXWanmxrgwHaHa?cb=iwp1&pid=ImgDet&w=203&h=203&c=7&dpr=1.3"},
        name:"Sunny Sharma",
        pincode:"110086",
        addressLine1: "34, Cross Lane,",
      addressLine2: "Mumbai, India",
        mobile:"+91 9878005440"
    },
    {
        id:7,
        profile:{uri:"https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"},
        name:"Sunny Sharma",
        pincode:"110086",
        addressLine1: "12, Main Market,",
        addressLine2: "New Delhi, India",
        mobile:"+91 9878005440"
    },
    {
        id:8,
        profile:{uri:"https://th.bing.com/th/id/OIP.2EShyfI2Bd3IwXWanmxrgwHaHa?cb=iwp1&pid=ImgDet&w=203&h=203&c=7&dpr=1.3"},
        name:"Sunny Sharma",
        pincode:"110086",
        addressLine1: "34, Cross Lane,",
      addressLine2: "Mumbai, India",
        mobile:"+91 9878005440"
    },
    {
        id:9,
        profile:{uri:"https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"},
        name:"Sunny Sharma",
        pincode:"110086",
        addressLine1: "12, Main Market,",
        addressLine2: "New Delhi, India",
        mobile:"+91 9878005440"
    },
    {
        id:10,
        profile:{uri:"https://th.bing.com/th/id/OIP.2EShyfI2Bd3IwXWanmxrgwHaHa?cb=iwp1&pid=ImgDet&w=203&h=203&c=7&dpr=1.3"},
        name:"Sunny Sharma",
        pincode:"110086",
        addressLine1: "34, Cross Lane,",
      addressLine2: "Mumbai, India",
        mobile:"+91 9878005440"
    },
    {
        id:11,
        profile:{uri:"https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"},
        name:"Sunny Sharma",
        pincode:"110086",
        addressLine1: "12, Main Market,",
        addressLine2: "New Delhi, India",
        mobile:"+91 9878005440"
    },
    {
        id:12,
        profile:{uri:"https://th.bing.com/th/id/OIP.2EShyfI2Bd3IwXWanmxrgwHaHa?cb=iwp1&pid=ImgDet&w=203&h=203&c=7&dpr=1.3"},
        name:"Sunny Sharma",
        pincode:"110086",
        addressLine1: "34, Cross Lane,",
      addressLine2: "Mumbai, India",
        mobile:"+91 9878005440"
    },
]

const renderItemvendor = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.profile} style={styles.profileImage} />
      <Text style={styles.nameText}>{item.name}</Text>
      <View style={styles.craftContainer}>
        <Icon4 name="store-mall-directory" size={moderateScale(16)} color="#00A572" />
        <Text style={styles.craftText}>Craft shop</Text>
      </View>
      <View style={styles.space}>
        <View style={styles.infoContainer}>
          <Icon2 name="location-dot" size={moderateScale(15)} color="red" />
          <View style={styles.addressTextContainer}>
            <Text style={styles.AddressText}>{item.addressLine1}</Text>
            <Text style={styles.AddressText}>{item.addressLine2}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Icon3 name="call" size={moderateScale(15)} color="#00A572" />
          <Text style={styles.infoText}>{item.mobile}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate("Vendorcollection")} >
        <Text style={styles.detailsButtonText}>View Details</Text>
        <Icon name="arrow-right" size={moderateScale(14)} color="grey" style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <View style={styles.topview}>
        <View style={styles.rameshrawview}>
          <TouchableOpacity>
            <Icon name="menu" size={moderateScale(22)} color="black" />
          </TouchableOpacity>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/R.d7c3742514b9d96ea3b03b5810617028?rik=7UP8sBpU5d9j1w&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fa%2f2%2fd%2f852140-full-size-justin-bieber-hd-2018-wallpapers-1804x2500.jpg&ehk=ZBFVI8hT8yVY%2fDxW9%2bGSvhcT%2bDOWjhfLm6iwWW%2bFLcs%3d&risl=&pid=ImgRaw&r=0',
            }}
            style={styles.Rameshimage}
          />
          <Text style={styles.Rameshtext}>Ramesh</Text>
        </View>
        <View style={styles.bellsearchview}>
          <TouchableOpacity>
            <Icon1 name="bell-o" size={moderateScale(22)} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <Icon name="search" size={moderateScale(22)} color="black" />
          </TouchableOpacity>
        </View>
      </View> */}
      <View style={styles.Collectorview}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon2 name="angle-left" size={moderateScale(24)} color="black" />
        </TouchableOpacity>
        <Text style={styles.Collectortext}>Vendors</Text>
      </View>
       <FlatList
              numColumns={2}
              data={datavendor}
              renderItem={renderItemvendor}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.flatListContent}
              columnWrapperStyle={styles.columnWrapper}
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
    marginBottom:verticalScale(15)
  },
  topview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rameshrawview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Rameshimage: {
    width: moderateScale(36),
    height: moderateScale(36),
    borderRadius: moderateScale(40),
    marginLeft: moderateScale(15),
  },
  Rameshtext: {
    fontWeight: '500',
    marginLeft: moderateScale(5),
    fontSize: moderateScale(15.5),
  },
  bellsearchview: {
    flexDirection: 'row',
    gap: moderateScale(17),
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
  itemContainer: {
    width: width * 0.42,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: moderateScale(20),
    padding: moderateScale(15),
    marginVertical: verticalScale(15),
    paddingHorizontal: moderateScale(25),
  },
  profileImage: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
    alignSelf: 'center',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: moderateScale(14.5),
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(6),
    marginTop: verticalScale(2),
    
  },
  craftContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(6),
    marginTop: verticalScale(2),
     marginLeft:(15)
  },
  infoText: {
    color: 'gray',
    fontSize: moderateScale(12.5),
    fontWeight: "500",
  },
  AddressText: {
    color: 'gray',
    fontSize: moderateScale(12.5),
    fontWeight: "500",
  },
  craftText: {
    color: "#00A572",
    fontSize: moderateScale(12),
    fontWeight: "500",
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(8),
    alignSelf: 'center',
  },
  detailsButtonText: {
    color: 'grey',
    fontSize: moderateScale(13),
  },
  arrowIcon: {
    marginLeft: moderateScale(5),
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default AllVendor;
