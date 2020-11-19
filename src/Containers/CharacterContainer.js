import React from 'react'
import CharacterCard from '../Components/CharacterCard'
import characterArray from '../Api'
import Form from '../Components/Form'


class CharacterContainer extends React.Component {

    // store the array in state where it can be changed continuosly
    state = {
        characters: characterArray
    }

    

    submitHandler = (obj) => {

        let newArray = [...this.state.characters, obj]
        // console log the state before we make our change
        console.log("old State", newArray)
        // set state first by grabbing the instructors key and point it to our new array
        this.setState({ characters: newArray })
        // console log the state after we make our change
        console.log("new State", newArray)

    }

    render() {
        const characterCards = characterArray.map(characterObj => <CharacterCard characterObj={characterObj} />)

        return (
            <div className="character-flex-container">
                <Form submitHandler={this.submitHandler} />
                {/* <h1>Index</h1> */}
                {characterCards}
            </div>
        )
    }
}

export default CharacterContainer