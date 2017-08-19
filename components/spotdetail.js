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
        return
        <View style= {styles.SpotDetailContainer}>

          <View style= {styles.HeaderContainer}>
            <View style= {styles.SpotDetailHeader}>
              <View style= {styles.UtilityNav}>
                //BackIcon here
              </View>
              <View style= {styles.HeaderTitle}>
                <Text styles= {styles.HeaderTitleText}>Spot details</Text>
              </View>
            </View>
          </View>

          <View style= {styles.MapsContainer}>
            //Maps component here
          </View>

          <View style= {styles.SpotDetailInfo}>
            <View style= {styles.SpotDetailInfoContainer}>
            </View>
            //SpotTitle Rating Distance components here
          </View>

          <View style= {styles.SpotTypes}>
            //Types component here
          </View>

          <View style= {styles.SpotImageContainer}>
            //SpotImage component here
          </View>
        </View>
    }
}

const styles = StyleSheet.create({
  SpotDetailContainer: {
    flex: 1
  }

});
