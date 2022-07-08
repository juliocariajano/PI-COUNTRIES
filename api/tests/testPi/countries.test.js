const country = require('../../src/controllers/countryController.js')

it('It exists', () =>{
expect(country).toBeDefined()
});

it('the function does not throw errors', () =>{
    const countries = jest.fn(() => true)
    country()
    expect(countries).toHaveReturned()
});

