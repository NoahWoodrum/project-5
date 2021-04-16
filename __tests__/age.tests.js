import Age from '..src/age.js';

describe('Age', () => {
  let spaceAge;
  const earthAge = 10

  beforeEach(() => {
    spaceAge = new spaceAge(earthAge)
  })


  test ('spaceAge class should construct an object', () => { 
    expect(spaceAge).toBeDefined()
  })
})