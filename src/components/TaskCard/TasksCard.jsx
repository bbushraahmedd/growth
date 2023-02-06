
import {IconButton, Container, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TasksCard({task}){

    // function handleDelete() {
    //     setTasks(tasks.filter((el) => el.id !== task.id));
    // onClick={handleDelete}
    // }

   return ( 
    <Container>
        <Box>
            <IconButton aria-label="delete-task" edge="end"  >
                <DeleteIcon/>
            </IconButton>
                {task}
        </Box>
    </Container>
    );
}

export default TasksCard;