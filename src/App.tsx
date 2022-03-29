import * as React  from 'react';
import Box from '@mui/material/Box'
import MainPage from './components/views/mainPage/mainPage';

const App: React.FC = () => {

  return (
    <Box sx={{height:'100vh', display:'flex'}}>
      <MainPage />
    </Box>
  );
}

export default App;
