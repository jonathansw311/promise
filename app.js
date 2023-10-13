const url='http://numbersapi.com/11?jason';

res = axios.get(url)
.then(res =>{
    console.log(res)
    console.log(res.data)
})
.catch(() => console.log("Error"))


numApi=[]
for (let i=0; i<12; i++){
    numApi.push(
        axios.get(`http://numbersapi.com/${i}?jason`)
    );
   
}


// Promise.race(numApi)
// .then(res => console.log(res))
// .catch(err => console.log(err))

Promise.all(numApi)
.then(res => {res.forEach(re => {
    
 makeTR(re.data); });
})

.catch(err => console.log(err))


function makeTR(data){
 newtd = document.createElement('li');
 newtd.innerHTML=data;
 const facts = document.querySelector('li');
 facts.append(newtd);
}