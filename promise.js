let promise = new Promise ((resolve,reject) => {
    let success = false;

    if(success){
        resolve(`Your food is arrived`);
    }
    else{
        reject(`Out of stock`)
    }
})

promise
    .then(result => {
        console.log(`Order is sucessfully delivered to the family` + result);
    })
    .catch(error => {
        console.log(`Out of order sorry family` + error);
    })