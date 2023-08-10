// ----------------------------------------Let + Const----------------------------------------\\

// const

{
    const num = 3 // const can not change no matter what unless u change it to let innstead of const
}

// let
{
    let num = 4 // let can change but when you change them u need to remove the let and just write var alone
    num = 4 + 4
}

// ---------------------------------------- Data Types ----------------------------------------\\

// ---------------------------------------- Premitive Types ----------------------------------------\\

// Strings and There Commands

{
    let str = "Hi My Name Is Fahad"
    console.log(str.charAt(5)); // --> Y
    console.log(str.length); // --> 19
    console.log(str.slice(3,6)); // --> My
    console.log(str.split(" ")); // -->  ['Hi', 'My', 'Name', 'Is', 'Fahad']
}

// Numbers and there Types

{
    let num = 13 // this is the normal why to write a number/integer
    let double = 18.2 // the doube way is to write it with a decimal
}

// null/object

{
    let Null = null // null is used for objects/ stuff that will be used later
}

// undefined

{
    let udi; // undefined is a var with no integer/string/anything in there but mostly will change in the future
}

// symbols

{
    let sym = Symbol("3%") // symbols are used to make a random symbol u can use later on but programmers dont use this alot
}

// boolen

{
    let bol = true // boolen type is used for true and false and its kinda important
}

// ---------------------------------------- Non-premitive Types ---------------------------------------- \\

{
    let ojctest = { // object is used to make a little liabry but i like to think of as folder and the var inside are files cause when we print them out you need to call out the folder to get the file
        num: 31, // this is how to place a var and give it a identity
        str: "hello",
        bol: true
    }
    console.log(ojctest.num); // this is how to print them out
    console.log(ojctest.str);
    console.log(ojctest.bol);
}

// ---------------------------------------- Convertion Types ---------------------------------------------\\

// // .........................................................................

// anything to string
console.log("-----------ANYTHING TO STRING-----------");
const num = 314 // number to string
console.log(`${typeof num} ${num}`);
const numtostr = String(num)
console.log(`${typeof numtostr} ${numtostr}`);
// ...........................................................................
const str = "test" // strings to string
console.log(`${typeof str} ${str}`);
const strtostr = String(str)
console.log(`${typeof strtostr} ${strtostr}`);
// ...........................................................................
const bol = true // boolen to string
console.log(`${typeof bol} ${bol}`);
const boltostr = String(bol)
console.log(`${typeof boltostr} ${boltostr}`);
// ...........................................................................
let und;// undefined to String
console.log(`${typeof und} ${und}`);
const undtostr = String(und)
console.log(`${typeof undtostr} ${undtostr}`);
// ...........................................................................
const big = 2374897n // bigint to string
console.log(`${typeof big} ${big}`);
const bigtostr = String(big)
console.log(`${typeof bigtostr} ${bigtostr}`);
// ........................................................................... 
let Null = null // null/object to string
console.log(`${typeof Null} ${Null}`);
const nulltostr = String(Null)
console.log(`${typeof nulltostr} ${nulltostr}`);
// ............................................................................

// anything to number
console.log("-----------ANYTHING TO NUMBER-----------");
const num1 = 314 // number to number
console.log(`${typeof num1} ${num1}`);
const num1tonum = Number(num1)
console.log(`${typeof num1tonum} ${num1tonum}`);
// ............................................................................
const str1 = "three hundred and forteen" // string to number
console.log(`${typeof str1} ${str1}`);
const str1tonum = Number(str1)
console.log(`${typeof str1tonum} ${str1tonum}`);
// ............................................................................
const bol1 = true // boolen to number
console.log(`${typeof bol1} ${bol1}`);
const bol1tonum = Number(bol1)
console.log(`${typeof bol1tonum} ${bol1tonum}`);
// ............................................................................
const str2 = "11" // string to number 2.0 to number
console.log(`${typeof str2} ${str2}`);
const str2tonum = Number(str2)
console.log(`${typeof str2tonum} ${str2tonum}`);
// ............................................................................
const big1 = 7248169n // bigint to number
console.log(`${typeof big1} ${big1}`);
const big1tonum = Number(big1)
console.log(`${typeof big1tonum} ${big1tonum}`);
// ............................................................................
let und1; // undefined to number
console.log(`${typeof und1} ${und1}`);
const und1tonum = Number(und1)
console.log(`${typeof und1tonum} ${und1tonum}`);
// ............................................................................
const null1 = null // null to number
console.log(`${typeof null1} ${null1}`);
const null1tonum = Number(bol1)
console.log(`${typeof null1tonum} ${null1tonum}`);
// ...........................................................................

// anything to boolean
console.log("-----------ANYTHING TO BOOLEAN-----------");
const bol2 = true // boolean to boolean
console.log(`${typeof bol2} ${bol2}`);
const bol2tobol = Boolean(bol2)
console.log(`${typeof bol2tobol} ${bol2tobol}`);
// ............................................................................
const str3 = "three hundred and forteen" // string to boolean
console.log(`${typeof str3} ${str3}`);
const str3tobol = Boolean(str3)
console.log(`${typeof str3tobol} ${str3tobol}`);
// ............................................................................
const num2 = 0 // number to boolean
console.log(`${typeof num2} ${num2}`);
const num2tobol = Boolean(num2)
console.log(`${typeof num2tobol} ${num2tobol}`);
// ............................................................................
const num3 = 300 // number 2.0 to boolean
console.log(`${typeof num3} ${num3}`);
const num3tobol = Boolean(num3)
console.log(`${typeof num3tobol} ${num3tobol}`);
// ............................................................................
let und2; // undefined to boolean
console.log(`${typeof und2} ${und2}`);
const und2tobol = Boolean(und2)
console.log(`${typeof und2tobol} ${und2tobol}`);
// ............................................................................
const Null3 = null // null/object to boolean
console.log(`${typeof Null3} ${Null3}`);
const Null3tobol = Boolean(Null3)
console.log(`${typeof Null3tobol} ${Null3tobol}`);
// ............................................................................
const str4 = "" // empty to Boolean
console.log(`${typeof str4} ${str4}`);
const str4tobol = Boolean(str4)
console.log(`${typeof str4tobol} ${str4tobol}`);
// ............................................................................

//Auto conversion

let auto1 = console.log(22 - "1");
console.log(`${typeof auto1} ${auto1}`);
let auto2 = console.log(22 + "1");
console.log(`${typeof auto2} ${auto2}`);

//---------------------------------finshed with converstions------------------------------------\\