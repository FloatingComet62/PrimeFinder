"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("./data"));
const fs_1 = __importDefault(require("fs"));
const writer = fs_1.default.createWriteStream('primes.txt');
const primes = data_1.default.getPrimes();
for (let i = 0; i < primes.length; i++) {
    writer.write(`${primes[i]}\n`);
}
