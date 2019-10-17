# memoryJS

memoryJS is a dependecy free, ES6 compliant JS library that implements the concept of pointers in JavaScript. And, oh yeah! It's tiny.

memory.js - 2.5kb (standard)

memory.min.js - 1.2kb (minified)

memory.secret.min.js - 2.4kb (obfuscated)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![License](https://img.shields.io/github/license/unsuitable001/memoryJS.svg?style=popout)](https://raw.githubusercontent.com/unsuitable001/memoryJS/master/LICENSE)
[![Build Status](https://travis-ci.org/unsuitable001/memoryJS.svg?branch=master)](https://travis-ci.org/unsuitable001/memoryJS)
![Codecov](https://img.shields.io/codecov/c/github/unsuitable001/memoryJS)
[![codebeat badge](https://codebeat.co/badges/9a04c2ff-0e70-4290-a340-67f37d41e162)](https://codebeat.co/projects/github-com-unsuitable001-memoryjs-master) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/392b5ccd3b854df8bc0988e359872afb)](https://www.codacy.com/app/unsuitable001/memoryJS?utm_source=github.com&utm_medium=referral&utm_content=unsuitable001/memoryJS&utm_campaign=Badge_Grade)

**Preliminary work is done. Testing in progress. Feature Requests, Bug Reports & Contributions are welcomed. Node Package Coming Soon**

## Installation

**Browser :**

```html
<script src="memory.js"></script>
<!-- or, use the minified version -->
<script src="memory.min.js"></script>
<!-- or, you can use a obfuscated version too -->
<script src="memory.secret.min.js"></script>
```

## Usage

### Creating New Object in Memory

```javascript
var ptr = memoryJS.publicMemoryObj.newobj(55); // this method returns a pointer object
```

### Getting The Memory Address Of The Object

```javascript
console.log(ptr.value());
```

### Accessing The Stored Object from Memory

```javascript
console.log(ptr.pointedTo()); // output : 55
console.log(ptr.point); // output : 55
console.log(memoryJS.publicMemoryObj.valueOf(ptr.value())); // output : 55
```

### Changing The Stored Object in Memory

```javascript
ptr.changeValue(96);
//  or
ptr.point = 96;
//	or
memoryJS.publicMemoryObj.changeValue(ptr.value(), 96);
```

### Deleting An Object From Memory

```javascript
ptr.free(); // returns null object
// or
memoryJS.publicMemoryObj.free(); // returns zero
```

### Creating Custom Pointer Object

```javascript
var newptr = new Pointer("05f9"); // where 05f9 is the memory address (i.e value of the pointer)
```

### Trying to access the whole memory object

```javascript
console.log(memoryJS.publicMemoryObj); // try yourself. it will not display any of the contents. Will only print the available methods.
```

## Donate

### For Indian People

![Donate Via UPI](https://raw.githubusercontent.com/unsuitable001/Notice_And_My_Identity/master/images/UPIQRCode.png)

UPI ID: **unsuitable001@ybl**

### For People Worldwide

[![PayPal Me](https://raw.githubusercontent.com/unsuitable001/Notice_And_My_Identity/master/images/paypalme.jpg)](https://www.paypal.me/unsuitable001)
[![Donate using Debit/Credit card](https://www.paypalobjects.com/en_GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=G6N58TAQXHFBA)

## Let's Connect

[![Twitter](https://raw.githubusercontent.com/unsuitable001/Notice_And_My_Identity/master/images/twitter.png)](https://twitter.com/unsuitable001)
[![Gitter Chat](https://raw.githubusercontent.com/unsuitable001/Notice_And_My_Identity/master/images/gitter.png)](https://gitter.im/unsuitable001)

## Hire Me

Please go to : https://unsuitable001.github.io/hire
