import { Grid } from '@mui/material'
import React from 'react'

export default function ProductOption({ productLabel }) {
    return (
        <div className='productOption'>

            <Grid container>
                <Grid item>
                    {productLabel}
                </Grid>
            </Grid>

        </div>
    )
}
