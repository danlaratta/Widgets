import React from 'react';
import Accordion from './components/Accordion';

// array of items
const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite js library among engineers'
    },
    {
        title: 'How to use React?',
        content: 'You use React by creating componoents'
    }
];

export default () => {
    return(
        <div>     
            {/* prop item passes the array called items to the Accordian Component */}
            <Accordion items={items} />
        </div>
    );
};