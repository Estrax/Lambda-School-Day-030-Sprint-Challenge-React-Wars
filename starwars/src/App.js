import React, { Component } from 'react';
import './App.css';
import StarWars from './components/StarWars';
import CharacterAttributes from './components/CharacterAttributes';
import PageButtons from './components/PageButtons';

class App extends Component {
	constructor() {
		super();
		this.state = {
			starwarsChars: [],
			currentChar: {},
			prevData: undefined,
			nextData: undefined
		};

		this.clickOnName = this.clickOnName.bind(this);
		this.clickButtonPrev = this.clickButtonPrev.bind(this);
		this.clickButtonNext = this.clickButtonNext.bind(this);
	}

	componentDidMount() {
		this.getCharacters('https://swapi.co/api/people');
	}

	getCharacters = URL => {
		// feel free to research what this code is doing.
		// At a high level we are calling an API to fetch some starwars data from the open web.
		// We then take that data and resolve it our state.
		fetch(URL)
			.then(res => {
				return res.json();
			})
			.then(data => {
				this.setState({
					starwarsChars: data.results,
					prevData: data.previous,
					nextData: data.next
				});
			})
			.catch(err => {
				throw new Error(err);
			});
	};

	clickOnName(event) {
		let username = event.target.innerText;
		this.setState({
			...this.state,
			currentChar: this.state.starwarsChars.filter(elem => elem.name===username)[0]
		});
	}

	clickButtonPrev(event) {
		return this.getCharacters(this.state.prevData);
	}

	clickButtonNext(event) {
		return this.getCharacters(this.state.nextData);
	}

	render() {
		return (
			<div className="App">
				<h1 className="Header">React Wars</h1>
				<StarWars characters={this.state.starwarsChars} clickOnName={this.clickOnName} />
				<PageButtons prevDisabled={this.state.prevData === null || this.state.prevData === undefined} buttonPrev={this.clickButtonPrev} nextDisabled={this.state.nextData === null || this.state.nextData === undefined} buttonNext={this.clickButtonNext} />
				<CharacterAttributes character={this.state.currentChar} />
			</div>
		);
	}
}

export default App;
