const request = require('request')

base_url = 'http://localhost:3033'

describe('toys Node Service', () => {
    describe("GET /toys/all/Durham", () => {
        it('Should get list of toys', (done) => {
            request.get(base_url + '/toys/all/Durham', (err, res, body) => {
                expect(res.statusCode).toBe(200)
                expect(body).toContain("Medical Kit")
                expect(body).toContain("Stack Up Cups")
                done()
            })
        })
        it('should send 400 on malformed location', (done) => {
            request.get(base_url + '/toys/all/NDAIRFHUAFHIRF', (err, res, body) => {
                expect(res.statusCode).toBe(400)
                done()
            })
        })
    })
})