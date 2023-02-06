
import { Container, CssBaseline, Box, Avatar, Typography, TextField, IconButton, InputAdornment } from '@mui/material';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutline';

import { useState } from 'react';


function TaskForm({handleAddTask}){

    const [content, setContent] = useState('');

    function handleChange(e){
        setContent(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        
        handleAddTask({content: content})

    }

   return ( 
    <Container maxWidth='lg'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Avatar sx={{ m: 3, bgcolor: 'success.main' }}>
            <TaskAltOutlinedIcon />
        </Avatar>
        <Typography 
        component="h1" 
        variant="h5"
        sx={{ marginBottom: 4}} >
            Tasks
        </Typography>
        <Box maxWidth='md' component="form" onSubmit={handleSubmit} >
           <TextField
            fullWidth
            onChange={handleChange}
            label="Add Task"
            value={content}
            />
            <InputAdornment position="start">
                <IconButton aria-label="add-task" type="submit">
                    <AddIcon color="success"/>
                </IconButton>
            </InputAdornment>
            </Box>
        </Box>
    </Container>
    );
}

export default TaskForm;