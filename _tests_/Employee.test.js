const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("initialization", () => {
    it("should return a name", () => {
        const name = "John";
        const obj = new Employee(name, 25, "email@email.com")
        expect(obj.getName()).toBe(name);
    })
    it("should return an id", () => {
        const num = 25;
        const obj = new Employee("John", num, "email@email.com")
        expect(obj.getId()).toBe(num);
    })
    it("should return an email", () => {
        const email = "email@email.com";
        const obj = new Employee("John", 25, email)
        expect(obj.getEmail()).toBe(email);
    })
    it("should return office num", () => {
        const obj = new Employee("John", 25, "email@email.com")
        expect(obj.getRole()).toBe("Employee");
    })

})
})