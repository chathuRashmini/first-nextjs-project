import MeetupList from "../components/meetups/MeetupList"

const DUMMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
        address: '31, Lane1, City1',
        description: 'This is the first meet up in the list'
    },
    {
        id: 'm2',
        title: 'Second meetup',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
        address: '32, Lane2, City2',
        description: 'This is the second meet up in the list'
    },
    {
        id: 'm3',
        title: 'Third meetup',
        image: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
        address: '33, Lane3, City3',
        description: 'This is the third meet up in the list'
    }
]

function HomePage() {
    return (
        <MeetupList meetups={DUMMMY_MEETUPS} />
    )
}

export default HomePage