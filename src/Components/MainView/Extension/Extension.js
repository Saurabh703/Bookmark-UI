import React from 'react';
import { Button,
         Card,
         CardActions,
         CardContent ,
         Typography,
                 } from "@material-ui/core";
 import { makeStyles } from '@material-ui/core/styles';
import "../Extension/Extension.css"
import Chrome from "../Extension/images/logo-chrome.svg";
import Firefox from "../Extension/images/logo-firefox.svg";
import Opera from "../Extension/images/logo-opera.svg";
import Dots from "../Extension/images/bg-dots.svg";

const useStyles = makeStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      justifyContent: 'center',
    },
    card: {
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        boxShadow: '0px 13px 10px -7px rgba(0, 0, 0, 0.1)',
        margin: '0 1rem',
    },
    title: {
      fontSize: 14,
      textAlign: 'center',
    },
    pos: { 
        padding: '',
      marginBottom: 12,
      textAlign: 'center',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
  });

const Extension = () => {
    const classes = useStyles();

    return (
//         <div className="extension">
        <div className="download">
              <h2>Download the Extension</h2>
             <p>We've got more browser im the pipeline. Please do let us know if you've got a favourite you'd like us to priortize.</p>           
{/* //            <div className="card_chrome">
//                 <img src={Chrome} alt="bjb" />
//                 <Button variant="contained" color="primary" disableElevation>
//                  Disable elevation
//                  </Button>
//                 <button>Add & Install Extension</button>
//                 <p>Minimum version 62</p>
//             </div>
//             <div className="card_firefox">
//             <img src={Firefox} alt="vdv" />
//             <Button variant="contained" color="primary" disableElevation>
//              Disable elevation
//              </Button>
//                 <button>Add & Install Extension</button>
//                 <p>Minimum version 55</p>
//             </div>
//             <div className="card_opera">
//             <img src={Opera} alt="csc" />
//             <Button variant="contained" color="primary" disableElevation>
//   Disable elevation
// </Button>
//                 <button>Add & Install Extension</button>
//                 <p>Minimum version 46</p>
            // </div> */}
       
        <Card className={classes.root}>
        <Card className={classes.root}>
      <CardContent className={classes.card}>
      <img src={Chrome} alt="bjb" />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Add to Chrome
        </Typography>
        <Typography variant="h5" component="h2">
         
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Minimum version 62
        </Typography>
        <img className="dots_bg" src={Dots} alt="njdd" />
        <button size="small">Add & Install Extension</button>
      </CardContent>
      {/* <CardActions> */}
        
      {/* </CardActions> */}
      </Card>

      <Card className={classes.root}>
      <CardContent className={classes.card}>
      <img src={Firefox} alt="bjb" />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Add to Firefox
        </Typography>
        <Typography variant="h5" component="h2">
         
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Minimum version 55
        </Typography>
        <img className="dots_bg" src={Dots} alt="njdd" />
        <button size="large">Add & Install Extension</button>
      </CardContent>
      {/* <CardActions> */}
        
      {/* </CardActions> */}
      </Card>

      <Card className={classes.root}>
      <CardContent className={classes.card}>
      <img src={Opera} alt="bjb" />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Add to Opera
        </Typography>
        <Typography variant="h5" component="h2">
         
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Minimum version 46
        </Typography>
        <img className="dots_bg" src={Dots} alt="njdd" />
        <button size="small">Add & Install Extension</button>
      </CardContent>
      {/* <CardActions> */}
       
      {/* </CardActions> */}
      </Card>
    </Card>
     </div>
    );
};

export default Extension;
