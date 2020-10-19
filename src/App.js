import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layouts/Alert'
import './App.css';
import Axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }
  async componentDidMount() {
    this.setState({loading: true})
    const res = await Axios.get(`https://api.github.com/users?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({loading: false, users: res.data})
  }

  searchUsers = async (text) => {
    this.setState({loading: true})
    const res = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({loading: false, users: res.data.items})
  }

  clearUsers = () => {
    this.setState({loading: false, users: []})
  }

  setAlert = (msg, type) => {
    this.setState({ alert: {msg, type} })
    setTimeout(() => {
      this.setState({ alert: null})
    }, 5000);
  }

  render() {
    const { users, loading } = this.state
    return (
      <div className="App">
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} userCount={users.length} setAlert={this.setAlert}/>
          <Users users={users} loading={loading}/>
        </div>
      </div>
    );
  }
}

export default App;
