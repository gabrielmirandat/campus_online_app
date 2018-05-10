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
				<h2 style={{fontSize: '3rem', lineHeight: '3.5rem', marginTop: '6rem'}}>Última matéria</h2>
				{postList.slice(0,1).map((post, index) =>
					<PostCard {...post}/>
				)}

				<h2 style={{fontSize: '3rem', lineHeight: '3.5rem', marginTop: '6rem'}}>Matéria mais recentes</h2>
				<Row style={{alignItems: 'stretch'}}>
					{postList.slice(1,3).map((post, index) =>
						<Cell key={index} sm={6}><PostCard {...post}/></Cell>
					)}
				</Row>

				<Link href='/posts'>
					<a href='/posts' style={{fontSize: '1.5rem', lineHeight: '2rem', marginTop: '3rem', color: 'currentColor'}}>Ver todas as {postList.length} matérias</a></Link>
			</Layout>
		</main>
	)
}

export default withPosts(Index)
