import React, { useContext, useState, Fragment } from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import { getClassName } from '../../services/Utils';
import Avatar from '../avatar';
import MobileContext from '../../context/MobileContext';
import UpDownChevron from '../UpDownChevron';
import Backdrop from '../Backdrop';
import Options, { OptionItem } from '../options';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  userName: {},
  userAvatar: {
    marginLeft: '10px',
  },
  options: {},
};

const ProfileMenu = (props) => {
  const {
    className,
    classes,
    user,
    actions,
  } = props;
  const rootClasses = getClassName([
    className,
    classes.root,
  ]);
  const { isMobile } = useContext(MobileContext);
  const [isOpen, setOpenState] = useState(false);

  return (
    <div className={rootClasses}>
      { !isMobile && <div className={classes.userName}>{user.name}</div> }
      <Avatar
        className={classes.userAvatar}
        url={user.avatarUrl}
        size='sm'
      />
      <UpDownChevron
        onClick={() => setOpenState(!isOpen)}
      />
      { isOpen
        && <Fragment>
          <Options className={classes.options}>
            {(actions || []).map((option, key) => (
              <OptionItem
                key={key}
                {...option}
              />
            ))}
          </Options>
          <Backdrop
            onClick={() => setOpenState(false)}
          />
        </Fragment>
      }
    </div>
  );
};

ProfileMenu.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  user: PropTypes.object,
  actions: PropTypes.array,
};

export default withStyles(styles)(ProfileMenu);
