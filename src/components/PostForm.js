import React, { Component } from 'react';

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		}

	}

	render() {
		return (

			<div>
				<h1>Add Post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title:</label> <br />
						<input type="text" name="title" value={this.state.title}
							onChange={this.onChange} />
					</div>
					<br />
					<div>
						<label>Body:</label> <br />
						<textarea name="body" cols="30" rows="10"
							value={this.state.body} onChange={this.onChange}>
						</textarea>
					</div>
					<br />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default PostForm;