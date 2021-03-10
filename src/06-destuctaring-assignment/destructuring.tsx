import React from 'react';

type LessonType = {
    title: string
    name?: string
}
type AddressStreetType = string
export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        street: {
            title: AddressStreetType
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {modal: string}
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    //const {title, man, ...restProps} = props;

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.car.modal}
        </div>
        <div>
            {man.name}
        </div>
    </div>
}