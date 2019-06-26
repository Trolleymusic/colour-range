/* eslint-env jest */
import colourRange from './index'

describe('colourRange package', () => {
  it('calling colourRange without any arguments will return a single colour', () => {
    const colours = colourRange()
    expect(Array.isArray(colours)).toBe(true)
    expect(colours.length).toBe(1)
  })

  it('should create an array of n unique colours', () => {
    const n = 100
    const colours = colourRange(n)
    expect(Array.isArray(colours)).toBe(true)
    expect(colours.length).toBe(n)
    colours.forEach((colour, index) => {
      expect(colours.indexOf(colour)).toEqual(index)
    })
  })

  it('should create a maximum of 360 unique colours', () => {
    const colours = colourRange(500)
    expect(Array.isArray(colours)).toBe(true)
    expect(colours.length).toBe(360)
    colours.forEach((colour, index) => {
      expect(colours.indexOf(colour)).toEqual(index)
    })
  })

  it('should allow you to specify saturation and lightness', () => {
    const n = 100
    const colours = colourRange(n)
    const desaturatedColours = colourRange(n, { saturation: 0.5 })
    const darkColours = colourRange(n, { lightness: 0.1 })

    expect(Array.isArray(colours)).toBe(true)
    expect(Array.isArray(desaturatedColours)).toBe(true)
    expect(Array.isArray(darkColours)).toBe(true)

    expect(colours.length).toBe(n)
    expect(desaturatedColours.length).toBe(n)
    expect(darkColours.length).toBe(n)

    colours.forEach((colour, index) => {
      expect(colours.indexOf(colour)).toEqual(index)
      expect(desaturatedColours[index]).not.toEqual(colour)
      expect(darkColours[index]).not.toEqual(colour)
    })
  })

  it('should prefix the colours with a hash if required', () => {
    const n = 10
    const colours = colourRange(n, { prefix: true })
    expect(Array.isArray(colours)).toBe(true)
    expect(colours.length).toBe(n)
    colours.forEach((colour, index) => {
      expect(colour.indexOf('#')).toEqual(0)
    })
  })
})
