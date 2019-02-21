const adder = async (previous,next)=> {
    return new Promise(resolve => setTimeout(
        resolve(previous+next)
        , 10));
    
}
  

const forEachAsync= async (nums)=>{
    temp=0
    
    await nums.forEach((n) => {    
        adder(temp,n)
        .then((r)=>{temp+=r})
    })
    return temp
}
 
//Function takes a list of todo
const iterateNumbers = async (nums) => {  
   
    let total=await forEachAsync(nums)    
    console.log(total)
}

iterateNumbers([1,2,3,5,8,13,21])