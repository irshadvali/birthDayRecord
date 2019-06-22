/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList} from 'react-native';
import DataResult from "./src/utils/DataResult"; 
import DataItem from "./src/components/DataItem";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import _ from 'lodash'
export default class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			
			dataList:DataResult.data
		};

  }
  onSelect(index, value){
    if(index===0){
      var chars = this.state.dataList;

      chars = _.orderBy(chars, ['name'],['asc']); // Use Lodash to sort array by 'name'

       this.setState({dataList: chars})
      this.setState({
        text: `Name: ${index} , value: ${value}`,
 
      })
   
    }
    else{
      var chars = this.state.dataList;

      chars = _.orderBy(chars, ['datedob'],['asc']); // Use Lodash to sort array by 'name'

       this.setState({dataList: chars})

    }

  }
  componentDidMount(){
    console.disableYellowBox = true;
  }


  renderListView = (index,item) => {
    console.log("dataList",item,index)
		return (
			<View>
				<DataItem
          number={index}
					name={item.name}
					dob={item.datedob}					
				/>
			</View>
		);
	};
  render() {
    return (
      <View style={styles.container}>
      <View style={{height:100, width:"100%",backgroundColor:"grey"}}>
      <RadioGroup
      style={{flex: 1, flexDirection: 'row',
      alignItems:"center",
      justifyContent:"center",
      alignContent: 'center',}}
        onSelect = {(index, value) => this.onSelect(index, value)}
      >
        <RadioButton >
          <Text>Name</Text>
        </RadioButton>
 
        <RadioButton >
          <Text>Date</Text>
        </RadioButton>

      </RadioGroup>
      
     
      </View>
        <FlatList
					contentContainerStyle={{ padding: 5 }}
          data={this.state.dataList}
          keyExtractor={(item, index) => item}
					renderItem={({index, item }) => this.renderListView(index,item)}
				/>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
