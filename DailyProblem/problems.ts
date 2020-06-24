import * as Utils from './utils.ts'
export function day1(){
    /**
     * @url http://www.dailyinterviewpro.com/
     * Given a string, find the length of the longest substring without repeating characters.
     * ie: abrkaabcdefghijjxxx should print 10, because: abcdefghij is the longest substring
     * vanilla example: abrkaabcdefghijjxxx
     * More examples:
     * Ana
     * Lorena
     * Pikachu&Zekrom
     * Reshiram&Charizard
     */
    const given_string = "abrkaabcdefghijjxxx".split('') //converting to Array 
    const { length }  = given_string
    let debuggerString = [given_string[0]]
    let finalString = debuggerString.slice() 
    //Using vanilla code as much as possible!
    for( let _i = 1; _i < length - 1; _i++){
        let element = given_string[_i]
        //console.log(debuggerString,_i,element) Loop inspector. 
        if(!debuggerString.includes(element)){
            debuggerString.push(element)
        }else{//One character is repeated...We need to identify it.
            let indexThatRepeats = debuggerString.indexOf(element)
           debuggerString = debuggerString.slice(indexThatRepeats+1)
           debuggerString.push(element)
        }
        if(debuggerString.length > finalString.length){
            finalString = debuggerString.slice()
        }
    }
    console.log(finalString,finalString.length);
}
export function day2(){
    /**
     * @url http://www.dailyinterviewpro.com/
     * You are given a list of numbers, and a target number k. Return whether or not there are two numbers in the list that add up to k.
     * Example:
     * Given [4, 7, 1 , -3, 2] and k = 5,
     * return true since 4 + 1 = 5.
     * examples: [4,7,1,-3,2] target = 5 true
     * [4,7,1,-3,2] target = 22 false
     * [4,7,1,-3,2] target 4 true
     * [4,7,1,-3,2] target 9 true
     * [11,-5,-4,5,9] target 14 true
     */
    const listOfNumbers = [11,-5,-4,5,9];
    const target = 14;
    /**
     * @note One could add a validation saying: nothing bigger than the number but, since we allow (-) 
     * If we were to have [7,-2] in theory it equals the desired target, so yes. IF this limatition is mentioned, then ignore and add the max size
     */
    let targetExists = Utils.iterableSelf(listOfNumbers[0],listOfNumbers,target,0);
    console.log('The result is...',targetExists);

}