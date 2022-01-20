import { MongoClient } from 'mongodb'
import { useRouter } from 'next/router'

async function handler(req, res) {

    const router = useRouter()

    if (req.method === 'POST') {
        const data = req.body

        const client = await MongoClient.connect('')
        
        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)
        console.log('result: ', result)

        client.close()

        res.status(201).json({ message: 'Meetup inserted!'})

        router.push('/')
    }
}

export default handler