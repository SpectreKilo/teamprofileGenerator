const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("initialization", () => {
    it("should return a name", () => {
        const name = "John";
        const obj = new Manager(name, 25, "email@email.com", "Office Number")
        expect(obj.getName()).toBe(name);
    })
    it("should return an id", () => {
        const num = 25;
        const obj = new Manager("John", num, "email@email.com", "Office Number")
        expect(obj.getId()).toBe(num);
    })
    it("should return an email", () => {
        const email = "email@email.com";
        const obj = new Manager("John", 25, email, "username")
        expect(obj.getEmail()).toBe(email);
    })
    it("should return office num", () => {
        const officeNumber = "Office Number";
        const obj = new Manager("John", 25, "email@email.com", officeNumber)
        expect(obj.getOfficeNumber()).toBe(officeNumber);
    })

    })
})