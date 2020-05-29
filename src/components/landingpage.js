import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							alt="avatar"
							style={{padding: '80px', width: '400', height: '350px'}}
							src="/images/avatar_2.png"
							
						/>
						<div className="banner-text">
							<h1>Huy 'Jonny' Nguyen</h1>
							<hr/>
							<p>JAVA | JavaScript | Bootstrap | HTML/CSS | React</p>
							<div className="social-links">
								{/*LinkedIn*/}
								<a href="https://www.linkedin.com/in/hdnguyen2010" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>
							{/*Github*/}
								<a href="https://github.com/hdnguyen2010" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
        )
    }
}

export default Landing;