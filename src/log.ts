import data from './data'
import fs from 'fs'

const writer = fs.createWriteStream('primes.txt')

const primes = data.getPrimes()

for(let i=0;i<primes.length;i++){
    writer.write(`${primes[i]}\n`)
}