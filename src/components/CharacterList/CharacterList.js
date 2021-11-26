import React from 'react';
import './CharacterList.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import allCharactersData from '../data'

class CharacterList extends React.Component {    
    renderCharacters(){
        console.log(this.props.characters)
        return (this.props.characters || allCharactersData).map(element=>{
            return  <Col className="text-center" xs={12} sm={6} md={4} lg={3}>                     
                        <Col><img src={element.image} alt={element.image} /></Col>
                        <Col>{element.name}</Col>
                        <Col>{element.birth_year}</Col>
                        <Col>{element.birth_planet}</Col>
                        <Col>{element.gender}</Col>
                    </Col> 
                    
        })
    }
    render(){
        return (
            <div>
                <h1 className="text-center">Character list</h1>
                <Row>
                    {this.renderCharacters()}
                </Row>
            </div>
                    
        );
    }  
}

export default CharacterList;