import React, {useState} from 'react';

type ListProps = {
    todos: string[];
}

function TodoList({todos}: ListProps) {
    const refined = (todos:string[]):JSX.Element[] => {
        const TodoComponents = todos.map(todo => {
            return(
                <div>
                {todo}
                <button>Done!</button>
                <button>pass</button>
                </div> 
            )
        });
        return TodoComponents
    }
    return (
        <div>
            {refined(todos)}
        </div>
    )
}

TodoList.defaultProps = {
    todos:[
        "test1",
        "test2"
    ]
}

export default TodoList;