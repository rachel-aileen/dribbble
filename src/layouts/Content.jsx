import { Grid } from '@mui/material'
import React from 'react'
import TopBar from './TopBar'
import Products from './Products'

export default function Content() {
    return (
        <div className='content'>


            <Grid container
                direction="column"
                style={{ height: "100%" }}
            >

                <Grid item xs={1}>
                    <TopBar />
                </Grid>

                <Grid item xs={11}>
                    <Products />
                </Grid>







            </Grid>
        </div>
    )
}
