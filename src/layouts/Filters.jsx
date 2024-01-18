import { Grid } from '@mui/material'
import React from 'react'
import FilterOption from './FilterOption'

export default function Filters() {
    return (
        <div className='filters'> Filters

            <Grid container
                direction="column"
                style={{ height: "100%" }}

            >

                <Grid item
                >
                    <FilterOption filterText={'Rating'} />
                    <FilterOption filterText={'Intensity'} />
                    <FilterOption filterText={'Value'} />
                    <FilterOption filterText={'Brand'} />
                    <FilterOption filterText={'Color'} />
                </Grid>



            </Grid>
        </div>
    )
}
