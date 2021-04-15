import React , {useState , useEffect} from 'react';

import "./App.css"

import TextField from '@material-ui/core/TextField';  
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'; 
import {db} from "./firebaseConfig";
import firebase from "firebase";


import ToDoList from './TodoList';

const App =  () => { 
    const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    }));

    const classes = useStyles();
 

    const [toDoInput , setToDOInput] = useState('');

    const [toDoList , setToDoList] = useState([]);

    useEffect(() => {
        fetchToDoList();
    }, [])
 

    const toDoInputHandler = (e) => { 
        setToDOInput(e.target.value); 
    }

    const addToDoToDb = (e) => {
        console.log(toDoInput.length);
        if(toDoInput.length === 0){
            alert("Please Enter a todo");
        }else{
        e.preventDefault();
        db.collection("todos").add({
            progress : true,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            todo : toDoInput
        });
    }
        setToDOInput('');
    }


    const fetchToDoList = () => {
        db.collection("todos").onSnapshot((q) => {
            setToDoList(
                q.docs.map((doc) => ({
                id : doc.id,
                todo : doc.data().todo,
                progress : doc.data().progress,
            }))
            )
        })
    } 

    return(
        <div className = "main_container">
            <h1>Todo List</h1>
            <div>
            <form onSubmit = {addToDoToDb}>
             <TextField id="standard-basic" label="Write a todo" 
             className = "input_field" onChange = {toDoInputHandler} 
             value = {toDoInput}  />
            <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick = {addToDoToDb} className={classes.button}/> 
             {
                 toDoList.map((todo) =>
                     <ToDoList id = {todo.id} progress = {todo.progress} todo = {todo.todo}  />
                 
                 )
             } 
             </form> 
             </div>          
       </div>
    )
};

export default App;