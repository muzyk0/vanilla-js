import React from 'react';
const increaseAge = (u: UserType) => {
    u.age++
}
type UserType = {
    name: string
    age: number
    address: {
        title: string }
}

test('big reference type test', () => {

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user;

    superman.age = 1000;

    expect(user.age).toBe(1000)

})

test('array reference test', () => {

    const users: any = [
        {name: 'Dimych', age: 32,},
        {name: 'Dimych', age: 32,},
        ]

    const admins = users

    admins.push({name: 'Bandyugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})

})

test('value type test', () => {

    let usersCount = 100;

    let adminsCount = usersCount

    // adminsCount = adminsCount + 1;
    adminsCount++;


})

test('big reference type test', () => {
    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    let addr = user.address

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    address.title = 'Kanary';
    expect(user2.address).toBe(user2.address)
    expect(user2.address.title).toBe('Kanary')

})

test('big reference type array test', () => {
    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Katya', age: 18, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry';

    address.title = 'Kanary';
    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')

})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z','e']

    letters.sort()

    passportist(letters)

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})

function passportist(letters:any) {
    const copy = [...letters].sort()
    console.log(copy)
}