const request = require('request')
const fs = require('fs')

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
    describe('POST /bikes/add', () => {
        it('should add a bike', (done) => {
            const bike = {
                "name": "Test Bike",
                "brand": "Test Brand",
                "color": "silver",
                "price": 221.36
            }
            request.post({
                headers: { 'content-type': 'application/json' },
                url: base_url + '/bikes/add',
                body: JSON.stringify(bike)
            }, (err, res, body) => {
                expect(body).toContain("Test bike")
            })
            fs.readFile('./data/Bikejson.json', (err, data) => {
                let json = JSON.parse(data)
                json = json.filter(t => t.name !== "Test Bike")
                setTimeout(() => {
                    fs.writeFile('./data/Bikejson.json', JSON.stringify(json), (err) => { console.log(err) })    
                }, 2000)
            })
            done()
        })
    })
})