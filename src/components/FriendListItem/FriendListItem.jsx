import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
            {isOnline ? (
                <>
                    <span className={css.status_on}></span>
                    <img className={css.avatar_on} src={avatar} alt="User avatar" width="48" />
                </>
            ) : (
                <>
                    <span className={css.status_off}></span>
                    <img className={css.avatar_off} src={avatar} alt="User avatar" width="48" />
                </>
            )}
            <p className={css.name}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
