import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {

    const statusClass = isOnline ? css.status_on : css.status_off;
    const avatarClass = isOnline ? css.avatar_on : css.avatar_off;

    return (
        <li className={css.item}>
            <span className={statusClass}></span>
            <img className={avatarClass} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
