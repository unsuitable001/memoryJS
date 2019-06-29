# memoryJS

memoryJS is a dependecy free, ES6 compliant JS library that implements the concept of pointers in JavaScript

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![License](https://img.shields.io/github/license/unsuitable001/memoryJS.svg?style=popout)](https://raw.githubusercontent.com/unsuitable001/memoryJS/master/LICENSE) [![Build Status](https://travis-ci.org/unsuitable001/memoryJS.svg?branch=master)](https://travis-ci.org/unsuitable001/memoryJS) [![codebeat badge](https://codebeat.co/badges/9a04c2ff-0e70-4290-a340-67f37d41e162)](https://codebeat.co/projects/github-com-unsuitable001-memoryjs-master) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/392b5ccd3b854df8bc0988e359872afb)](https://www.codacy.com/app/unsuitable001/memoryJS?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=unsuitable001/memoryJS&amp;utm_campaign=Badge_Grade)

**Preliminary work is done. Testing in progress. Feature Requests, Bug Reports & Contributions are welcomed**

## Installation

**Browser :**

```javascript
<script src="memory.js"></script>
```

## Usage

### Creating New Object in Memory

```javascript
var ptr = window.publicMemoryObj.newobj(55)    // this method returns a pointer object
```

### Getting The Memory Address Of The Object

```javascript
console.log(ptr.value())
```

### Accessing The Stored Object from Memory

```javascript
console.log(ptr.pointedTo())   // output : 55
console.log(ptr.point)    // output : 55
console.log(window.publicMemoryObj.valueOf(ptr.value())) // output : 55
```

### Changing The Stored Object in Memory

```javascript
ptr.changeValue(96)
//  or
window.publicMemoryObj.changeValue(ptr.value(), 96)
```

### Creating Custom Pointer Object

```javascript
var newptr = new Pointer('05f9')    // where 05f9 is the memory address (i.e value of the pointer)
```
### Trying to access the whole memory object

```javascript
console.log(window.publicMemoryObj) // try yourself. it will not display any of the contents. Will only print the available methods.
```
