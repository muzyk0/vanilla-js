import React from 'react';
import {UserType} from './10_01';



function hairdresser(u: UserType, power: number) {
    u.hair = u.hair / power
}

test('reference type test', () => {

    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

    hairdresser(user, 2)

    expect(user.hair).toBe(16)

})