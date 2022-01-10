import { Fragment } from 'react'
import Link from 'next/link'

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href='/news/nextjs-framework'>
                        NextJS is a great framework to work with.
                    </Link>
                </li>
            </ul>
        </Fragment>
    )
}

export default NewsPage