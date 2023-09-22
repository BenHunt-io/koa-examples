import ApplicationDriver from '../../src/deploy/driver/ApplicationDriver.js';


describe("User integration tests", () => {

    let appDriver;

    beforeEach(async () => {
        appDriver = new ApplicationDriver();
        await appDriver.start();
    });

    afterEach(async () => {
        await appDriver.stop();
    })

    test("Create user test", async () => {

        let createUserResponse = await fetch("http://localhost:3000/user", {
            method : 'POST',
            headers: {
                'Content-Type' : "application/json;charset=utf8"
            },
            body: JSON.stringify({
                firstName : "John",
                lastName:  "Smith",
                email: "jsmith@gmail.com",
                password: "1234",
                friends: [],
            })
        })
        .then(userResponse => userResponse.json())
        .catch(res => console.log(res));
    
        let expectedUser = {
            id: 1,
            firstName : "John",
            lastName:  "Smith",
            email: "jsmith@gmail.com",
            password: "1234",
            friends: []
        }

        expect(createUserResponse).toEqual(expectedUser);

        let getUserResponse = await fetch("http://localhost:3000/user/1")
            .then(userResponse => userResponse.json());

        expect(getUserResponse).toEqual(expectedUser);
    })


}, 5000)