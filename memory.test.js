const memoryJS = require('./memory')

test('creates new object in memory', () => {
  const values = [5, 2, 6, 9, 7, 80]

  values.forEach((value, index) => {
    const ptr = memoryJS.publicMemoryObj.newobj(value)

    expect(ptr.value()).toBe((index + 1).toString())
  })
})

test('accesses the stored object from memory', () => {
  const values = [5, 2, 6, 9, 7, 80]

  values.forEach((value) => {
    const ptr = memoryJS.publicMemoryObj.newobj(value)

    expect(ptr.pointedTo()).toBe(value)
    expect(ptr.point).toBe(value)
    expect(memoryJS.publicMemoryObj.valueOf(ptr.value())).toBe(value)
  })
})

test('changes the stored object in memory', () => {
  const values = [5, 2, 6, 9, 7, 80]
  const changeValues = values.reverse()

  values.forEach((value, index) => {
    const ptr = memoryJS.publicMemoryObj.newobj(value)
    ptr.changeValue(changeValues[index])

    expect(ptr.point).toBe(changeValues[index])
  })

  values.forEach((value, index) => {
    const ptr = memoryJS.publicMemoryObj.newobj(value)
    memoryJS.publicMemoryObj.changeValue(ptr.value(), changeValues[index])

    expect(ptr.point).toBe(changeValues[index])
  })
})

test('deletes an object from memory', () => {
  const ptr = memoryJS.publicMemoryObj.newobj(55)

  expect(ptr.free()).toBe(null)
})

test('encapsulates object content', () => {
  const ptr = memoryJS.publicMemoryObj.newobj(55)

  Object.keys(ptr).forEach((key) => {
    expect(typeof ptr[key]).toBe('function')
  })
})
