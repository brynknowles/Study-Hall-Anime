import React from 'react'

class CharacterCard extends React.Component {

    render() {
        const characterObj = this.props.characterObj
        return (
            <div className=".character-flex-card " key={characterObj.id}>
                <h1>{characterObj.name}</h1>
                <div class="image-div">
                    <img src={characterObj.img} alt={characterObj.name} />
                </div>
                <h2>{characterObj.show}</h2>
            </div>
        )
    }
}

export default CharacterCard