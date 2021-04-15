import React from 'react';

import { ListItem, ListItemText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { db } from './firebaseConfig'; 

const ToDoList = ({id , progress , todo , bg}) =>{
    const toggleProgress = () => {
        db.collection("todos").doc(id).update({
            progress : !progress
        })
    } 
 

    const deletToDO = () => {
        db.collection("todos").doc(id).delete();
    }
    return( 
        <div style = {{display : 'flex' , flexDirection : 'row' , justifyContent : 'space-around' , marginTop : '10px' ,  marginBottom : '10px' , borderStyle : 'solid'}}>
                     <ListItem>
                         <ListItemText primary = {todo}
                          secondary = {progress ? "In Progress⌚" : "Completed✅"} />
                     </ListItem>
                     <Button onClick = {toggleProgress}>
                         {progress ? "Done" : "UnDone"}
                     </Button>
                     <Button onClick = {deletToDO}>
                         X
                     </Button>
                      
                      </div>
    )
}

export default ToDoList;