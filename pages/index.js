import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import FilterListIcon from '@material-ui/icons/FilterList';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function createData(name, date, service, features, complexity, platforms, users, total) {
  return {name, date, service, features, complexity, platforms, users, total};
}

const useStyles = makeStyles(theme => ({

}))

export default function ProjectManager() {
  const classes = useStyles();
  const theme = useTheme();
  const [total, setTotal] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState('');
  const [websiteChecked, setWebsiteChecked] = useState(false);
  const [iOSChecked, setiOSChecked] = useState(false);
  const [androidChecked, setAndroidChecked] = useState(false);
  const [softwareChecked, setSoftwareChecked] = useState(false);
  const [rows, setRows] = useState([
    createData('Zachary Reece', '11/2/19', 'Website', 'E-Commerce', 'N/A', 'N/A', 'N/A', '$1,500'),
    createData("Bill Gates", "10/17/19", "Custom Software", "GPS, Push Notifications, Users/Authentication, File Transfer", "Medium", "Web Application",  "0-10", "$1600", true),
    createData("Steve Jobs", "2/13/19", "Custom Software", "Photo/Video, File Transfer, Users/Authentication", "Low", "Web Application", "10-100", "$1250", true),
    createData("Stan Smith", "2/13/19", "Mobile App", "Photo/Video, File Transfer, Users/Authentication", "Low", "iOS, Android", "10-100", "$1250", true),
    createData("Albert Einstein", "2/13/19", "Mobile App", "Photo/Video, File Transfer, Users/Authentication", "Low", "Android", "10-100", "$1250", true)
  ]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container direction='column'>
        <Grid item style={{marginTop: '2em', marginLeft: '5em'}}>
          <Typography variant='h1'>Projects</Typography>
        </Grid>
        <Grid item>
          <TextField 
          placeholder='Search project details or create a new entry.'
            style={{width: '35em', marginLeft: '5em'}}
            InputProps={{endAdornment: 
              <InputAdornment 
                position='end' 
                style={{cursor: 'pointer'}}
                onClick={() => setDialogOpen(true)}>
                <AddIcon color='primary' style={{fontSize: 30}}/>
              </InputAdornment>}}/>
        </Grid>
        <Grid item style={{marginLeft: '5em', marginTop: '2em'}}>
          <FormGroup row>
            <FormControlLabel 
              style={{marginRight: '5em'}}
              control={
                <Switch 
                  checked={websiteChecked}
                  color='primary'
                  onChange={() => setWebsiteChecked(!websiteChecked)}
                />} 
              labelPlacement='start'
              label='Websites'/>
            <FormControlLabel 
              style={{marginRight: '5em'}}
              control={
                <Switch 
                  checked={iOSChecked}
                  color='primary'
                  onChange={() => setiOSChecked(!iOSChecked)}
                />} 
              labelPlacement='start'
              label='iOS Apps'/>
            <FormControlLabel 
              style={{marginRight: '5em'}}
              control={
                <Switch 
                  checked={androidChecked}
                  color='primary'
                  onChange={() => setAndroidChecked(!androidChecked)}
                />} 
              labelPlacement='start'
              label='Android Apps'/>
            <FormControlLabel 
              control={
                <Switch 
                  checked={softwareChecked}
                  color='primary'
                  onChange={() => setSoftwareChecked(!softwareChecked)}
                />} 
              labelPlacement='start'
              label='Custom Software'/>
          </FormGroup>
        </Grid>
        <Grid item container justify='flex-end' style={{marginTop: '5em'}}>
          <Grid item style={{marginRight: 75}}>
            <FilterListIcon color='secondary' style={{fontSize: 50}}/>
          </Grid>
        </Grid>
        <Grid item style={{marginBottom: '15em'}}>
          <TableContainer component={Paper} elevation={0}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>Name</TableCell>
                  <TableCell align='center'>Date</TableCell>
                  <TableCell align='center'>Service</TableCell>
                  <TableCell align='center'>Features</TableCell>
                  <TableCell align='center'>Complexity</TableCell>
                  <TableCell align='center'>Platforms</TableCell>
                  <TableCell align='center'>Users</TableCell>
                  <TableCell align='center'>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => 
                <TableRow>
                  <TableCell key={index} align='center'>{row.name}</TableCell>
                  <TableCell key={index} align='center'>{row.date}</TableCell>
                  <TableCell key={index} align='center'>{row.service}</TableCell>
                  <TableCell key={index} align='center' style={{maxWidth: '5em'}}>{row.features}</TableCell>
                  <TableCell key={index} align='center'>{row.complexity}</TableCell>
                  <TableCell key={index} align='center'>{row.platforms}</TableCell>
                  <TableCell key={index} align='center'>{row.users}</TableCell>
                  <TableCell key={index} align='center'>{row.total}</TableCell>
                </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Dialog 
          open={dialogOpen} 
          onClose={() => setDialogOpen(false)}
          fullWidth
          maxWidth='md'>
          <Grid container justify='center'>
            <Grid item>
              <Typography variant='h1' gutterBottom>
                Add new project
              </Typography>
            </Grid>
          </Grid>
          <DialogContent>
            <Grid container justify='space-between'>
              <Grid item>
                <Grid item container direction='column' sm>
                  <Grid item>
                    <TextField
                      label='Name'
                      id='name'
                      value={name}
                      onChange={event => setName(event.target.value)}/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container direction='column' sm style={{marginTop: '16'}}>
                  <Grid item>
                    <KeyboardDatePicker format='MM/dd/yyyy' value={date} onChange={newDate => setDate(newDate)}/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container direction='column' sm>
                  <Grid item>
                    <TextField label='Total' id='total' value={total} onChange={event => setTotal(event.target.value)}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
