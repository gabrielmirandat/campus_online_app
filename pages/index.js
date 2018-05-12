import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import withPosts, { sortByDate } from 'nextein/posts'
import PostCard from '../components/PostCard'
import { Content } from 'nextein/post'
import { Row, Cell } from '../components/Grid'



const Index = ({ posts }) => {
	const postList = posts.sort(sortByDate)
	return (
		<main>
			<Head>
				{/* <link type="text/css" rel="stylesheet" href="/static/stylesheet.css" /> */}
			</Head>

			<Layout>
				<h2 style={{fontSize: '3rem', lineHeight: '3.5rem', marginTop: '6rem', marginBottom: '2rem'}}>Matérias</h2>
				{postList &&
					<div style={{margin: '-6px -6px'}}>
						{postList.slice(0,3).map((post, index) =>
							<PostCard {...post}/>
						)}
					</div>
				}

				<Link href='/posts'>
					<a href='/posts' style={{display: 'block', fontSize: '1.5rem', lineHeight: '2rem', marginTop: '3rem', color: 'currentColor'}}>Ver todas as {postList.length} matérias</a></Link>
			</Layout>
		</main>
	)
}

export default withPosts(Index)
