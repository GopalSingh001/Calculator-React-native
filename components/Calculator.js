import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Pressable, TouchableHighlight } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';



const Calculator = () => {
    const [result, SetResult] = useState('');


    const Btn = ({ title,type,color}) => {
        return (<Pressable style={{
            padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
        , height: 70,
        width: 70,
        margin: 14,
        backgroundColor:getBackgroundColor(type),

        }}
            onPress={() => calculate(title)}
        >

            <Text style={{ fontSize: 37, color:getcolor(color)}}>{title}</Text>
        </Pressable>
        )
    }

   const getBackgroundColor=(type)=>{
    if(type == 'right'){
        return '#fd9500'
    }
   
    else if(type == 'top'){
        return '#a5a5a5'
    }
    else if(type == 'number'){
        return '#333'
    }
   }

   const getcolor=(color)=>{
      if (color == 'top'){
        return 'black'
      }
      else if(color == 'right'){
        return 'white'
      }
      else if(color == 'number'){
        return 'white'
      }
   }


    const calculate = (title) => {
        if (title == 'AC') {
            SetResult('')
        }
        else if (title == 'X') {
            SetResult(result.substring(0, result.length- 1))
        }
        else if (title == '=') {
            const answer = Number(eval(result).toFixed(3)).toString();
            SetResult(answer)
        }
        else {
            SetResult(result + title)

        }
         

    }


 


    return (
        <View style={styles.main} >
            <ScrollView style={{ width: '100%' }}>

                <Text style={styles.field}>{result}</Text>

            </ScrollView>
            <View style={{ flexDirection: 'row', flexWrap:'wrap'  }}>
                <Btn title='AC' type='top' color='top'/>
                <Btn title='X' type='top' color='top'/>
                <Btn title='%' type='top' color='top' />
                <Btn title='/' type='right' color='right'/>
                <Btn title='7' type='number' color='number'/>
                <Btn title='8' type='number' color='number'/>
                <Btn title='9' type='number' color='number'/>
                <Btn title='*' type='right' color='right'/>
                <Btn title='4' type='number' color='number'/>
                <Btn title='5' type='number' color='number'/>
                <Btn title='6' type='number' color='number'/>
                <Btn title='-' type='right' color='right'/>
                <Btn title='1' type='number' color='number'/>
                <Btn title='2' type='number' color='number'/>
                <Btn title='3' type='number' color='number'/>
                <Btn title='+' type='right' color='right'/>
                <Btn title='00' type='number' color='number'/>
                <Btn title='0' type='number' color='number'/>
                <Btn title='.' type='number' color='number'/>
                <Btn title='=' type='right' color='right'/>
                 

            </View>

        </View>
    );
   
     
}







const styles = StyleSheet.create({
 
    main: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        backgroundColor: 'black',
        alignItems: 'center',


    },
    field: {
        fontSize: 40,
        width: '100%',
        textAlign: 'right',
        paddingRight: 25,
        color: 'white',
        marginTop: 160,
        paddingBottom: 20,
        backgroundColor: 'black',
        paddingRight: 20,
        


    }

})
export default Calculator;
