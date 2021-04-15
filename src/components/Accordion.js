import React, { useState } from 'react';

// items prop is the array called items passed from App.js to this component
const Accordion = ({ items }) =>{

    // useState/Hook intially set to null
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) =>{
        // sets the state of setActiveIndex to value of the index depending on which title is clicked
        setActiveIndex(index)
    }

    // map function loops through items array and displays the list of elemets in JSX (hence the return keyword)
    const renderedItems = items.map((item, index) => {
        /* determines which div is active then adds this variable to the className of the div which
           will dropdown to display content */
        const active = index === activeIndex ? 'active' : '';

        return(
            /* sets top level element key as the title (since it is currently unique) being returned since every element 
               inside of a list of JSX elements needs to have a key property 
               
               NOTE: had to replace div with React.Fragment is only used becasue of semantic ui's (which in head tag of 
                     public/index.html) strict way of doing things, if you leave the div tag it adds a double border on the top
                     line of the border and this is how you remove it
               */
            <React.Fragment key={item.title}>
                {/* {`title ${active}`} expression uses the active var created above to determine active div */}
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className='dropdown icon'>  </i> 
                    {item.title}
                </div>

                {/* {`content ${active}`} expression uses the active var created above to determine active div
                    which in turn will expand/open and display the content */}
                <div className={`content ${active}`}>
                    <p> {item.content} </p>
                </div>
            </React.Fragment>
        );
    });

    return(
        <div className='ui styled accordion'>
            {renderedItems}
            <h1> {activeIndex} </h1>
        </div>
    );
};

export default Accordion;
