import { Grid } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import Filters from './Filters'


export default function Sidebar() {
    return (
        <div className='sidebar'>

            <Grid container
                direction="column"
                style={{ height: "100%" }}
            >

                <Grid item xs={1}>
                    <Logo companyLogo={'Pinky'} />
                </Grid>


                <Grid item xs={11}>
                    <Filters />


                </Grid>





            </Grid>


        </div>
    )
}
