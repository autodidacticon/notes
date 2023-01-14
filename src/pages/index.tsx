import Head from 'next/head'
import Layout, { Name } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }: {
    allPostsData: {
        date: string
        title: string
        id: string
        summary: string
    }[]
}) {
    return (
        <Layout home>
            <Head>
                <title>{Name}</title>
            </Head>
            <section className={utilStyles.headingMd}>
            {/*
            TODO: write an introduction
            */}
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Thoughts</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title, summary }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small><text>{summary}</text></small>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}