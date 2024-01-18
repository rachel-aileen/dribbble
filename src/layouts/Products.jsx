import { Grid } from '@mui/material'
import React from 'react'
import ProductOption from './ProductOption'

export default function Products() {
    return (
        <div className='products'>


            <Grid container
                direction="row">
                <Grid item xs={3}>
                    <ProductOption productLabel={'First Product'} />

                </Grid>
                <Grid item xs={3}>
                    <ProductOption productLabel={'Second'} />
                </Grid>
                <Grid item xs={3}>
                    <ProductOption productLabel={'Third'} />
                </Grid>
                <Grid item xs={3}>
                    <ProductOption productLabel={'Fourth'} />
                </Grid>
            </Grid>

            <Grid container
                direction="row">
                <Grid item xs={3}>
                    <ProductOption productLabel={'Fifth'} />

                </Grid>
                <Grid item xs={3}>
                    <ProductOption productLabel={'Sixth'} />
                </Grid>
                <Grid item xs={3}>
                    <ProductOption productLabel={'Seventh'} />
                </Grid>
                <Grid item xs={3}>
                    <ProductOption productLabel={'Eighth'} />
                </Grid>
            </Grid>
        </div>
    )
}
