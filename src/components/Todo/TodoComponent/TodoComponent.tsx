import React, {useState} from 'react';

type ListProps = {
    todos: string[];
}

function TodoComponent({todos}: ListProps) {
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

TodoComponent.defaultProps = {
    todos:[
        "test1",
        "test2"
    ]
}

export default TodoComponent;