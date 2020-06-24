
type example = (numberToEvaluate:number,listOfNumbers:any[],target:number,currentPosition:number) => void;

export const iterableSelf:example = (numberToEvaluate:number,listOfNumbers:any[],target:number,currentPosition:number) => {
    let isReal = false;
    const { length } = listOfNumbers;
    if( length-1 === currentPosition ){return false}
    for(let _i = 0; _i < length; _i++){
        if(currentPosition !== _i){
            console.log(numberToEvaluate, listOfNumbers[_i],target)
            if(numberToEvaluate + listOfNumbers[_i] == target){
                isReal = true
            }
        }
    }
    if(isReal){
        return true
    }else{
        return iterableSelf(listOfNumbers[currentPosition+1],listOfNumbers,target,currentPosition+1);
    }
}

