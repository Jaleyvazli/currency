let right = document.querySelectorAll('.sag');   
let left = document.querySelectorAll('.sol');      
let rinput = document.getElementById('rinput');   
let linput = document.getElementById('linput');  
let leftp=document.getElementById("sol")
let rightp=document.getElementById("sag")
   
let sol = "RUB";   
let sag = "USD";   
   
linput.addEventListener('keyup', function(){         
    getvalue()   
})    

 
right.forEach(event => {   
    event.addEventListener('click', function(){   
        sag = this.innerText        
        getvalue()   
    })    
});   
   
left.forEach(event => {   
    event.addEventListener('click', function(){   
        sol = this.innerText   
        getvalue()   
    })    
});   
   
const getvalue = async () => {   
    let out;   
    await fetch(`https:api.exchangerate.host/latest?base=${sol}&symbols=${sag}`)   
    .then(response => response.json())   
    .then((data) => {   
        out = Object.values(data.rates)[0]   
        console.log(data)   
    })  
    function opposite(){
        rinput.addEventListener('keyup', function(){         
            linput.value = rinput.value / out
         })  
    }
    


    if ((sol == 'RUB') && (sag == 'RUB')) {   
        rinput.value = linput.value   
        leftp.innerText = '1 RUB = ' +out + ' RUB'
        rightp.innerText = '1 RUB = ' + 1/out + ' RUB'
    
    }   
    else if ((sol == 'RUB') && (sag == 'EUR')) {   
        rinput.value = linput.value * out 
        leftp.innerText = '1 RUB = ' + out + ' EUR'
        rightp.innerText = '1 EUR = ' + 1/out + ' RUB'
        opposite()
    }   
    else if ((sol == 'RUB') && (sag == 'USD')) {  
        rinput.value = linput.value * out; 
        leftp.innerText = '1 RUB = ' +out + ' USD'
        rightp.innerText = '1 USD = ' + 1/out + ' RUB'
        opposite()
    }   
    else if ((sol == 'RUB') && (sag == 'GBP')) {   
        rinput.value = linput.value * out  
        leftp.innerText = '1 RUB = ' +out + ' GBP'
        rightp.innerText = '1 GBP = ' + 1/out + ' RUB'
        opposite() 
    }
         
    else if ((sol == 'USD') && (sag == 'USD')) {   
        rinput.value = linput.value   
        leftp.innerText = '1 USD = ' +out + ' USD'
        rightp.innerText = '1 USD = ' + 1/out + ' USD'
    }   
    else if ((sol == 'USD') && (sag == 'EUR')) {   
        rinput.value = linput.value * out 
        leftp.innerText = '1 USD = ' +out + ' EUR'
        rightp.innerText = '1 EUR = ' + 1/out + ' USD' 
        opposite() 
    }   
    else if ((sol == 'USD') && (sag == 'RUB')) {   
        rinput.value = linput.value * out 
        leftp.innerText = '1 USD = ' +out + ' RUB'
        rightp.innerText = '1 RUB = ' + 1/out + ' USD'
        opposite()  
    }   
    else if ((sol == 'USD') && (sag == 'GBP')) {   
        rinput.value = linput.value * out
        leftp.innerText = '1 USD = ' +out + ' GBP'
        rightp.innerText = '1 GBP = ' + 1/out + ' USD' 
        opposite()  
    }
    
    else if ((sol == 'EUR') && (sag == 'EUR')) {  
        rinput.value = linput.value * out
        leftp.innerText = '1 EUR = ' +out + ' EUR'
        rightp.innerText = '1 EUR = ' + 1/out + ' EUR' 
        opposite()  
    }   
    else if ((sol == 'EUR') && (sag == 'USD')) {   
        rinput.value = linput.value * out
        leftp.innerText = '1 EUR = ' +out + ' USD'
        rightp.innerText = '1 USD = ' + 1/out + ' EUR' 
        opposite()  
    }   
    else if ((sol == 'EUR') && (sag == 'RUB')) {   
        rinput.value = linput.value * out  
        leftp.innerText = '1 EUR = ' +out + ' RUB'
        rightp.innerText = '1 RUB = ' + 1/out + ' EUR' 
        opposite()
    }   
    else if ((sol == 'EUR') && (sag == 'GBP')) {   
        rinput.value = linput.value * out 
        leftp.innerText = '1 EUR = ' +out + ' GBP'
        rightp.innerText = '1 GBP = ' + 1/out + ' EUR'  
        opposite()
    }
     
    else if ((sol == 'GBP') && (sag == 'GBP')) {   
        rinput.value = linput.value   
        leftp.innerText = '1 GBP = ' +out + ' GBP'
        rightp.innerText = '1 GBP = ' +1/out + ' GBP'
        opposite()
    }   
    else if ((sol == 'GBP') && (sag == 'RUB')) {   
        rinput.value = linput.value * out;  
        leftp.innerText = '1 GBP = ' +out + ' RUB'
        rightp.innerText = '1 RUB = ' + 1/out + ' GBP' 
        opposite()
    }
    else if ((sol == 'GBP') && (sag == 'EUR')) {   
        rinput.value = linput.value * out;  
        leftp.innerText = '1 GBP = ' +out + ' EUR'
        rightp.innerText = '1 EUR = ' + 1/out + ' GBP' 
        opposite()
    }    
    else if ((sol == 'GBP') && (sag == 'USD')) {   
        rinput.value = linput.value * out   
        leftp.innerText = '1 GBP = ' +out + ' USD'
        rightp.innerText = '1 USD = ' + 1/out + ' GBP'
        opposite()
    }
     
   }
   
right.forEach((event) => {   
    event.addEventListener('click', function() {   
        right.forEach((event) => {   
            event.classList.remove('active')   
            this.classList.add('active')   
        })   
    })   
})   
   
left.forEach((event) => {   
    event.addEventListener('click', function() {   
        left.forEach((event) => {   
            event.classList.remove('active')   
            this.classList.add('active')   
        })   
    })   
})