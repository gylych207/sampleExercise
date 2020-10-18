let katzDeliLine = ['myrat','kakysh','oraz','sapar','dowran'];

// function takeANumber(katzDeliLine,name){
//   katzDeliLine[katzDeliLine.length] = name;
//  return katzDeliLine 
// }

// function takeANumber(katzDeliLine,name){
//     katzDeliLine.splice(katzDeliLine.length,0,name);
//     return katzDeliLine
// }

function nowServing(katzDeliLine){
    let firstPerson = katzDeliLine.shift(0,1);
    if (katzDeliLine.length === 0){
      console.log("There is nobody to be served")      
    }
    else{
        console.log(`currently serving ${firstPerson}`)   
    }
}

// function currentLine(katzDeliLine){
//     if(katzDeliLine.length === 0){
//      return   "The line is currently empty."
//     }
//     else{
//         let firstSentence = `The line is currently: 1. ${katzDeliLine[0]},`;
//         for (let i = 1; i < katzDeliLine.length; i++) {
//             if (i < katzDeliLine.length - 1 ) {
//               firstSentence = firstSentence + ` ${i+1}.${katzDeliLine[i]},`
//             } else {
//                 firstSentence = firstSentence + ` ${i+1}.${katzDeliLine[i]}`;
                
//             }
            
//         }
//         return console.log(firstSentence)
//     }
    
// }

function currentLine(katzDeliLine){
    if(katzDeliLine.length === 0){
      return 'The line is currently empty.'
    }
    let mystr = 'The line is currently: ';
    for( let i=0;i<katzDeliLine.length;i++){
      mystr = mystr + `${i+1}. ${katzDeliLine[i]}, `
    }
    //  return mystr.substring(-1,mystr.length-2);
     let kk = mystr.slice(0,katzDeliLine.length-1)
    return kk 
   }

  