import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import withPosts, { sortByDate } from 'nextein/posts'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import { Row, Cell } from '../components/Grid'
import { Content } from 'nextein/post'
import Link from 'nextein/link'
import fuzzyFilterFactory from 'react-fuzzy-filter';

// these components share state and can even live in different components
const {InputFilter, FilterResults} = fuzzyFilterFactory();


const unique = (arr) => {
	return [...new Set(arr)]
}

const selectTag = (event) =>
	selectedTags.push(event.target.value)


const Posts = ({ posts }) => {
	const postList = posts.sort(sortByDate)

	const tags = unique(posts
		.filter(p => p.data.tag) // remove posts without tags
		.map(post => [].concat(post.data.tag)) // tags to array
		.reduce((c, p = []) => p.concat(...c)) // flatten array
		.sort()
	)




	const fuseConfig = {
		shouldSort: true,
		tokenize: true,
		matchAllTokens: true,
		findAllMatches: true,
		threshold: 0.4,
		location: 0,
		distance: 64,
		maxPatternLength: 16,
		minMatchCharLength: 2,
		keys: ['data.title', 'data.tag']
	}

	return (
		<Layout>
			{tags &&
				<form>
					{tags.map((tag, idx) =>
						<label key={`label-${idx}`} htmlFor={tag}> {tag}
							<input key={`input-${idx}`} id={tag} type='checkbox' value={tag} key={`tag-${tag}`}/>
						</label>
					)}
				</form>
			}
			<label htmlFor='search'>Search:<InputFilter debounceTime={200} /></label>
			{postList &&
				<Fragment>
					<Row>
						<FilterResults items={postList} fuseConfig={fuseConfig}>
								{filteredItems =>
									filteredItems.map((post, index) => <Cell key={index} sm={6} lg={4} xg={3}><PostCard {...post}/></Cell>)
								}
						</FilterResults>
					</Row>
				</Fragment>
			}
		</Layout>
	)
}

export default withPosts(Posts)
