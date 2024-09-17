
        //promise
// let promise=new Promise((res,rej)=>{res("Successfully Executed.")})
// promise.then((val)=>{
// setTimeout(() => {
//   console.log(val);  
// },3000);

// })
// promise.catch((err)=>{
//     console.log(err);

// })

async function abc(){
            let promise=new Promise((res,rej)=>{
                setTimeout(()=>{
                    res(2500)

                },5000)
            })
            let promise1=new Promise((res,rej)=>{
                setTimeout(()=>{
                    res(3500)

                },1000)
            })
            let exe=await promise;
            let exe1=await promise1;
            console.log(exe);
            console.log(exe1);
        }
        abc();
   