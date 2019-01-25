import React from 'react';

const Card = ({ id , name, email }) => {
		return(
			<div className='card bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 w5 tc' >
				<img alt='Cat' src={`https://robohash.org/${ id + 72}?size=200x200&set=set4`} />
				<div>
					<h2>{ name }</h2>
					<p>{ email }</p>
				</div>
			</div>
		)
}

export default Card;