//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from "prop-types";
// create a component
class DataItem extends Component {
    constructor(props) {
		super(props);
		this.state = {
			
			bgColor:"#ffffff"
		};

  }
    componentDidMount(){
        if(this.props.number%2===0){
            this.setState={
                 bgColor:"#ffffff"
                 }
        }
        else{
            this.setState={
                bgColor:"#87ceeb"
                }  
        }
    }
 render() {

    let bg="#ffffff"
    if(this.props.number%2===0){
        bg="#ffffff"   
    }
    else{
        bg="#87ceeb" 
    }
     
   return (
     <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row',
      backgroundColor:bg,
      alignItems:"center",
      justifyContent:"center",
      alignContent: 'center',
      }}>
        <View style={{width: "50%", height: 50,alignItems:"center",justifyContent:"center"}} >
        <Text>{this.props.name}</Text>
        </View>
        <View style={{width: "50%", height: 50,alignItems:"center",justifyContent:"center"}} > 
        <Text>{this.props.dob}</Text>
        </View> 
      </View>
     </View>
   );
 }
}

// define your styles
const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#2c3e50',
 },
});

//make this component available to the app
export default DataItem;
DataItem.propTpes = {
    name:PropTypes.string,
    dob:PropTypes.string,
    number:PropTypes.number

  };
  DataItem.defaultProps = {};