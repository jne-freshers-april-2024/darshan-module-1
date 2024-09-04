function makeRequest(location){
    return new Promise((resolve, reject)=>{
        console.log(`making Request to ${location} `);
        if(location === 'Pune'){
            resolve('welcome to pune');
        }
        else{
            reject('we only serach for pune location');
        }
    })
}

function processRequest(responce){
    return new Promise((resolve, reject)=>{
        console.log(`processing request`);
        resolve('Extra Information' +responce);
    })
}

async function doWork(){
    try{
    const responce= await makeRequest('Pune')
    console.log("responce received");
    const processResponce= await processRequest(responce);
    console.log(processResponce);
    }catch{
        console.log('error');
    }
}   

doWork();