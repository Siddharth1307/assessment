import { Box, Container, FormControlLabel, Grid, Switch, Table, TableCell, TableHead, TableRow, TableBody, Typography, FormGroup, TextField } from "@mui/material";
import React, { useState } from "react";
import dataJson from './data.json';


const Assessment: React.FC = () => {

    const [cityFilter, setCityFilter] = useState<string[]>([]);
    const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
    const [typeFilter, setTypeFilter] = useState<string[]>([]);
    const [activeFilter, setActiveFilter] = useState<boolean | null>(null);
    const [nameFilter, setNameFilter] = useState<string>('');

    const filteredData = dataJson.filter(item => {
        // Filter by city
        if (cityFilter.length > 0 && !cityFilter.includes(item.city)) {
            return false;
        }
        // Filter by category
        if (categoryFilter.length > 0 && !categoryFilter.includes(item.category)) {
            return false;
        }
        // Filter by type
        if (typeFilter.length > 0 && !typeFilter.includes(item.type)) {
            return false;
        }
        // Filter by active
        if (activeFilter !== null && item.active !== activeFilter) {
            return false;
        }
        // Filter by name 
        if (nameFilter && !item.name.toLowerCase().includes(nameFilter.toLowerCase())) {
            return false;
        }
        return true;
    });
    return (
        <Box mt={4}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={2} className="form-group">
                        <Typography pt={2} pr={2}>City</Typography>
                        <FormGroup >
                            <FormControlLabel control={<Switch checked={cityFilter.includes('dallas')} onChange={() => setCityFilter(prev => prev.includes('dallas') ? prev.filter(c => c !== 'dallas') : [...prev, 'dallas'])} />} label="Dallas" />
                            <FormControlLabel control={<Switch checked={cityFilter.includes('san francisco')} onChange={() => setCityFilter(prev => prev.includes('san francisco') ? prev.filter(c => c !== 'san francisco') : [...prev, 'san francisco'])} />} label="San Francisco" />
                            <FormControlLabel control={<Switch checked={cityFilter.includes('denver')} onChange={() => setCityFilter(prev => prev.includes('denver') ? prev.filter(c => c !== 'denver') : [...prev, 'denver'])} />} label="Denver" />
                        </FormGroup>
                    </Grid>
                    <Grid item lg={2} className="form-group">
                        <Typography pt={2}>Category</Typography>
                        <FormGroup >
                            <FormControlLabel control={<Switch checked={categoryFilter.includes('one')} onChange={() => setCategoryFilter(prev => prev.includes('one') ? prev.filter(c => c !== 'one') : [...prev, 'one'])} />} label="one" />
                            <FormControlLabel control={<Switch checked={categoryFilter.includes('two')} onChange={() => setCategoryFilter(prev => prev.includes('two') ? prev.filter(c => c !== 'two') : [...prev, 'two'])} />} label="two" />
                        </FormGroup>
                    </Grid>
                    <Grid item lg={2} className="form-group">
                        <Typography pt={2}>Type</Typography>
                        <FormGroup >
                            <FormControlLabel control={<Switch checked={typeFilter.includes('A')} onChange={() => setTypeFilter(prev => prev.includes('A') ? prev.filter(c => c !== 'A') : [...prev, 'A'])} />} label="A" />
                            <FormControlLabel control={<Switch checked={typeFilter.includes('B')} onChange={() => setTypeFilter(prev => prev.includes('B') ? prev.filter(c => c !== 'B') : [...prev, 'B'])} />} label="B" />
                            <FormControlLabel control={<Switch checked={typeFilter.includes('C')} onChange={() => setTypeFilter(prev => prev.includes('C') ? prev.filter(c => c !== 'C') : [...prev, 'C'])} />} label="C" />
                        </FormGroup>
                    </Grid>
                    <Grid item lg={2} className="form-group">
                        <Typography pt={2}>Active</Typography>
                        <FormGroup >
                            <FormControlLabel control={<Switch checked={activeFilter === true} onChange={() => setActiveFilter(prev => prev === true ? null : true)} />} label="true" />
                            <FormControlLabel control={<Switch checked={activeFilter === false} onChange={() => setActiveFilter(prev => prev === false ? null : false)} />} label="false" />
                        </FormGroup>
                    </Grid>
                    <Grid item lg={4} className="form-group">
                        <TextField variant="standard" placeholder="Name" value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
                    </Grid>
                </Grid>
                <Box mt={10} />
                <Box className="table-wrapper">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Active</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.city}</TableCell>
                                    <TableCell>{item.category}</TableCell>
                                    <TableCell>{item.type}</TableCell>
                                    <TableCell>{item.active ? 'True' : 'False'}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Container>
        </Box>
    );
};
export default Assessment;
