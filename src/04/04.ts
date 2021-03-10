import React from 'react';

const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 19;
}

const oldAges = [100];

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]

// < 160
const chipPredicate = (course: CourseType) => {
    return course.price < 160;
}

const chipCourses = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150}
]