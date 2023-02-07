
import {IconButton, Container, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TasksCard({task, handleDeleteTask}){

   return ( 
    <Container>
        <Box>
            <IconButton aria-label="delete-task" edge="end"  onClick={handleDeleteTask}>
                <DeleteIcon/>
            </IconButton>
                {task.content}
        </Box>
    </Container>
    );
}

export default TasksCard;