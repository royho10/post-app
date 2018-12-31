import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	componentWillMount() {
		console.log('this would be a good time to call an action to fetch posts');
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>List of blog posts</div>
		);
	}
}


export default connect (null, { fetchPosts })(PostsIndex);