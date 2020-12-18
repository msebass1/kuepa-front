import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>{
  return ({
  rootL: {
    background: theme.palette.bg.yellow,

    height:'1000px'
  },
  rootS: {
    background: theme.palette.bg.yellow,

    height:'1200px'
  },
  rootR:{
    background: '#FFF',
 
    height:'1000px'
  },
  cont:{
    marginLeft:'10%',
    marginTop: '5%',
  },
  hw:{
    color: '#27272f',
    fontSize: '60px',
    lineHeight: '78px',
    width: '100%'
  },
  pr:{
    color: theme.palette.secondary.main,
    fontSize: '16px',
    lineHeight: '33px',
    width: '100%'
  },
  videoContainer:{
    background: '#ff9a66',
    padding:'2%',
  },
  cardTitle: {
    fontSize: 10,
  },
  tableContainer: {
    maxHeight: 440,
  },
})});

export default useStyles;
