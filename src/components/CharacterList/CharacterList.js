import React from 'react';
import './CharacterList.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import allCharactersData from '../data'

class CharacterList extends React.Component {         
    renderCharacters(){        
        return (this.props.characters || allCharactersData).map(element=>{
            return  <Col className="character-details text-center" xs={12} sm={6} md={4} lg={3}>                     
                        <Col><img src={element.image} alt={element.image} /></Col>
                        <div className="background mb-3">
                            <Col>{element.name}</Col>
                            <Col>{element.gender}</Col>
                            <Col><b>Birth Year:</b> {element.birth_year}</Col>
                            <Col><b>irth Planet:</b> {element.birth_planet}</Col>                            
                        </div>
                    </Col> 
                    
        })
    }
    render(){
        return (
            <div>                
                <Row className="mt-3">
                    {this.renderCharacters()}
                </Row>                
            </div>                    
        );
    }  
}

export default CharacterList;