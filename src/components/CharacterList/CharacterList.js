import React from 'react';
import './CharacterList.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import characters from './data'

class CharacterList extends React.Component {
    renderCharacters(){
        return characters.map(elements=>{
            return  <Row>
                        <Col></Col>
                    </Row>
        })
    }
    render(){
        return (
            <div>
                <h1 className="text-center">Character list</h1> 
            </div>
                    
        );
    }  
}

export default CharacterList;