const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("initialization", () => {
    ("should return a name", () => {
        const name = "John";
        const obj = new Intern(name, 25, "email@email.com", "schoolname")
        expect(obj.getName())
    })
    })
})