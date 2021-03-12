import React from 'react';

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

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power,
    }
    /*const copy = {
        ...u,
        hair: u.hair / power,
        address: {...u.address}
    }*/
    //copy.hair = u.hair / power
    return copy
}

export const moveUser = (user: UserWithLaptopType, city: string) => {
    return {
        ...user, //Shallow copy
        address: {...user.address, title: city}
    }
}

export const upgradeUserLaptop = (user: UserWithLaptopType, laptop: string) => {
    return {
        ...user,
        laptop: {...user.laptop, laptop: laptop}
    }
}