const request = require('request')

base_url = 'http://localhost:3031'

describe('Bikes Node Service', () => {
    describe("GET /bikes/all/Durham", () => {
        it('Should get list of bikes', (done) => {
            request.get(base_url + '/bikes/all/Durham', (err, res, body) => {
                expect(res.statusCode).toBe(200)
                expect(body).toContain("Mamba Sport 12")
                expect(body).toContain("DJ Fat Bike 500W")
                done()
            })
        })
        it('should send 400 on malformed location', (done) => {
            request.get(base_url + '/bikes/all/NDAIRFHUAFHIRF', (err, res, body) => {
                expect(res.statusCode).toBe(400)
                done()
            })
        })
    })
})