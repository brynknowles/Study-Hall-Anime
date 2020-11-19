import React from 'react'


function Form(props){

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            props.submitHandler({ name: e.target[0].value})
            }}>
            <input type="text" placeholder="enter character name"/>
            <input type="text" placeholder="enter character img url"/>
            <input type="text" placeholder="enter character show"/>
            <input type="submit" value="create character" />
        </form>
    )
}

export default Form