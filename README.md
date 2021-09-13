# indexed-object-to-array ✨
#### This package for converting indexed keys objects into an array of objects.

## Install
Using npm:
`npm i indexed-object-to-array`
## Paramaters
1. obj (object) : indexed object
```js
//example objects: 
{"1":{},"2":{},"3":"","4":{},"5":{}} 

//or something like
{"World!":{...},"Rick-C-137":"Simple Rick","Hello":[...],"554":"","7":{}} 
```
2. keep_index (boolean) : It keeps index key (parameter name of object) as additional attribute when converts and array of objects
```js
// example 
{"1":{},"2":{},"3":"","4":{},"5":[]} 
// keep_index === false
[{},{},"",{},[]] 
// keep_index === true
[{index:"1",value:{}},{index:"2",value:{}},{index:"3",value:""},{index:"4",value:{}},{index:"5",value:[]}]
``` 

## Usage
```js
const indexedObjToArr = require("indexed-object-to-array");

// example_object is your object, keep_index is boolean 
indexedObjToArr(example_object, keep_index);
```
## Example
```js
const indexedObjToArr = require("indexed-object-to-array");

const example_obj = { 
"1":{name:"example"},
"2":"Oh look at me. I am example.",
"fruits":["banana","apple","kiwi"]
}

// keep_index true
indexedObjToArr(example_obj, true); 
// [{index:"1",value:{name:"example"}}
// ,{index:"2",value:"Oh look at me. I am example."}
// ,{index:"fruits",value:["banana","apple","kiwi"]}]

// keep_index false
indexedObjToArr(example_obj, false); 
// [{name:"example"}
// ,"Oh look at me. I am example."}
// ,["banana","apple","kiwi"]]

```
## Functions
* **indexedObjToArr**
* new use cases are coming soon!

