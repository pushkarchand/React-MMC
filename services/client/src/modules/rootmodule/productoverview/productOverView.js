import React from 'react';
import './productOverView.scss';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {teams,owners,productTypes,years} from '../../../utils/constants';

export default function ProductOverView() {
    const [year, setYear] = React.useState(2020);
    const [owner, setOwner] = React.useState('');
    const [team, setTeam] = React.useState('');
    const [productType, setProductType] = React.useState('');

    const handleChangeInTeam=(event)=>{
        setTeam(event.target.value);
    }

    const handleChangeInYear=(event)=>{
        setYear(event.target.value);
    }

    const handleChangeInOwner=(event)=>{
        setOwner(event.target.value);
    }

    const handleChangeInProductType=(event)=>{
        setProductType(event.target.value);
    }
    
    return (
        <div className="productoverViewContainer">
            <Grid container>
                <Grid item lg={2} md={2} sm={false} xs={false}></Grid>
                <Grid item lg={8} md={8} sm={12} xs={12} className="productoverViewContainer__filter">
                     <TextField id="input-with-icon-grid"  style={{width:"100%"}} label="Search" />
                </Grid>
                <Grid item lg={2} md={2} sm={false} xs={false}></Grid>
            </Grid>
            <Grid container>
                <Grid item lg={2} md={2} sm={false} xs={false}></Grid>
                <Grid item lg={2} md={2} sm={12} xs={12} className="productoverViewContainer__filter">
                    <FormControl style={{width:"100%"}}>
                        <InputLabel id="demo-simple-select-label">Year</InputLabel>
                            <Select 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={year}
                            onChange={handleChangeInYear}
                            >
                            {
                                years.map((year)=>(
                                    <MenuItem key={year} value={year}>{year}</MenuItem>
                                ))
                            }
                            </Select>
                    </FormControl>
                </Grid>
                <Grid item lg={1} md={1} sm={12} xs={12} className="productoverViewContainer__filter">
                    <FormControl style={{width:"100%"}}>
                        <InputLabel id="demo-simple-select-label">Teams</InputLabel>
                            <Select 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={team}
                            onChange={handleChangeInTeam}
                            >
                            {
                                teams.map((team)=>(
                                    <MenuItem key={team} value={team}>{team}</MenuItem>
                                ))
                            }
                            </Select>
                    </FormControl>
                </Grid>
                <Grid item lg={2} md={2} sm={12} xs={12} className="productoverViewContainer__filter">
                    <FormControl style={{width:"100%"}}>
                        <InputLabel id="demo-simple-select-label">Owner</InputLabel>
                            <Select 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={owner}
                            onChange={handleChangeInOwner}
                            >
                             {
                                owners.map((owner)=>(
                                    <MenuItem key={owner} value={owner}>{owner}</MenuItem>
                                ))
                            }
                            </Select>
                    </FormControl>
                </Grid>
                <Grid item lg={2} md={2} sm={12} xs={12} className="productoverViewContainer__filter">
                     <FormControl style={{width:"100%"}}>
                        <InputLabel id="demo-simple-select-label">Product Type</InputLabel>
                            <Select 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={productType}
                            onChange={handleChangeInProductType}
                            >
                            {
                                productTypes.map((productType)=>(
                                    <MenuItem key={productType} value={productType}>{productType}</MenuItem>
                                ))
                            }
                            </Select>
                    </FormControl>
                </Grid> 
                <Grid item lg={1} md={1} sm={12} xs={12} className="productoverViewContainer__filter productoverViewContainer__filterbtn">
                     <Button variant="contained" color="primary">
                        Done
                    </Button>
                </Grid> 
                <Grid item lg={2} md={2} sm={false} xs={false}></Grid>
            </Grid>
            <Grid container>

            </Grid>
        </div>
    )
}
