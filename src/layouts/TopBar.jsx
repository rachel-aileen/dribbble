import { Grid } from '@mui/material'
import React from 'react'
import TopBarTabs from './TopBarTabs'

export default function TopBar() {
    return (
        <div className='topBar'>

            <Grid container
                direction="row"
                justifyContent="space-between"
                style={{ height: "100%" }}

            >
                <Grid item>
                    <TopBarTabs tabLabel={'Tab 1'} />
                </Grid>

                <Grid item>
                    <TopBarTabs tabLabel={'Tab 2'} />
                </Grid>
                <Grid item>
                    <TopBarTabs tabLabel={'Tab 3'} />
                </Grid>
            </Grid>
        </div>
    )
}
