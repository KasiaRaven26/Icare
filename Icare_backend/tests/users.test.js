const mongoose = require("mongoose");
// const { MongoMemoryServer } = require('mongodb-memory-server')
// const mongod = await MongoMemoryServer.create();
const request = require("supertest");
const app = require("../app");
const dotenv = require("dotenv");
// dotenv.config({ path: './../config.env' });
// const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// require("dotenv").config();
dotenv.config({ path: `${__dirname}/../config.env` });
// console.log(process.env.DATABASE)
const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// let mongod = null;

// const dbUrl = mongod.getUri();

beforeEach(async () => {
  await mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /api/v1/users", () => {
  it("should return all users", async () => {
    const res = await request(app).get("/api/v1/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("success");
    expect(res.body.data.usersAll[1].name).toBe("Adam Kirwan");
  });
});

describe("GET api/v1/users/id", () => {
    it("should return the correct user for the given id", async () => {
        const userId = "65c51ced92623913dc6cbfb8";
        const res = await request(app).get(`/api/v1/users/${userId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.data.user.name).toBe("John");    
    });
    it("should refuse the connection when the id is incorrect", async () => {
        const userId = "aaa";
        const res = await request(app).get(`/api/v1/users/${userId}`);
        expect(res.statusCode).toBe(404);
        expect(res.body.status).toBe("fail");    
    })
});


describe("POST /api/v1/users", () => {
    it("should add a user", async () => {
        const res = await request(app).post("/api/v1/users").send({
            name: "John",
            password: "DOG" 
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.status).toBe('success');
        expect(res.body.data.user.name).toBe("John");
        expect(res.body.data.user.password).toBe("DOG");
    });
});



