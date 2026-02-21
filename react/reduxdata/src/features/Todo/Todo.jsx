import React from 'react'
import { useSelector } from 'react-redux'


function Todo() {
    const { todo } = useSelector((data) => data.todos)
    console.log(todo);

    return (
        <div>
            <ul>
                {
                    todo.map((data, index) => {
                        return (
                            <li>{data}
                                <button >edit</button>
                                <button >Del</button>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Todo
