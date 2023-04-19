import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Card, CardActionArea, CardContent, Checkbox, Typography, IconButton, CardActions } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { selectedCountry, deletedCountry } from '../redux/actions/countriesActions';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: '100%',
  },
  actions: {
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 0s, opacity 0.5s ease',
  },
  visible: {
    visibility: 'visible',
    opacity: 1,
  },
  checked: {
    backgroundColor: '#f5f5f5',
  },
});

export const CountryCard = ({country}) => {
  const classes = useStyles();
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    localStorage.setItem('country', JSON.stringify(country))
    navigate(`/country/${country?.cca2}`);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleChecked = () => {
    if (country?.checked) {
      dispatch(deletedCountry(country));
    } else {
      dispatch(selectedCountry(country));
    }
  };

  const handleDeleted = () => {
    dispatch(deletedCountry(country));
  };

  return (
    <Card 
      className={`${classes.root} ${country?.checked ? classes.checked : ''}`}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {country?.name?.common}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {`Country code: ${country?.cca2}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={`${classes.actions} ${isHovering && classes.visible}`}>
        <Checkbox
          onChange={handleChecked}
          checked={country?.checked || false}
          inputProps={{ 'aria-label': 'select country' }}
        />
        <IconButton onClick={handleDeleted}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
