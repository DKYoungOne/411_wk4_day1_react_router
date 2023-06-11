import React from 'react'
import cars from '../cars.json'
import {useParams} from "react-router-dom";

// import MUI components here //
// Container, Paper, Chip //
import { Container, Paper, Chip } from '@mui/material';


const Car = (props) => {
    const {id} = useParams();
    const car = cars.find(car => car.id==id);
    
    return (
        <Container maxWidth="sm" sx={{margin: "auto", marginTop: "100px", textAlign: "left", position: "relative"}}>
            <Paper elevation={3} sx={{position: 'absolute', padding: "50px"}}>
                <h2>{`${car.Name}`}</h2>
                <Chip clickable label={`id: ${car.id}`}/>
                <Chip clickable label={`Name: ${car.Name}`}/>
                <Chip clickable label={`Miles_perGallon: ${car.Miles_per_Gallon}`}/>
                <Chip clickable label={`Cylinders: ${car.Cylinders}`}/>
                <Chip clickable label={`Displacement: ${car.Displacement}`}/>
                <Chip clickable label={`Horsepower: ${car.Horsepower}`}/>
                <Chip clickable label={`Weight_in_lbs: ${car.Weight_in_lbs}`}/>
                <Chip clickable label={`Acceleration: ${car.Acceleration}`}/>
                <Chip clickable label={`Year: ${car.Year}`}/>
                <Chip clickable label={`Origin: ${car.Origin}`}/>
            </Paper>

        </Container>
    )
}

export default Car