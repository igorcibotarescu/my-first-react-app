import styles from './UserAddForm.module.css'
import { Component } from "react";

class UserAddForm extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            isVIP: ''
        }
    }

    handleName = e => {
        const name = e.target.value;
        this.setState({name});
    }
    handleEmail = e => {
        const email = e.target.value;
        this.setState({email});
    }
    handleVip = e => {
        const isVIP = e.target.checked;
        this.setState({isVIP});
    }
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            isVIP: this.state.isVIP
        }
        this.props.onUserCreated(newUser);
        this.setState({name: '', email: '', isVIP: ''})
    }
    render(){
        return(
            <div className={styles['user-add-form']}>
            <h2 className={styles['h2-form']}>Here you can add users:</h2>
            <form onSubmit={e => this.onSubmit(e)}>
                <label>Name:</label>
                <br/>
                <input
                className={styles['input-form']}
                type='text' 
                placeholder='Name'
                onChange={e => this.handleName(e)}
                value = {this.state.name}
                required
                />
                <br/>
                <label>Email</label>
                <br/>
                <input 
                className={styles['input-form']}
                type='text' 
                placeholder='Email'
                onChange={e => this.handleEmail(e)}
                value = {this.state.email}
                required
                />
                <br/>
                <label>VIP</label>
                <input 
                className={styles['input-form']}
                type='checkbox'
                onChange={e => this.handleVip(e)}
                checked = {this.state.isVIP}
                />
                <br/>
                <button type='submit' className={styles['button-form']}>Submit</button>
            </form>
            </div>
            )
    }
}
export default UserAddForm;