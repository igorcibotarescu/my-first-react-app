import {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './UserItem.module.css'

function UserItem({item}){
    const [color,setColor] = useState('black');
    const {name,email,isVIP} = item;
    return(
        <>
            <h2 className={styles['h2-form']}>User:</h2>
            <h3 style={{color}}>{name}</h3>
            <p style={{color}}>{email}</p>
            <h4 className={isVIP ? styles['vip-user'] : styles['standard-user']}>
                {isVIP ? 'VIP' : 'Not VIP'}</h4>
            <button onClick={() => setColor('blue')}>Change color</button>
        </>
    )
}

UserItem.propTypes = {
    isVIP: PropTypes.bool.isRequired
}

UserItem.defaultProps = {
    isVIP: false
}
export default UserItem;