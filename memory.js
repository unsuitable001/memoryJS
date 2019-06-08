class Memory {
  constructor () {
    var _endaddr = 0
    // var _addrbook = []
    var _objbook = []
    var _newobj = function (object /* object */) {
      _objbook.push(object)
      _endaddr += 1
    }
    this.valueOf = function (address = '0' /* string */) {
      return _objbook[parseInt(address, 36)]
    }
  }
}

class Pointer {
  constructor (address = '0' /* string */) {
    var _value = address
    this.value = function () {
      return _value
    }
    this.point = function (local = false /* is this a local Memory object? */) {
      if (local) {
        console.log('feat coming soon')
      } else {
        window.publicMemoryObj.valueOf(_value)
      }
    }
  }
  get value () {
    return this.value()
  }
  set value (_) {
    throw new Error("Prohibited! You Can't change a pointer's value")
  }
  set point (object) {
    
  }
}

window.publicMemoryObj = new Memory()

// console.log(x._secret)
// console.log(x.pub)
// x.secret = 96
// x.pub = 69
// console.log(x.secret)
// console.log(x.pub)
