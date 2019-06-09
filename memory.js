class Memory {
  constructor () {
    var _endaddr = 0
    // var _addrbook = []
    var _objbook = []
    var _newobj = function (object /* object */) {
      _objbook.push(object)
      _endaddr += 1
      return object
    }
    this.valueOf = function (address = '0' /* string */) {
      return _objbook[parseInt(address, 36)]
    }
    this.changeValue = function (address, object) {
      _objbook[parseInt(address, 36)] = object
      return 0
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
    this.point = function () {
      if (_MemoryObj !== undefined) {
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
    this.changeValue()
  }
}

window.publicMemoryObj = new Memory()
