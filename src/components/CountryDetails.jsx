import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box, IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const useStyles = makeStyles({
  root: {
    margin: 'auto',
    marginTop: '50px',
    maxWidth: '600px',
    padding: '40px',
  },
  close: {
    height: '40px',
    width: '40px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  media: {
    height: '200px',
    width: '300px',
  },
  nameBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export const CountryDetails = () => {
  const classes = useStyles();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  const handleClickBack = () => {
    localStorage.removeItem('country', JSON.stringify(country))
    navigate(`/`);
  };


useEffect(() => {
    setCountry(JSON.parse(localStorage.getItem('country')))
}, []);

  return (
        <Card className={classes.root}>
            {!country ? 
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Country not found!
                    </Typography> 
                </CardContent>
            :
                <>
                    <Box className={classes.container}>
                        <IconButton className={classes.close} onClick={handleClickBack}>
                            <ArrowBackIosIcon />
                        </IconButton>

                        <CardMedia
                            component="img"
                            className={classes.media}
                            image={`https://flagcdn.com/${(country?.cca2)?.toLowerCase()}.svg`}
                            title={country?.name?.common}
                            alt={country?.name?.common}
                        />

                        <CardContent>
                            <Box className={classes.nameBox}>
                                <Typography gutterBottom variant="h5" component="h2">
                                {country?.name?.common}
                                </Typography>

                                {country?.checked && <CheckIcon />}
                            </Box>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Country code: <span style={{ fontWeight: 'bold' }}>{country?.cca2}</span>
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Capital: <span className={classes.boldText}>{country?.capital}</span>
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Continent: <span className={classes.boldText}>{country?.continents}</span>
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Subregion: <span className={classes.boldText}>{country?.subregion}</span>
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Population: <span className={classes.boldText}>{country?.population} people</span>
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Currency: <span className={classes.boldText}>{country?.currencies[Object.keys(country?.currencies)[0]].name}</span> 
                            </Typography>
                        </CardContent>
                    </Box>                
                </>
            }
        </Card>
  );
};
