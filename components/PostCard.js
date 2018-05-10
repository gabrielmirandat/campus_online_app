import Link from 'nextein/link'
import styled from 'styled-components'
import { Content } from 'nextein/post'
import { colors } from '../utils/variables'

import MissingPattern from './MissingPattern'

const Wrapper = styled.div`
	margin-top: 2rem;
	margin-bottom: 2rem;
	text-decoration: none;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	cursor: pointer;
	line-height: 1.5rem;
	width: 100%;
	color: ${colors.base66};
`

const Image = styled.img`
	width: 100%;
	display: block;
`

const Title = styled.h2`
	color: ${colors.base88};
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 300;
`

const DatePosted = styled.div`
	color: ${colors.base44};
	font-weight: 500;
	font-size: 0.75rem;
	line-height: 1rem;
	text-transform: uppercase;
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
	line-height: 1.25rem;
	background: ${colors.base11};
	color: ${colors.base66};
	margin: 0 0.25rem;
`


const PostCard = ({ data, content, excerpt=true }) => {
	const { url, title, date, _entry, tag, page = 'post' } = data
	return (
		<Link href={url}>
			<Wrapper>

				{data.thumbnail
					? <Image src={data.thumbnail}/>
					: <MissingPattern/>
				}

				<Title>{title}</Title>

				<DatePosted>{`${new Date(date).toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`}</DatePosted>

				{tag &&
					<Tags>
						{tag.map(tag =>
						<Tag key={`tag-${tag}`}>{` ${tag}`}</Tag>
						)}
					</Tags>
				}

				<Content data={data} content={content} excerpt={excerpt}/>

			</Wrapper>
		</Link>
	)
}

export default PostCard
