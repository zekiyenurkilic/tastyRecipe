import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../Colors';
import Fonts from '../../Fonts';
import {connect} from 'react-redux';
import {setFavoriteDetail} from '../../../action/datas';

const DetailScreen = ({datas: {product}, setFavoriteDetail, navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topView}>
        <Image
          source={{uri: product.image}}
          style={{height: 200, width: 200}}
        />
        <MaterialCommunityIcons
          onPress={() => navigation.goBack()}
          name={'arrow-left'}
          size={30}
          color={Colors.leftMenuItemsColor}
          style={{top: 20, left: 15, position: 'absolute'}}
        />
        <View style={styles.topViewCircleButton}>
          <MaterialCommunityIcons
            name={'share-variant'}
            size={20}
            color={Colors.rightMenuTopTextColor}
          />
        </View>
        <TouchableOpacity
          style={{...styles.topViewCircleButton, top: 170}}
          activeOpacity={1}
          onPress={() => {
            setFavoriteDetail(product);
          }}>
          <MaterialCommunityIcons
            name={product.isFav ? 'bookmark' : 'bookmark-outline'}
            size={20}
            color={Colors.rightMenuTopTextColor}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 20,
          borderTopLeftRadius: 40,
          backgroundColor: 'white',
          borderTopRightRadius: 40,
        }}>
        <View style={{marginBottom: 20}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: Fonts.Poppins.semiBold,
              paddingTop: 10,
            }}>
            {product.name}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: Fonts.Poppins.regular,
              color: Colors.leftMenuItemsColor,
            }}>
            {product.description}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.Poppins.semiBold,
              color: Colors.leftMenuItemsColor,
            }}>
            Nutrition Facts
          </Text>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            {product.nutritions.map((nutrition) => (
              <View style={styles.nutritionElips}>
                <View style={styles.nutritionElipsInCircle}>
                  <Text
                    style={{fontFamily: Fonts.Poppins.semiBold, fontSize: 16}}>
                    {nutrition.calorie}
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins.semiBold,
                    fontSize: 14,
                    marginTop: 10,
                  }}>
                  {nutrition.name}
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins.regular,
                    fontSize: 12,
                    marginTop: 5,
                    color: Colors.leftMenuItemsColor,
                  }}>
                  {nutrition.unit}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={{marginTop: 10, paddingBottom: 20}}>
          <Text
            style={{
              fontFamily: Fonts.Poppins.semiBold,
              color: Colors.leftMenuItemsColor,
              fontSize: 16,
            }}>
            Ingredients
          </Text>
          {product.ingredients.map((ingredient) => (
            <View style={styles.ingredientView}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={{uri: ingredient.image}}
                  style={{width: 50, height: 50}}
                />
                <Text style={{fontFamily: Fonts.Poppins.regular, fontSize: 14}}>
                  {ingredient.name}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins.regular,
                    fontSize: 14,
                  }}>
                  {ingredient.quantity}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.leftMenuBackground,
  },
  topView: {
    backgroundColor: Colors.leftMenuBackground,
    height: 300,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topViewCircleButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    top: 100,
    left: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.leftMenuBackground,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  nutritionElips: {
    backgroundColor: Colors.leftMenuBackground,
    height: 140,
    width: 70,
    borderRadius: 40,
    alignItems: 'center',
  },
  nutritionElipsInCircle: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ingredientView: {
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
  },
});
const mapStateToProps = (state) => ({
  datas: state.datas,
});
export default connect(mapStateToProps, {setFavoriteDetail})(DetailScreen);
