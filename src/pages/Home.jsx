import React from 'react';
import styles from '../stylesheets/Home.module.css'
import {lines} from '../data/Home.json';
import Typist from 'react-typist';

function Home() {

	const heroLine = lines[Math.floor(Math.random() * lines.length)];

	return (
		<div className={styles.main}>
			<h1 className={"header"}>
				PSN Hack Club
			</h1>
			<h3 className={"subheader"}>
				<Typist
					avgTypingDelay={50}
					stdTypingDelay={20}
					cursor={{
							show: true,
							blink: true,
							element: '|',
							hideWhenDone: true,
							hideWhenDoneDelay: 500,
						}
					}
				>
					{heroLine}
				</Typist>
			</h3>
		</div>
	);
}

export default Home;