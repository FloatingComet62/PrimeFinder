import data from './data'

const main = () => {
    const start = data.getCurrentNum()
    
    for(let i=start;i<Infinity;i++){
        const primes = data.getPrimes()
        let dividesBy = 0
        for(let j=0;j<primes.length;j++){
            const prime = primes[j]
            if(i%prime==0){
                dividesBy++
            }
            
        }
        if(dividesBy==0){
            data.addPrime(i)
            console.clear()
            console.log(i)
        }

        data.addNum()
        // For Debugging
        // console.log(`${i}: ${dividesBy}: ${primes.toString()}`)
    }
}

main()