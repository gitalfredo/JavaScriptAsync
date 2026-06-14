//Promise with set timout
const adder = (prev,ms)=> new Promise((resolve) => setTimeout(
	()=>resolve(prev+ms)      // Adds to the current value, the next value
	, ms));
		
	 
	const forEachAsync= async (nums)=>{
		let result = 0 //Accummulator stores each operation result
		
		for (const num of nums) {
			result = await adder(result,num);			
			console.log(result);
		}
		
		return result
	}
	 
	//Function takes a list 
	const iterateNumbers = async (nums) => {  
	   
		let total=await forEachAsync(nums)    
		console.log(total)
		
	}
    // Note: Use bigger numbers to better notice the wait
	iterateNumbers([1,2,3,5,8,13,21])       //Synchronously iterates, adding numbers, waiting by the given number in ms
