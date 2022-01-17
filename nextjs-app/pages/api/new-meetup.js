import { MongoClient } from 'mongodb'

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body

        const client = await MongoClient.connect('mongodb+srv://nextjs_user:nextjsCluster@cluster0.ha1ec.mongodb.net/meetups?retryWrites=true&w=majority')
        
        const db = client.db()
        db ? console.log('Database connected') : console.log('Database NOT connected')

        const meetupsCollection = db.collection('meetups')
        meetupsCollection ? console.log('Collection created') : console.log('Collection NOT created')

        const result = await meetupsCollection.insertOne(data)
        console.log('result: ', result)

        client.close()

        res.status(201).json({ message: 'Meetup inserted!'})
    }
}

export default handler