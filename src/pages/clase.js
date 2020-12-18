import React from 'react';
import {Button,Grid,Box,Typography,Divider,AppBar,Toolbar,IconButton,Card,TableContainer,CardContent,Table,TableBody,TableRow,TableCell,Paper,TextField} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import useStyles from './styles';
import io from 'socket.io-client';


export default function Clase({usuario,setPending}){
  const classes = useStyles();
  const history = useHistory();
  const handleLogout = ()=>{
    localStorage.removeItem('Usuario');
    setPending(true);
    history.push('/');
  }
  const [yourID, setYourID] = React.useState();
  const [newMessage, setNewMessage] = React.useState('');
  const [messages,setMessages] = React.useState([]);

  const socketRef = React.useRef();

  React.useEffect(()=>{
    socketRef.current = io.connect('https://kuepa-back.herokuapp.com/');

    socketRef.current.on('tu id es', id => {
      setYourID(id);
    })

    socketRef.current.on("message", (message) => {
      console.log("here",message);
      receivedMessage(message);
    })
  },[])

  function receivedMessage(message) {
    setMessages(oldMsgs => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: newMessage,
      user: usuario.name,
      id: yourID,
    };
    setNewMessage("");
    socketRef.current.emit("send message", messageObject);
  }
  
  return (
    <>
      <AppBar position="static">
	<Toolbar>
	  <Grid container>
	    <Grid item md={9}>
	      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
	      kuepa
	      </IconButton>
	    </Grid>
	    <Grid item md={3}>
	      <Button onClick={handleLogout} variant="contained" color="secondary">Logout</Button>
	    </Grid>
	  </Grid>
	</Toolbar>
      </AppBar>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      <Grid item md={9}>
	<Box className={classes.videoContainer}>
	<iframe width="900" height="506" src="https://www.youtube.com/embed/RYK0sK54tjE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<Box className={classes.hw} mt={5}>
	  <Divider/>
	  <Typography variant="h5"><code> Clase Derivadas</code> </Typography>
	  <Typography ><code>Leccion : Recta tangente a la curva </code></Typography>
	</Box>
	</Box>

      </Grid>
      <Grid item md={3}>
	<Paper style={{height: 500, overflow: 'auto' , margin:10}}>
	<TableContainer >
	  <Table stickyHeader>
	    <TableBody>
	      {messages.map((mensaje,indx)=>
	      <TableRow key={indx}>
		<TableCell>
		<Card>
		  <CardContent>
		    <Typography color="textSecondary" className={classes.cardTitle}>
		      {mensaje.user}
		    </Typography>
		    <Typography   gutterBottom>
		      {mensaje.body}
		    </Typography>
		  </CardContent>
		</Card>
		</TableCell>
	      </TableRow>
	      )}
	    </TableBody>
	  </Table>
	</TableContainer>
	</Paper>
	<Box m={2}>
	<TextField label="Mensaje" variant="filled" value={newMessage} onChange={(ch)=>setNewMessage(ch.target.value)}>
	</TextField>
	</Box>
	<Box m={2}>
	 <Button variant="contained" color="secondary" onClick={sendMessage}>Enviar</Button>
        </Box>
      </Grid>
    </Grid>
    </>
  );
};

