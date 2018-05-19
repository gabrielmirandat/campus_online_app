import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import withPosts, { sortByDate } from 'nextein/posts'
import PostCard from '../components/PostCard'
import { Content } from 'nextein/post'
// import { Row, Cell } from '../components/Grid'
import { CardRow } from '../components/CardGrid'
import { fonts } from '../utils/variables'



const Index = ({ posts }) => {
	const postList = posts.sort(sortByDate)
	return (
		<main>
			<Head>
				{/* <link type="text/css" rel="stylesheet" href="/static/stylesheet.css" /> */}
			</Head>

			<Layout>
				<h2 style={{fontFamily: fonts.display, fontSize: '3rem', lineHeight: '3.5rem', marginTop: '6rem', marginBottom: '2rem'}}>Matérias</h2>
				{postList &&
					<CardRow>
						{postList.slice(0,1).map((post, index) =>
							<PostCard key={index} index={index} size={1} {...post}/>
						)}
						{postList.slice(1,3).map((post, index) =>
							<PostCard key={index} index={index} size={0} {...post}/>
						)}
					</CardRow>
				}

				<Link href='/posts'>
					<a href='/posts' style={{fontFamily: fonts.display, display: 'block', fontSize: '1.5rem', lineHeight: '2rem', marginTop: '3rem', color: 'currentColor'}}>Ver todas as {postList.length} matérias</a></Link>
			</Layout>
		</main>
	)
}

export default withPosts(Index)
