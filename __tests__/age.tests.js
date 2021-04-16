import EarthAge from ".../src/age.js"

describe('Age', () => {
  let spaceAge;
  const earthAge = 10

  beforeEach(() => {
    spaceAge = new spaceAge(earthAge)
  })


  test ('spaceAge class should construct an object', () => { 
    expect(spaceAge).toBeDefined()
  })
  // test ('turns earth age into mercury age', () => { 
  //   expect(spaceAge).toBeDefined()
  // })
  // test ('turns earth age into venus age', () => { 
  //   expect(spaceAge).toBeDefined()
  // })
  // test ('turns earth age into mars age', () => { 
  //   expect(spaceAge).toBeDefined()
  // })
  // test ('turns earth age into jupiter age', () => { 
  //   expect(spaceAge).toBeDefined()
  // })
  // test ('should tell user how many years they have left', () => { 
  //   expect(spaceAge).toBeDefined()
  // })
  // test ('if older then expectancy, return number of years theyve exceeded.', () => { 
  //   expect(spaceAge).toBeDefined()
  // })
})