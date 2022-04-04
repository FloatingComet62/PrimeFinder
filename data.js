"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function getData() {
    const data = fs_1.default.readFileSync('data.json').toString();
    const parsedData = JSON.parse(data);
    return parsedData;
}
function setData(data) {
    fs_1.default.writeFileSync('data.json', data);
}
function addNum() {
    const data = getData();
    data.atNum += 1;
    setData(JSON.stringify(data));
}
function addPrime(prime) {
    const data = getData();
    data.primesFound.push(prime);
    setData(JSON.stringify(data));
}
function getCurrentNum() {
    const data = getData();
    return data.atNum;
}
function getPrimes() {
    const data = getData();
    return data.primesFound;
}
function reset() {
    setData(`{
    "atNum": 2,
    "primesFound": [
    
    ]
}`);
}
exports.default = {
    addNum,
    addPrime,
    getCurrentNum,
    getPrimes,
    reset
};
