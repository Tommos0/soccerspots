import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image

} from 'react-native';


// import Types from '../app/components/types.js'

export default class SpotDetail extends React.Component {
    render() {
        return (
          <View style= {styles.SpotDetailContainer}>

          <View style= {styles.HeaderContainer}>
                <Text style= {styles.HeaderTitleText}>Spot detail</Text>
              <View style= {styles.NavIconContainer}>
                <Text>back</Text>
              </View>
          </View>

          <View style= {styles.MapsContainer}>
          <Text>map image</Text>
          </View>

          <View style= {styles.SpotDetailInfoContainer}>
            <Text>spot detail info</Text>
          </View>

          <View style= {styles.SpotTypes}>
          <Text>spot style types</Text>
          </View>

          <View style= {styles.SpotImageContainer}>
          <Text>spot image</Text>
          </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  SpotDetailContainer: {
    flex: 1,
  },
  HeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  HeaderTitleText: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 20
  },
  NavIconContainer: {
    position: 'absolute',
    height: '100%',
    width: '15%',
    flex: 1,
    left: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MapsContainer: {
    flex: 3,
  },
  SpotDetailInfoContainer: {
    flex: 2,
  },
  SpotTypes: {
    flex: 1,
  },
  SpotImageContainer: {
    flex: 3,
  }


});
