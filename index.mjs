function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function asyncFunction() {
    console.log('Start');
    await delay(2000); // Simulating an asynchronous operation
    console.log('Middle');
    await delay(2000); // Simulating another asynchronous operation
    console.log('End');
    const value = await someLoopTask();
    console.log(value);
  }
  
  asyncFunction();
  console.log('After asyncFunction');

  function someLoopTask() {
    return new Promise(resolve => {
        for (let i = 0; i <= 1000000; i+=1) {
            if (i === 1000000) {
                resolve('trigger');
            }
          }
    });
}


//   function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   function asyncFunction() {
//     console.log('Start');
//     return delay(2000)
//       .then(() => {
//         console.log('Middle');
//         return delay(2000);
//       })
//       .then(() => {
//         console.log('End');
//       });
//   }
  
//   asyncFunction().then(() => {
//     console.log('After asyncFunction');
//   });