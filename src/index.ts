// let str:string;
// str = "10";
// function fun(op1: number, op2: number): number {
//     return op1 * op2;
// }
// let a = fun(2,2);
// a = 10;
// let b = 10;
// let d = b + "10"
// if(str) {
//     console.log(str);
// }
// function fun1(s:string): boolean {
//     return !!s;
// }
// let vf: (n1:number, n2:number) => string;
// function fun4(op1:number,op2:number):string {
//     return op1+op2 + "";
// }
// vf = fun4;
// console.log(vf(2,2));

// function sum(ar: number[]): number {
//     return ar.reduce((res, cur)=> res + cur)
// }
// let ar:Array<number> = [1,2,3,10];
// ar.push(12);
// console.log(sum(ar));
//let set = new Set<number>([1,1,1,2,2,3,3]);
// console.log(set);
//set.forEach(e => console.log(e));
// set.add(10);
// let ar1 = Array.from(set);
// console.log(sum(ar1));
// console.log(set.has(10));

/***********************HW #32 */
//1
function intersection(set1: Set<number>, set2: Set<number>): number[] {
    //TODO write function returning array of common numbers between two sets
    //that is numbers existing in both sets
    // Array.from(set1).filter(Set.prototype.has.bind(set2));
    return Array.from(set1).filter(n=>set2.has(n));
}

//2
function sbtract(set1: Set<number>, set2: Set<number>): number[] {
    //TODO write function returning array numbers from set1 don't exist in the set2
    return Array.from(set1).filter(n=>!set2.has(n));
}

//3
type Occurency = {
    str:string,
    count:number
}
function getSortedOccurrences(array:string[]): Occurency[] {
    //TODO write function returning array of occurencys
    //each occurency contains a string from the given array and how many times it occurece in the array
    //a result array should be sorted in the descending order of the occurences
    //example: the given array is ['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn']
    //result:[{str: 'lmn', count: 3}, {str: 'cd', count: 2}, {str: 'a', count: 1}, {str: 'ab', count: 1}]
    //implementation notes: to use Map<string, number>

    const mapOccurrences = array.reduce((map, str) => {
        const count = map.get(str) ?? 0;
        map.set(str, count + 1)
        return map;
    }, new Map<string, number>());
    return Array.from(mapOccurrences)
    .map(e => ({str:e[0], count:e[1]}))
    .sort((o1, o2)=>o2.count - o1.count || o1.str.localeCompare(o2.str));
}
Set.prototype.toString = function() {return Array.from(this).toString()}
const set1 = new Set<number>([1,2,3,4,5]);
const set2 = new Set<number>([2,5,7,-10]);
console.log(`set1: ${set1}`);
console.log(`set2: ${set2}`);
console.log(`intersection(set1, set2) = ${intersection(set1, set2)}`);
console.log(`sbtract(set1, set2) = ${sbtract(set1, set2)}`);
console.log('__'.repeat(20))
console.log(getSortedOccurrences(['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn']))

/*************************** */
// const mapMonth = new Map<number, string>([
//     [1, "Januar"], [2, "Februar"], [3, "March"]
// ]);
// mapMonth.set(4, 'April');
// mapMonth.set(1, 'Jan');
// console.log(mapMonth);
// console.log(mapMonth.get(4));
// console.log(mapMonth.has(5));
// const arEntries = Array.from(mapMonth); // array of entries
// console.log(arEntries);
// const arKeys = Array.from(mapMonth.keys()); //array of keys
// arEntries.push([6, 'hhh']);
// console.log(arEntries);
// arKeys.push(10);
// console.log(arKeys);
// const arValues = Array.from(mapMonth.values());
// console.log(arValues);

// type Person = {
//     id:number,
//     name:string,
//     age?: number,
//     sity?: string
// }

// function createPerson(id:number,name:string):Person {
//     return {id, name};
// }
// console.log(createPerson(123,'Vasya'));
// let person:Person = {id:456,name:'Petya',age:20, sity:'Lod'};
// let persons:Person[] = [];

// function stringLength(str:string):number {
//     return str.length
// }
// console.log(stringLength(person.sity));
