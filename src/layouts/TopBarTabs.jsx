import { Grid } from '@mui/material'
import React from 'react'

export default function TopBarTabs({ tabLabel }) {
    return (
        <div className='topBarTabs'>
            <Grid container
                direction="row"

            >
                {tabLabel}

                <Grid item


                ></Grid>
            </Grid>
        </div>
    )
}
