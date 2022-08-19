import { ObjectId } from "mongodb";

import User from "../../src/models/User";

export const user1 = new User({
    firstname: 'Suraj',
    lastname: 'Mishra',
    username: 'surajmishra',
    email: 'mishrasur7@gmail.com',
    password: 'password',
    address: new ObjectId(),
    phonenumber: '+358440778001',
    reviews: new ObjectId()
})

export const user2 = new User({
    firstname: 'Surajj',
    lastname: 'Mishraa',
    username: 'surajmishra',
    email: 'mishrasurr7@gmail.com',
    password: 'passwordd',
    address: new ObjectId(),
    phonenumber: '+358440778002',
    reviews: new ObjectId()
})

export const user3 = new User({
    firstname: 'Surajjj',
    lastname: 'Mishraaa',
    username: 'surajmishraaa',
    email: 'mishrasurrr7@gmail.com',
    password: 'passworddd',
    address: new ObjectId(),
    phonenumber: '+358440778003',
    reviews: new ObjectId()
})