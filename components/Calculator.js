import React, { useState } from 'react';
import { ScrollView, Pressable } from 'react-native';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import Btn from './Buttons';

 
const Calculator = () => {
    const [result, SetResult] = useState('');

    
 
    return (
        <View style={styles.main}>
            <ScrollView style={{ width: '100%' }}>

                <Text  style={styles.field}>{result}</Text>

            </ScrollView>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                <Btn title='AC' type='top' color='top' SetResult={SetResult} result={result}/>
                <Btn title='X' type='top' color='top' SetResult={SetResult} result={result} />
                <Btn title='%' type='top' color='top' SetResult={SetResult} result={result} />
                <Btn title='/' type='right' color='right' SetResult={SetResult} result={result} />
                <Btn title='7' type='number' color='number' SetResult={SetResult} result={result} />
                <Btn title='8' type='number' color='number' SetResult={SetResult} result={result} />
                <Btn title='9' type='number' color='number' SetResult={SetResult} result={result} />
                <Btn title='*' type='right' color='right' SetResult={SetResult} result={result} />
                <Btn title='4' type='number' color='number' SetResult={SetResult} result={result} />
                <Btn title='5' type='number' color='number' SetResult={SetResult} result={result} />
                <Btn title='6' type='number' color='number' SetResult={SetResult} result={result} />
                <Btn title='-' type='right' color='right' SetResult={SetResult} result={result} />
                <Btn title='1' type='number' color='number' SetResult={SetResult} result={result} />
                <Btn title='2' type='number' color='number' SetResult={SetResult} result={result} />
                <Btn title='3' type='number' color='number' SetResult={SetResult} result={result} />
                <Btn title='+' type='right' color='right' SetResult={SetResult} result={result} />
                <Btn title='00' type='number' color='number' SetResult={SetResult} result={result} />
                <Btn title='0' type='number' color='number' SetResult={SetResult} result={result} />
                <Btn title='.' type='number' color='number' SetResult={SetResult} result={result} />
                <Btn title='=' type='right' color='right' SetResult={SetResult} result={result} />


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
export default Calculator 
