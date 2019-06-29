class Pointer {
  constructor (address = '0' /* address string */, local = false) {
    var _value = address
    var _local = local
    this.isLocal = function () {
      return _local
    }
    this.changeValue = function (object, MemoryObj /* in case of Local Memory object, pass it. Otherwise, leave it */) {
      if (this.isLocal()) {
        MemoryObj.changeValue(_value, object)
      } else {
        window.publicMemoryObj.changeValue(_value, object)
      }
    }
    this.value = function () {
      return _value
    }
    this.pointedTo = function (MemoryObj /* in case of Local Memory object, pass it. Otherwise, leave it */) {
      if (this.isLocal()) {
        MemoryObj.valueOf(_value)
      } else {
        return window.publicMemoryObj.valueOf(_value)
      }
    }
    this.free = function (MemoryObj /* in case of Local Memory object, pass it. Otherwise, leave it */) {
      if (this.isLocal()) {
        MemoryObj.free(this.value())
      } else {
        window.publicMemoryObj.free()
      }
      return null
    }
  }
  set point (object) {
    if (this.isLocal()) {
      throw new Error('Pointer.point shorthand is only applicable for global pointers. Use changeValue() function instead')
    } else {
      this.changeValue(object)
    }
  }
  get point () {
    if (this.isLocal()) {
      throw new Error('Pointer.point shorthand is only applicable for global pointers. Use pointedTo() function instead')
    } else {
      return this.pointedTo()
    }
  }
}

class Memory {
  constructor (global = false) {
    var _endaddr = 0
    var _objbook = []
    var _newobj = function (object /* object */) {
      _objbook.push(object)
      _endaddr = _endaddr + 1
      if (global) {
        return new Pointer((_endaddr - 1).toString(36))
      } else {
        return new Pointer((_endaddr - 1).toString(36), true)
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
    this.free = function (address = '0' /* string */) {
      _objbook[parseInt(address, 36)] = null
      return 0
    }
    this.nullptr = this.newobj(null)
  }
}

window.publicMemoryObj = new Memory(true)
