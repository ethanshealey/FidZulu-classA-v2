const request = require('request')
const fs = require('fs')

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
    describe('POST /toy/add', () => {
        it('should add a toy', (done) => {
            const toy = {
                "name": "Test toy",
                "brand": "Test Brand",
                "age-group": "0 to 3",
                "prize": 13.99
            }
            request.post({
                headers: { 'content-type': 'application/json' },
                url: base_url + '/toys/add',
                body: JSON.stringify(toy)
            }, (err, res, body) => {
                expect(body).toContain("Test toy")
            })
            fs.readFile('./data/Toysjson.json', (err, data) => {
                let json = JSON.parse(data)
                json = json.filter(t => t.name !== "Test toy")
                //console.log(json)
                setTimeout(() => {
                    fs.writeFile('./data/Toysjson.json', JSON.stringify(json), (err) => { console.log(err) })    
                }, 2000)
            })
            done()
        })
    })
})