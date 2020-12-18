import React from 'react';
import {Button,Box,Grid,Typography,Link,TextField,Snackbar,Select,MenuItem} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {theme} from '../styles';
import logo from '../logo.png';
import useStyles from './styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Registro(){
  const classes = useStyles(theme);
  var history = useHistory();
  const [user,setUser] = React.useState({role:'usuario'});
  const [er, setError] = React.useState('');
  
  const handleChange = (e)=> {
    setUser(prev => ({
      ...prev,
      [e.target.name]:e.target.value,
    }))
  }

  const handleSubmit = ()=> {
    axios.post('https://kuepa-back.herokuapp.com/auth/registro',{usuario:user})
    .then(() => {
      history.push('/')
    })
    .catch((errores)=> {
      console.log(errores)
      setError(errores.response.data.errors)
    })

  }
  return (
    <>
  <Grid
  container
  direction="row"
  justify="space-between"
  alignItems="stretch">
    <Grid item md={6} sm={12} className={classes.rootR}>
      <div className={classes.cont}>
	<Box>
	  <img src={logo} alt='logo'/>
	</Box>
	<Box fontWeight="fontWeightLight" mr={15} textAlign="right">
	  <Typography variant="overline">PRUEBA DESARROLLADOR FULL STACK JAVASCRIPT</Typography>
	</Box>
	<Box  mt={10}  mr={8}>
	  <Typography className={classes.hw} variant="h3">Tu sueño es único,
tu educación también.</Typography>
	</Box >
	<Box mt={5} mr={2}>
	  <Typography className={classes.pr} variant="body1">
	    Somos una organización educativa con presencia en América Latina dedicada a mejorar las habilidades profesionales y laborales de miles de jóvenes para facilitar su incursión en el mercado laboral, ingreso a la universidad y lo más importante: Cumplir sus sueños. 
	  </Typography>
	</Box>
	<Box mt={5} mr={2}>
	  <Typography className={classes.pr} variant="body1">
	    Tenemos más de 10 años de experiencia en la construcción de modelos educativos basados en tecnología innovadora con contenidos de alta calidad y herramientas de seguimiento que permiten tener un progreso académico dinámico y rápido. 
	  </Typography>
	</Box>
	<Box mt={4}>
	  <Link href="https://www.kuepa.com/co"  variant="body2">
	    Click aqui para saber más
	  </Link>
	</Box>
      </div>
    </Grid>
    <Grid item  md={6} sm={12} xs={12} className={classes.rootL}>
      <div className={classes.cont}>
	<Box mt={5}>
	  <Typography className={classes.hw} variant="h6">Registro</Typography>
	</Box >
	<Box mt={15}>
	  <form className={classes.root}  >
	    <Box>
	      <Typography   variant="h6">Email</Typography>
	      <TextField name='email' onChange={handleChange} label="Necesario@mail.com" variant="filled" />
	    </Box>
	    <Box mt={2}>
	      <Typography  variant="h6">username</Typography>
	      <TextField name='username' onChange={handleChange} label="Necesario" variant="filled" />
	    </Box>
	    <Box mt={2}>
	      <Typography  variant="h6">nombre</Typography>
	      <TextField name='name'  onChange={handleChange} label="Necesario" variant="filled" />
	    </Box>
	    <Box mt={2}>
	      <Typography  variant="h6">password</Typography>
	      <TextField name='password' type='password' onChange={handleChange} label="Necesario" variant="filled" />
	    </Box>
	    <Box mt={2}>
	      <Typography  variant="h6">tipo de usuario</Typography>
        <Select
	  name='role'
	  value={user.role}
          onChange={handleChange}
        >
          <MenuItem value={'usuario'}>usuario</MenuItem>
          <MenuItem value={'moderador'}>moderador</MenuItem>
        </Select>
	    </Box>
	    <Box mt={10}>
	      <Button  variant='contained' disabled={user.email===undefined || user.password===undefined} onClick={handleSubmit} color='secondary'>
		Iniciar sesión
	      </Button>
	    </Box>
	    <Box mt={10}>
	      <Link href="/"  variant="body2" color='secondary'>
		¿ya tienes cuenta? ¡logueate!
	      </Link>
	    </Box>
	  </form>
	</Box >
      </div>
    </Grid>
  </Grid>
  <Snackbar open={er!==''} autoHideDuration={6000}>
    <Alert  onClose={()=>setError('')} severity="warning">
      {er}
    </Alert>
  </Snackbar>
    </>
  )
}
