"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("./data"));
const main = () => {
    const start = data_1.default.getCurrentNum();
    for (let i = start; i < Infinity; i++) {
        const primes = data_1.default.getPrimes();
        let dividesBy = 0;
        for (let j = 0; j < primes.length; j++) {
            const prime = primes[j];
            if (i % prime == 0) {
                dividesBy++;
            }
        }
        if (dividesBy == 0) {
            data_1.default.addPrime(i);
            console.clear();
            console.log(i);
        }
        data_1.default.addNum();
        // For Debugging
        // console.log(`${i}: ${dividesBy}: ${primes.toString()}`)
    }
};
main();
