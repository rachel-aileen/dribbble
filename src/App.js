
import { Grid } from '@mui/material';
import './App.css';

import Sidebar from './layouts/Sidebar'
import Content from './layouts/Content'





function App() {
  return (
    <div>

      <Grid container>

        <Grid item xs={3}>
          <Sidebar />
        </Grid>

        <Grid item xs={9}>

          <Content />
        </Grid>

      </Grid>


    </div>
  );
}

export default App;
