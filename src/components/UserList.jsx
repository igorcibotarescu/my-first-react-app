import UserItem from "./UserItem";
import {Component} from 'react';

class UserList extends Component{
    render(){
        const {users} = this.props;
        return(
            <div className="">
                <p>User's List</p>
                {users.map(item => <UserItem item = {item} key = {item.id}/>)}
            </div>
        )
    }
}

export default UserList;