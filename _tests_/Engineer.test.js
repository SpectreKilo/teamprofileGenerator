const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("initialization", () => {
    it("should return a name", () => {
        const name = "John";
        const obj = new Engineer(name, 25, "email@email.com", "username")
        expect(obj.getName()).toBe(name);
    })
    it("should return an id", () => {
        const num = 25;
        const obj = new Engineer("John", num, "email@email.com", "username")
        expect(obj.getId()).toBe(num);
    })
    it("should return an email", () => {
        const email = "email@email.com";
        const obj = new Engineer("John", 25, email, "username")
        expect(obj.getEmail()).toBe(email);
    })
    it("should return github username", () => {
        const github = "username";
        const obj = new Engineer("John", 25, "email@email.com", github)
        expect(obj.getGithub()).toBe(github);
    })
})
})