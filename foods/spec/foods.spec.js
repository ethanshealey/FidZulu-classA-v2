const request = require('request')

base_url = 'http://localhost:3032'

describe('foods Node Service', () => {
    describe("GET /foods/all/Durham", () => {
        it('Should get list of foods', (done) => {
            request.get(base_url + '/foods/all/Durham', (err, res, body) => {
                expect(res.statusCode).toBe(200)
                expect(body).toContain("The Original Sandwich")
                expect(body).toContain("Medium Cheddar Cheese")
                done()
            })
        })
        it('should send 400 on malformed location', (done) => {
            request.get(base_url + '/foods/all/NDAIRFHUAFHIRF', (err, res, body) => {
                expect(res.statusCode).toBe(400)
                done()
            })
        })
    })
})