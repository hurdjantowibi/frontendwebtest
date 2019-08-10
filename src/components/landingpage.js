import React, { Component } from 'react';
import { Grid } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <h1>Hello World!</h1>
                </Grid>
            </div>
        )
    }
}

export default Landing;