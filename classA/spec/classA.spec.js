const request = require("request")

const base_url = "http://localhost:3021"

describe("Class Middlware Service", () => {
    /**
     * GET BIKES
     */
    describe("GET /classA/bikes/all/Durham", () => {
        it('Should be a 200 response', (done) => {
            request.get(base_url + '/classA/bikes/all/Durham', (err, res, body) => {
                expect(res.statusCode).toBe(200)
                done()
            })
        })
        it('Should find all bikes', (done) => {
            request.get(base_url + '/classA/bikes/all/Durham', (err, res, body) => {
                expect(body).toContain("Mamba Sport 12")
                expect(body).toContain("DJ Fat Bike 500W")
                done()
            })
        })
    })
    describe("GET /classA/bikes/all/NNNNNN", () => {
        it('Should be a 400 response', (done) => {
            request.get(base_url + '/classA/bikes/all/NNNNNN', (err, res, body) => {
                expect(res.statusCode).toBe(400)
                done()
            })
        })
    })
    /**
     * GET FOODS
     */
    describe("GET /classA/foods/all/Durham", () => {
        it('Should be a 200 response', (done) => {
            request.get(base_url + '/classA/foods/all/Durham', (err, res, body) => {
                expect(res.statusCode).toBe(200)
                done()
            })
        })
        it('Should find all foods', (done) => {
            request.get(base_url + '/classA/foods/all/Durham', (err, res, body) => {
                expect(body).toContain("The Original Sandwich")
                expect(body).toContain("Beef Ravioli")
                done()
            })
        })
    })
    describe("GET /classA/foods/all/NNNNNN", () => {
        it('Should be a 400 response', (done) => {
            request.get(base_url + '/classA/foods/all/NNNNNN', (err, res, body) => {
                expect(res.statusCode).toBe(400)
                done()
            })
        })
    })
    /**
     * GET TOYS
     */
     describe("GET /classA/toys/all/Durham", () => {
        it('Should be a 200 response', (done) => {
            request.get(base_url + '/classA/toys/all/Durham', (err, res, body) => {
                expect(res.statusCode).toBe(200)
                done()
            })
        })
        it('Should find all toys', (done) => {
            request.get(base_url + '/classA/toys/all/Durham', (err, res, body) => {
                expect(body).toContain("Medical Kit")
                expect(body).toContain("Rock-a-Stack")
                done()
            })
        })
    })
    describe("GET /classA/toys/all/NNNNNN", () => {
        it('Should be a 400 response', (done) => {
            request.get(base_url + '/classA/toys/all/NNNNNN', (err, res, body) => {
                expect(res.statusCode).toBe(400)
                done()
            })
        })
    })
})