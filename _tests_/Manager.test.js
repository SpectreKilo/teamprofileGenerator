const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("initialization", () => {
    it("should return a name", () => {
        const name = "John";
        const obj = new Manager(name, 25, "email@email.com", 888)
        expect(obj.getName()).toBe(name);
    })
    it("should return an id", () => {
        const num = 25;
        const obj = new Manager("John", num, "email@email.com", 888)
        expect(obj.getId()).toBe(num);
    })
    it("should return an email", () => {
        const email = "email@email.com";
        const obj = new Manager("John", 25, email, 888)
        expect(obj.getEmail()).toBe(email);
    })
    it("should return office num", () => {
        const officeNumber = 888;
        const obj = new Manager("John", 25, "email@email.com", officeNumber)
        expect(obj.getOfficeNumber()).toBe(officeNumber);
    })
    it("should return role", () => {
        const obj = new Manager("John", 25, "email@email.com", 888)
        expect(obj.getRole()).toBe("Manager");
    })
    

})
})