import React from 'react';

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api")
            .then(res => res.json())
            .then(
                json => {
                    this.setState({
                        users: json.results
                    })
                }
            )
    }

    render() {
        return(
            <React.Fragment>
                <tbody>
                    {this.state.users.map(item => (
                        <tr>
                            <td><img src={item.picture.thumbnail}></img></td>
                            <td>{item.login.username}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </React.Fragment>
        )
    }
}

export default Users;