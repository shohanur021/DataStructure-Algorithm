const numbers = [12, 45, 66, 89, 121, 66, 678, 932]

function binarySearch(array,desireNumber){
      for(let i=0; i<array.length; i++){
          if(array[i] == desireNumber){
              return `${array[i]} is found & index no is ${i}`
          }
      }
      return  `${desireNumber} is not found`
}

const result = binarySearch(numbers, 66)
console.log(result);

