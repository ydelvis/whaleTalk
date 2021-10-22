/* This project translate human talk to 'whale talk'
    It's believed that whales only recognize vowels.

    Hence, a Whale will pronounce 'ELVIS' as 'EEI'.
        EE because 'E' and 'U' are always doubled.
    
        Let's go have some fun writing a code for that!
        Enjoy!
                                                        -By ydelvis

    #AmaliTechTraining   #Codecademy 
*/


let input = 'AmaliTech Graduate Trainee Programme';  // phrase to be translated into whale talk

const vowels = ['a','e','i','o','u'];  // list of vowels

let resultArray = [];   // array to store our whale talk letters

for (let i = 0; i < input.length; i++){   // iterating the input string
  for (let j = 0; j < vowels.length; j ++){    // iterating the vowel array: for comparison purposes
    if (input[i] === vowels[j]){
        resultArray.push(vowels[j])         // append a found vowel into the resultArray List
        if (vowels[j] === 'e'){
          resultArray.push(input[i]);      // checks if vowel is an 'e' so as to add an extra 'e'
          }
        
        else if (vowels[j] === 'u'){   // checks if vowel is a 'u' so as to add an extra 'u'
          resultArray.push(input[i]);
            }
          }
        }
    }
  
  console.log(resultArray.join('').toUpperCase());   // logging results as a single string and in caps

  // End of Code.