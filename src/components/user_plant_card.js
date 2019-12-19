import React, { Component } from "react"
import { Form, Modal, Header, Card, Image, Icon, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { deletingUserPlant } from '../redux/actions/user_plant_actions'
import { creatingNote } from '../redux/actions/note_actions'
import Note from './note'

class UserPlantCard extends Component {

  state = {
    note: ''
}

    handleSubmit = (event) => {
      event.preventDefault()
      let info = {
        note: this.state.note,
        userId: this.props.currentUser.id,
        userPlantId: this.props.user_plant.id
      }
      event.target.note.value = ""
      return this.props.creatingNote(info);
    }

    handleUpdate

    render() {
    return(
        <div>
            <Card className="plant-card">
                <Card.Content>
                  <img className="plant-image" src={this.props.user_plant.image_url}/>
                  <div className="divider"></div>
                  <h2>{this.props.user_plant.name}</h2>
                  <p className='sci-name'>{this.props.user_plant.scientific_name}</p>  
                </Card.Content>
                <Modal trigger ={<Button>Notes Log</Button>}>
                  <Modal.Header>{this.props.user_plant.name}</Modal.Header>
                  <Modal.Content image scrolling>
                    <Image size='medium' src={this.props.user_plant.image_url} wrapped />
                    <Modal.Description>
                      <Header>Notes Log</Header>
                      <Form onSubmit={event => this.handleSubmit(event)}>
                        
                        <Form.Field control="text-area">
                          <label>Note</label>
                          <input 
                          onChange={e => this.setState({note: e.target.value})}
                          name="note" />
                        <Button>Create Note</Button>
                        </Form.Field>
                      </Form>
                      <div> {this.props.currentNotes.map( note => {
                        return <Note note={note} />
                      })}
                        </div>>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
                <Button onClick={() => {
                    this.props.deletingUserPlant(this.props.user_plant)
                }}>Remove plant</Button>
                <Link to={`/user_plants/${this.props.user_plant.id}/edit`}><Button>Update plant</Button></Link>
            </Card>
        </div>
    )
}}



const mapDispatchToProps = dispatch => ({
    deletingUserPlant: (userPlant) => {dispatch(deletingUserPlant(userPlant))},
    creatingNote: (noteInfo) => {dispatch(creatingNote(noteInfo))}
})

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    currentNotes: state.currentNotes
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPlantCard)

 