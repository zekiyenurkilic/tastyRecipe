import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../Colors';
import Fonts from '../../Fonts';
import {connect} from 'react-redux';
import {setFavorite, setProductDetail} from '../../../action/datas';

const HomeScreen = ({
  datas: {headers, products},
  setFavorite,
  navigation,
  setProductDetail,
}) => {
  const w = Dimensions.get('window').width;
  const [headerIndex, setHeaderIndex] = React.useState(-1);
  const [menuIndex, setMenuIndex] = React.useState(2);

  const leftSelectedItemColor = (index) => {
    let color = Colors.leftMenuItemsColor;
    let font = Fonts.Poppins.regular;

    if (index === menuIndex) {
      color = Colors.scrollIconsColor;
      font = Fonts.Poppins.semiBold;
    }

    return {color: color, fontFamily: font};
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={styles.leftMenu}>
          <View style={{flex: 1}}>
            <MaterialCommunityIcons
              name={'apps'}
              size={25}
              style={styles.leftMenuTopIcons}
            />
            <MaterialCommunityIcons
              name={'magnify'}
              size={25}
              style={{color: Colors.leftMenuItemsColor}}
            />
          </View>
          <View style={styles.leftMenuOptions}>
            <View>
              <Text
                style={[styles.leftMenuOptionsText, leftSelectedItemColor(1)]}
                onPress={() => setMenuIndex(1)}>
                Bakery
              </Text>
            </View>
            <View>
              <Text
                style={[styles.leftMenuOptionsText, leftSelectedItemColor(2)]}
                onPress={() => setMenuIndex(2)}>
                Food
              </Text>
            </View>
            <View>
              <Text
                style={[styles.leftMenuOptionsText, leftSelectedItemColor(3)]}
                onPress={() => setMenuIndex(3)}>
                Drinks
              </Text>
            </View>
          </View>
          <View style={styles.leftMenuBottom}>
            <MaterialCommunityIcons
              name={'cog'}
              size={25}
              style={{color: Colors.leftMenuItemsColor}}
            />
          </View>
        </View>
        <View style={{...styles.rightMenu, width: w - 70}}>
          <View>
            <Text style={styles.rightMenuTopText}>Simple way to find</Text>
            <Text
              style={{
                ...styles.rightMenuTopText,
                color: Colors.rightMenuTopTextColor,
              }}>
              tasty recipes
            </Text>
          </View>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginTop: 30}}>
              {headers.map((header, index) => (
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.scrollViewItems}
                  onPress={() => setHeaderIndex(index)}>
                  <View
                    style={{
                      ...styles.scrollViewCircle,
                      backgroundColor:
                        index === headerIndex
                          ? Colors.scrollIconsColor
                          : Colors.scrollIconsCircleColor,
                    }}>
                    <MaterialCommunityIcons
                      name={header.icon}
                      size={20}
                      color={
                        index === headerIndex
                          ? Colors.scrollIconsCircleColor
                          : Colors.scrollIconsColor
                      }
                    />
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text
                      style={{
                        fontFamily: Fonts.Poppins.regular,
                        color: Colors.leftMenuItemsColor,
                      }}>
                      {header.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {products
                .filter((p) => p.category === menuIndex)
                .map((product) => (
                  <TouchableOpacity
                    style={styles.bigScrollViewItem}
                    onPress={async () => {
                      await setProductDetail(product);
                      navigation.push('DetailScreen');
                    }}>
                    <Image
                      source={{uri: product.image}}
                      style={{
                        width: 130,
                        height: 130,
                        alignSelf: 'center',
                      }}
                    />
                    <View
                      style={{
                        marginTop: 20,
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontFamily: Fonts.Poppins.semiBold,
                        }}
                        numberOfLines={1}>
                        {product.name}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{
                          fontSize: 12,
                          fontFamily: Fonts.Poppins.regular,
                          color: Colors.leftMenuItemsColor,
                        }}>
                        {product.description}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginTop: 30,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontFamily: Fonts.Poppins.semiBold,
                          fontSize: 16,
                        }}>
                        {product.calorie}
                      </Text>
                      <TouchableOpacity
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 50,
                          backgroundColor: 'white',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        onPress={() => setFavorite(product)}>
                        <MaterialCommunityIcons
                          name={product.isFav ? 'bookmark' : 'bookmark-outline'}
                          size={20}
                          color={Colors.scrollIconsColor}
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  leftMenu: {
    backgroundColor: Colors.leftMenuBackground,
    width: 70,
    alignItems: 'center',
  },
  rightMenu: {
    padding: 30,
  },
  leftMenuTopIcons: {
    marginTop: 30,
    marginBottom: 30,
    color: Colors.leftMenuItemsColor,
  },
  leftMenuOptions: {
    justifyContent: 'space-around',
    flex: 3,
    paddingTop: 20,
  },
  leftMenuBottom: {
    flex: 1,
    justifyContent: 'center',
  },
  leftMenuOptionsText: {
    transform: [{rotate: '-90deg'}],
    fontSize: 16,
    color: Colors.leftMenuItemsColor,
    fontFamily: Fonts.Poppins.regular,
    position: 'relative',
  },
  rightMenuTopText: {
    fontSize: 20,
    fontFamily: Fonts.Poppins.semiBold,
  },
  scrollViewItems: {
    width: 80,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  scrollViewCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.scrollIconsCircleColor,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  bigScrollViewItem: {
    backgroundColor: Colors.leftMenuBackground,
    borderRadius: 20,
    marginTop: 30,
    width: 200,
    padding: 20,
    position: 'relative',
    marginRight: 20,
  },
});
const mapStateToProps = (state) => ({
  datas: state.datas,
});
export default connect(mapStateToProps, {setFavorite, setProductDetail})(
  HomeScreen,
);
