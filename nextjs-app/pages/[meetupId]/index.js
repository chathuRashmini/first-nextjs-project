import { Fragment } from 'react'
import { MongoClient, ObjectId } from 'mongodb'

function MeetupDetails(props) {

    return (
        <Fragment>
            <img 
                src={props.meetupData.image} 
                alt={props.meetupData.title}
            />
            <h1>{props.meetupData.title}</h1>
            <address>{props.meetupData.adddress}</address>
            <p>{props.meetupData.description}</p>
        </Fragment>
    )
}

export async function getStaticPath() {

    const client = await MongoClient.connect('mongodb+srv://nextjs_user:nextjsCluster@cluster0.ha1ec.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray()

    client.close()

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {
                meetupId : meetup._id.toString()
            }
        }))
    }
}

export async function getStaticProps(context) {

    const { meetupId } = context.param;

    const client = await MongoClient.connect('mongodb+srv://nextjs_user:nextjsCluster@cluster0.ha1ec.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')

    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) }).toArray()

    client.close()

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetupDetails
