class Memory {
  constructor (global = true) {
    var _endaddr = 0
    // var _addrbook = []
    var _objbook = []
    var _newobj = function (object /* object */) {
      _objbook.push(object)
      _endaddr = _endaddr + 1
      if (global) {
        return new Pointer((_endaddr - 1).toString(36))
      } else {
        return new Pointer(_endaddr - 1, this)
      }
    }
    this.valueOf = function (address = '0' /* string */) {
      return _objbook[parseInt(address, 36)]
    }
    this.changeValue = function (address, object) {
      _objbook[parseInt(address, 36)] = object
      return 0
    }
    this.newobj = function (object) {
      return _newobj(object)
    }
  }
}

class Pointer {
  constructor (address = '0' /* address string */, MemoryObj /* in case of Local Memory object, pass it. Otherwise, leave it */) {
    var _value = address
    var _MemoryObj = MemoryObj
    this.changeValue = function (object) {
      if (_MemoryObj !== undefined) {
        console.log('feat coming soon')
      } else {
        window.publicMemoryObj.changeValue(_value, object)
      }
    }
    this.value = function () {
      return _value
    }
    this._realobj = function () {
      if (_MemoryObj !== undefined) {
        console.log('feat coming soon')
      } else {
        return window.publicMemoryObj.valueOf(_value)
      }
    }
  }
  set point (object) {
    this.changeValue()
  }
  get point () {
    return this._realobj()
  }
}

window.publicMemoryObj = new Memory()

var x = 55
var ptr = window.publicMemoryObj.newobj(x)
console.log(ptr)
console.log(typeof (ptr))
console.log(ptr.value())
console.log(typeof (ptr.value()))
console.log(ptr.point)
console.log(typeof (ptr.point))
var y = 99
ptr.changeValue(y)
console.log(ptr.point)
console.log(typeof (ptr.point))
