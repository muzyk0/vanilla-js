import {
    addNewBooksToUser, addNewBookToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, newCompany, removeBook, updateBook, updateCompany, updateCompanyObject, updateNum,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10_01';


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
    expect(userCopy.laptop.title).toBe('macbook')
    expect(user.laptop.title).toBe('Asus')
})

test('upgrade laptop to macbook', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})

test('add new book to user', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBookToUser(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
})

test('add new books to user', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')
})

test('update js to ts', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test('update num', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['1', '10', '50', '99']
    }

    const userCopy = updateNum(user, '10', '100')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[1]).toBe('100')
})

test('remove js book', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})

test('company ', () => {

    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'it-incubator'}, ]
    }

    const userCopy = newCompany(user, {id: 3, title: 'it-kamasutra'})

    expect(userCopy.companies).not.toBe(user.companies)
    expect(userCopy.companies.length).toBe(3)
    expect(userCopy.companies[2].title).toBe('it-kamasutra')
})

test('update Company', () => {

    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'it-incubator'} ]
    }

    const userCopy = updateCompany(user, 1, 'EPAM')
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(user.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')

})

test('update Company', () => {
    let companies = {
        'Dimych': [{id: 1, title: 'Epam'}, {id: 2, title: 'it-incubator'} ],
        'Vlad': [{id: 1, title: 'it-incubator'} ]
    }

    const copy = updateCompanyObject(companies, 'Dimych', 1, 'EPAM')
    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Vlad']).toBe(companies['Vlad'])
    expect(copy['Dimych'][0].title).toBe('EPAM')

})