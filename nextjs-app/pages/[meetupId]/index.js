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

export async function getStaticPath() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm5',
                }
            },
            {
                params: {
                    meetupId: 'm6',
                }
            }
        ]
    }
}

export async function getStaticProps(context) {

    const { meetupId } = context.param;

    return {
        props: {
            meetupData: {
                image: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
                id: meetupId,
                title: 'Our fifth meetup',
                address: '305, Lane no. 05, Town 05.',
                description: 'Here goes the details of our meeting.'
            }
        }
    }
}

export default MeetupDetails
