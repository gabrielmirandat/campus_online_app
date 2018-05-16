import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import withPosts, { sortByDate } from 'nextein/posts'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import { CardRow } from '../components/CardGrid'
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
		keys: ['data.title', 'data.tags']
	}

	return (
		<Layout>
			{tags &&
				<form>
					{tags.map(tag =>
						<label key={tag} htmlFor={`filter-${tag}`}> {tag}
							<input id={`filter-${tag}`} type='checkbox' value={tag}/>
						</label>
					)}
				</form>
			}
			<label htmlFor='search'>Search:<InputFilter debounceTime={200} /></label>
			{postList &&
				<CardRow>
					<FilterResults items={postList} fuseConfig={fuseConfig}>
						{posts => posts.map(post =>
							<PostCard key={post.data.url} {...post} size={1}/>
						)}
					</FilterResults>
				</CardRow>
			}
		</Layout>
	)
}

export default withPosts(Posts)
