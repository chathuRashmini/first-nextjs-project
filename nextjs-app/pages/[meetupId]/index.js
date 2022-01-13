import { Fragment } from 'react'

function MeetupDetails() {

    return (
        <Fragment>
            <img 
                src='https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' 
                alt='Our Meetup'
            />
            <h1>Our first meetup</h1>
            <address>301, Lane no. 01, Town 01.</address>
            <p>Here goes the details of our meeting.</p>
        </Fragment>
    )
}

export default MeetupDetails
