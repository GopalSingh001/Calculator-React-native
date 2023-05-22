import { Pressable, Text } from "react-native";

const Btn = ({ title, type, color, SetResult, result }) => {



  const calculate = (title) => {
    if (title == 'AC') {
      SetResult('')
    }
    else if (title == 'X') {
      SetResult(result.substring(0, result.length - 1))
    }
    else if (title == '=') {
      const answer = Number(eval(result).toFixed(3)).toString();
      SetResult(answer)
    }

    else {
      SetResult(result + title)

    }


  }
  return (<Pressable style={{
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    margin: 14,
    backgroundColor: getBackgroundColor(type),

  }}
  
    onPress={() => calculate(title) 
   
    }
  >

    <Text style={{ fontSize: 37, color: getcolor(color) }}>{title}</Text>
  </Pressable>
  )


}

const getBackgroundColor = (type) => {
  if (type == 'right') {
    return '#fd9500'
  }

  else if (type == 'top') {
    return '#a5a5a5'
  }
  else if (type == 'number') {
    return '#333'
  }
}

const getcolor = (color) => {
  if (color == 'top') {
    return 'black'
  }
  else if (color == 'right') {
    return 'white'
  }                                                                
  else if (color == 'number') {
    return 'white'
  }
}

export default Btn;