export function day1(){
    /**
     * @todo
     * Given a string, find the length of the longest substring without repeating characters.
     * ie: abrkaabcdefghijjxxx should print 10, because: abcdefghij is the longest substring
     * vanilla example: abrkaabcdefghijjxxx
     * More examples:
     * Ana
     * Lorena
     * Pikachu&Zekrom
     * Reshiram&Charizard
     */
    const given_string = "Reshiram&Charizard".split('') //converting to Array 
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