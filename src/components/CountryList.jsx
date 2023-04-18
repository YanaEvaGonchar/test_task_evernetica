import React from 'react';
import { CountryCard } from './CountryCard';
import { Grid, Box } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { dragDropCountry } from '../redux/actions/countriesActions';

export const CountryList = ({ countries, selectedCountries }) => {
  const dispatch = useDispatch();

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    dispatch(dragDropCountry(result))
  };

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {(selectedCountries?.length > 0) && (selectedCountries?.map((country, index) => (
            <Grid
              item
              key={country?.cca2}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
            >
              <CountryCard country={country} />
            </Grid>
          )))}
        </Grid>
      </Box>
  
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="country-list">
          {(provided) => (
            <Box ref={provided.innerRef} {...provided.droppableProps}>
              <Grid container spacing={2}>
                {countries?.length > 0 && countries?.map((country, index) => (
                  <Draggable key={country.cca2} draggableId={country.cca2} index={index}>
                    {(provided) => (
                      <Grid
                        item
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={2}
                      >
                        <CountryCard country={country} />
                      </Grid>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Grid>
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
