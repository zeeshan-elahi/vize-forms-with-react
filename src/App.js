import React from 'react';
import VIZEForm from './@vize-forms';
import Paper from '@material-ui/core/Paper';

import './App.css';

function App() {

  return (
    <div className="VizeFormRoot">
        <Paper id="container" variant="outlined" square>

          <VIZEForm  />

        </Paper>
    </div>
  );
}

export default App;
