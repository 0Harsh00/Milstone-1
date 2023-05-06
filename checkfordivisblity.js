
        const arrofnumbers = [1,2,3,4,5,6,7,8,9,10,12,15];
        for(let i = 0 ; i<arrofnumbers.length ;i++){
            const  num = arrofnumbers[i]
            if( num % 2 === 0){
                continue;
            }
            if(num %3===0){
               console.log(num); 
            }
        }
