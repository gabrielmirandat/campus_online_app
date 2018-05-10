import React, { Component } from 'react'
import styled from 'styled-components'
import { withPostsFilterBy, inCategory, sortByDate } from 'nextein/posts'
import withPost, { Content } from 'nextein/post'
import Link from 'nextein/link'

import Layout from '../components/Layout'


const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: 300;
`

const DatePosted = styled.div`
	font-weight: 600;
	font-size: 0.75rem;
	text-transform: uppercase;
	color: #888;
`

const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0.5rem -0.25rem;
`

const Tag = styled.div`
	display: inline-block;
	display: inline-flex;
	font-size: 0.75rem;
	padding: 0.25rem 0.75rem;
	border-radius: 1rem;
	background: #dadbdc;
	margin: 0 0.25rem;
`



class Post extends Component {
	render() {
		const { post, posts } = this.props
		const { data, content } = post

		const currIdx = posts.sort(sortByDate).findIndex(p => p.data.date == post.data.date)
		const newer = posts[currIdx - 1]
		const older = posts[currIdx + 1]

		return (
			<Layout>
				<article>
					{data.thumbnail &&
						<img style={{width:'100%'}} src={data.thumbnail}/>
					}
					<Title>{data.title}</Title>
					<DatePosted>{`${new Date(data.date).toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`}</DatePosted>
					{data.tag &&
						<Tags>
							{data.tag.map(tag =>
								<Tag key={`tag-${tag}`}>{tag}</Tag>
							)}
						</Tags>
					}

					<Content {...post} />

					<nav style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '2rem'}}>
						{newer &&
							<Link {...newer}><a style={{width:'100%'}}> <strong>&lt;</strong> Mais Recente: {newer.data.title}</a></Link>
						}
						{older &&
							<Link {...older}><a style={{width:'100%', textAlign:'right'}}>Mais antigo: {older.data.title} <strong>&gt;</strong> </a></Link>
						}
					</nav>
				</article>
			</Layout>
		)
	}
}

export default withPostsFilterBy()(withPost(Post))
