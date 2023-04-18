import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box, IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const useStyles = makeStyles({
  root: {
    margin: 'auto',
    maxWidth: '600px',
    padding: '40px',
  },
  media: {
    height: '200px',
    width: '300px',
  }
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
}, [localStorage]);

  return (
    <>
        <IconButton onClick={handleClickBack}>
            <ArrowBackIosIcon />
        </IconButton>

        <Card className={classes.root}>
            {!country ? 
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Country not found!
                    </Typography> 
                </CardContent>
            :
                <>
                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                        <CardMedia
                            component="img"
                            className={classes.media}
                            image={`https://flagcdn.com/${(country?.cca2)?.toLowerCase()}.svg`}
                            title={country?.name?.common}
                            alt={country?.name?.common}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {country?.name?.common}
                            </Typography>

                            {country?.checked && <CheckIcon />}

                            <Typography variant="body2" color="textSecondary" component="p">
                                Country code: <span style={{ fontWeight: 'bold' }}>{country?.cca2}</span>
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Capital: <span style={{ fontWeight: 'bold' }}>{country?.capital}</span>
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Continent: <span style={{ fontWeight: 'bold' }}>{country?.continents}</span>
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Subregion: <span style={{ fontWeight: 'bold' }}>{country?.subregion}</span>
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Population: <span style={{ fontWeight: 'bold' }}>{country?.population} people</span>
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                {`Currency: ${country?.currencies[Object.keys(country?.currencies)[0]].name}`}
                            </Typography>
                        </CardContent>
                    </Box>                
                </>
            }
        </Card>
    </>
  );
};
