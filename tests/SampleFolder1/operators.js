function returnIndices(target)
{
    const nums=[2,4,7,8,11,7];
    let result=[];
    let sum=0;
    for (let i = 0; i<= nums.length; i++) {
       for(j=i+1;j<=nums.length;j++)   
     {
        sum=nums[i]+nums[j];
        if (sum === target) {
             return result.push(i,j);
            //console.log(`The pairs of indices whose elements sum up to ${target} are ${result}`);
            //console.log(`Target equals ${nums[i]}+${nums[j]} is(${i},${j})`)
        }
     }
    }
    //console.log(`Target equals ${nums[i]}+${nums[j]} is(${i},${j})`)
    //console.log(`The pairs of indices whose elements sum up to ${target} are ${result}`);
    return results;
}
returnIndices(11);
console.log(twoSum(nums, target)); 