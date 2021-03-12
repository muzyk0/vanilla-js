export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type Company = { id: number, title: string }
export type WithCompaniesType = {
    companies: Array<Company>
}

export function makeHairstyle(u: UserType, power: number) {
    return {
        ...u,
        hair: u.hair / power,
    }
    /*const copy = {
        ...u,
        hair: u.hair / power,
        address: {...u.address}
    }*/
    //copy.hair = u.hair / power

}

export const moveUser = (user: UserWithLaptopType, city: string) => {
    return {
        ...user, //Shallow copy
        address: {...user.address, title: city}
    }
}

export const moveUserToOtherHouse = (user: UserWithLaptopType & UserWithBooksType, house: number) => {
    return {
        ...user, //Shallow copy
        address: {...user.address, house: house}
    }
}

export const upgradeUserLaptop = (user: UserWithLaptopType, laptop: string) => {
    return {
        ...user,
        laptop: {...user.laptop, title: laptop}
    }
}

export const addNewBookToUser = (user: UserWithLaptopType & UserWithBooksType, book: string) => {
    return {
        ...user,
        books: [...user.books, book]
    }
}
export const addNewBooksToUser = (user: UserWithLaptopType & UserWithBooksType, books: Array<string>) => {
    return {
        ...user,
        books: [...user.books, ...books]
    }
}

export const updateBook = (user: UserWithLaptopType & UserWithBooksType, book: string, newBook: string) => {
    const copy = {
        ...user,
        books: user.books.map(b => b === book ? newBook : b)
    }
    return copy
}
export const updateNum = (user: UserWithLaptopType & UserWithBooksType, oldN: string, newN: string) => {
    return {
        ...user,
        books: user.books.map(n => n === oldN ? newN : n)
    }
}

export const removeBook = (user: UserWithLaptopType & UserWithBooksType, book: string) => {
    return {
        ...user,
        // books: user.books.map(b => b).filter(f => (f !== book))
        books: user.books.filter(b => (b !== book))
    }
}

export const newCompany = (user: UserWithLaptopType & WithCompaniesType, company: Company) => {
    return {
        ...user,
        companies: [...user.companies, company]
    }
}

export const updateCompany = (user: WithCompaniesType, id: number, company: string) => {
    return {
        ...user,
        companies: user.companies.map(c =>
            c.id === id ? {...c, title: company} : c)

        // full
        /*companies: user.companies.map(c => {
            if (c.id === id) {
                return {...c, title: company}
            } else return c
        })*/
    }
}

export const updateCompanyObject = (companies: { [key: string]: Array<Company> },
                                    userName: string,
                                    companyID: number,
                                    newTitle: string) => {
    let companiesCopy = {...companies}
    companiesCopy[userName] = companiesCopy[userName].map(c => c.id === companyID ? {...c, title: newTitle} : c)

    return companiesCopy
}