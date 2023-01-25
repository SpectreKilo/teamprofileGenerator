const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("initialization", () => {
    it("should return a name", () => {
        const name = "John";
        const obj = new Intern(name, 25, "email@email.com", "SchoolName")
        expect(obj.getName()).toBe(name);
    })
    it("should return an id", () => {
        const num = 25;
        const obj = new Intern("John", num, "email@email.com", "SchoolName")
        expect(obj.getId()).toBe(num);
    })
    it("should return an email", () => {
        const email = "email@email.com";
        const obj = new Intern("John", 25, email, "SchoolName")
        expect(obj.getEmail()).toBe(email);
    })
    it("should return a school", () => {
        const school = "SchoolName";
        const obj = new Intern("John", 25, "email@email.com", school)
        expect(obj.getSchool()).toBe(school);
    })
    it("should return role", () => {
        const obj = new Intern("John", 25, "email@email.com", "SchoolName")
        expect(obj.getRole()).toBe("Intern");
    })

})
})