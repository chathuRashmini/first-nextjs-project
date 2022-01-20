import MeetupList from "../components/meetups/MeetupList"
import { MongoClient } from 'mongodb'

function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups} />
    )
}

export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://nextjs_user:nextjsCluster@cluster0.ha1ec.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find().toArray()

    client.close()

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 10
    };
}

// export async function getServerSideProps(context) {
//     //run for every incoming request
//     const req = context.req
//     const res = context.res

//     // fetch data from APIs
//     return {
//         props: {
//             meetups: DUMMMY_MEETUPS
//         },
//     }
// }

export default HomePage