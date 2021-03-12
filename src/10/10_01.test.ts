import {makeHairstyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from './10_01';



test('reference type test', () => {

    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)

})
test('change address', () => {

    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        }
    }

    const movedUser = moveUser(user, 'Moscow')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.address.city).not.toBe('Kiev')
})

test('upgrade laptop to macbook', () => {

    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        }
    }

    const userCopy = upgradeUserLaptop(user, 'macbook')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop.title).not.toBe('macbook')
})