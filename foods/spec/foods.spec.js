const request = require('request')
const fs = require('fs')

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
    describe('POST /foods/add', () => {
        it('should add a food', (done) => {
            const food = {
                "name": "Test food",
                "brand": "Test brand",
                "weight": "57g",
                "calories": 525,
                "price": 5.87
            }
            request.post({
                headers: { 'content-type': 'application/json' },
                url: base_url + '/foods/add',
                body: JSON.stringify(food)
            }, (err, res, body) => {
                expect(body).toContain("Test food")
            })
            fs.readFile('./data/Foodjson.json', (err, data) => {
                let json = JSON.parse(data)
                json = json.filter(t => t.name !== "Test food")
                //console.log(json)
                setTimeout(() => {
                    fs.writeFile('./data/Foodjson.json', JSON.stringify(json), (err) => { console.log(err) })    
                }, 2000)
            })
            done()
        })
    })
})