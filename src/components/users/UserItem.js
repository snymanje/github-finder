import React, { Component } from 'react'

class UserItem extends Component {

    state = {
        id: 1,
        login: 'snymanje' ,
        avatar_url: 'https://avatars2.githubusercontent.com/u/44743839?s=400&u=9cfdb39f3abc1ef6cf1e36f11c8e3d654ee8f424&v=4,',
        html_url: 'https://github.com/snymanje'
    }
    render() {
        const { login, avatar_url, html_url } = this.state;
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{width: '60px'}}/>
                <h3>{login}</h3>
                <div><a href={html_url} className="btn btn-dark btn-sm my-1">More</a></div>
            </div>
        )
    }
}

export default UserItem
