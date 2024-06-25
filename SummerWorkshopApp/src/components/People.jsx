import { useState, useEffect } from 'react';

import people from '../people.json'
import Person from './Person'

const People = () => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPeople = async () => {
        try {
            const res = await fetch('http://localhost:8000/people');
            const data = await res.json();
            setPeople(data);
        } catch (error) {
            console.log('Error fetching data', error);
        } finally {
            setLoading(false);
        }
        };

        fetchPeople();
    }, []);


    return (
        <>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold m-3 w-full text-center'>Sand Cherry Employee Directory</h1>
        {loading ? (
            <h1 className='text-center text-3xl'>Loading...</h1>
            ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                {people.map((person) => (
                <Person key={person.id} person={person}/>
                ))}
            </div>
        )}
        </>
    )
}

export default People
