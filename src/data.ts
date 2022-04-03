import fs from 'fs'

interface data{
    atNum: number,
    primesFound: Array<number>
}

function getData(){
    const data = fs.readFileSync('dist/data.json').toString()
    const parsedData: data = JSON.parse(data)
    return parsedData
}

function setData(data: string){
    fs.writeFileSync('dist/data.json', data)
}

function addNum(){
    const data = getData()
    data.atNum += 1
    setData(JSON.stringify(data))
}

function addPrime(prime: number){
    const data = getData()
    data.primesFound.push(prime)
    setData(JSON.stringify(data))
}

function getCurrentNum(): number{
    const data = getData()
    return data.atNum
}

function getPrimes(): Array<number>{
    const data = getData()
    return data.primesFound
}

function reset(){
    setData(`{
    "atNum": 2,
    "primesFound": [
    
    ]
}`)
}

export default {
    addNum,
    addPrime,
    getCurrentNum,
    getPrimes,
    reset
}