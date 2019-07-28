import React from 'react';

const Card= (props) => {
	const {name, id,email}=props;
	return(

		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow'>
		
		<div>
			<img src={`https://robohash.org/${id}?200x200'`} alt='Robo card'/>
			<div>	
				<h1>{name}</h1>
				<p>{email}</p>	
			</div>
		</div>
		</div>
		);
}

export default Card;