const {Activity, Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
      it("Arroja un error si dificultad no es numero", (done) => {
        Activity.create({ name: "Turismo", difficulty: "1" })
          .then(() => done(new Error("dificultad no es un numero")))
          .catch(() => done());
      
  it("Arroja un error si duracion no es numero", (done) => {
    Activity.create({ name: "Sedentarismo", duration: '3' })
      .then(() => done(new Error("duracion no es un numero")))
      .catch(() => done());
  
  });
    })

    });
  });
});
