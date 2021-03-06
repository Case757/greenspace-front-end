import React, { Component } from "react"
import { Form, Button } from 'semantic-ui-react'
import { connect } from "react-redux";
import { creatingPlant } from "../redux/actions/plant_actions"


class CreatePlant extends Component {
state = {
    name: '',
    scientific_name: '',
    plant_info: '',
    category: '',
    image: ''
}


handleOnChange = e => {
    if (e.target.name === 'image') {
        this.setState({ [e.target.name]: e.target.files[0] })
    } else {
        this.setState({[e.target.name]: e.target.value})
    }
    
}

handleSubmit = e => {
    e.preventDefault()
    let info = {
        name: this.state.name,
        scientific_name: this.state.scientific_name,
        plant_info: this.state.plant_info,
        category: this.state.category,
        image: this.state.image
    }
    this.props.creatingPlant(info);
    // this.props.history.push('/plants')
}

    render() {
    return(
        <div className="form-page">
            <Form className="plant-form" onSubmit={event => this.handleSubmit(event)}>
            <h1 className="create-page-title">Add a plant</h1>
                <Form.Field>
                    <label>Name</label>
                    <input 
                        name="name"
                        onChange={this.handleOnChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Scientific name</label>
                    <input 
                        name="scientific_name"
                        onChange={this.handleOnChange} />
                </Form.Field>
                <Form.Field label='Plant info' control='textarea'
                    name='plant_info'
                    onChange={this.handleOnChange} />
                <Form.Field label='Category' control='select'
                    name='category'
                    onChange={this.handleOnChange}>
                    <option value='none'>None</option>
                    <option value='flowering'>Flowering</option>
                    <option value='foliage'>Foliage</option>
                    <option value='succulent and cacti'>Succulent and Cacti</option>
                </Form.Field>
                <Form.Field>
                    <label>Add image</label>
                    <input type="file" name='image'
                    onChange={this.handleOnChange} />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
    }
}

const mapDispatchToProps = dispatch => ({
    creatingPlant: (info) => {dispatch(creatingPlant(info))}
  });

export default connect(null, mapDispatchToProps)(CreatePlant)