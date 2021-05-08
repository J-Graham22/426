import React from 'react';
import ButtonComponent from './ButtonComponent';

const Tile = (props: {img: string, title: string; subtitle: string; description: string; link1: string, link2: string, link3: string}) => {
    return (
        <div>
			<div className="box">
				<div>
					<img src={props.img} alt="" />
				</div>
				<div className="content">
					<header className="align-center">
						<p>{props.title}</p>
						<h2>{props.subtitle}</h2>
					</header>
					<p> {props.description} </p>
					<ButtonComponent url={props.link1} text="Demo" />
					<ButtonComponent url={props.link2} text="Download" />
					<ButtonComponent url={props.link3} text="Github" />
				</div>
			</div>
		</div>
    )
}

export default Tile