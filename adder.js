//Promise with set timout
const adder = async (previous,next)=> {
    return new Promise(resolve => setTimeout(
        resolve(previous+next)
        , 10));    
} 
//Async for each loop 
const forEachAsync= async (nums)=>{
    temp=0                  //Accumulator
    
    await nums.forEach((n) => {    
        adder(temp,n)
        .then((r)=>{temp+=r})       //Accumulate results (addition)
    })
    return temp
}
 
//Asuync function takes a list of numbers
const iterateNumbers = async (nums) => {  
   
    let total=await forEachAsync(nums)    
    console.log(total)
}

iterateNumbers([1,2,3,5,8,13,21])   //Asynchronously iterates, adding numbers, waiting 10 ms.
