import React, { Component } from 'react'
import posed from 'react-pose';

const Animation = posed.div({
  visible : {
    opacity : 1,
    applyAtStart : {
      display : "block"
    }
  }, 
  hidden : {
    opacity : 0,
    applyAtEnd : {
      display : "none"
    }
  }
});

class AddUser extends Component {
  
  state = {
    visible : false
  }
  changeVisibility = (e) => {
    this.setState({ 
      visible : !this.state.visible
    })
  }

  render() {
    const { visible} = this.state;
    return (
      <div className="col-md-8 mb-4">
         <div className="d-grid gap-1">
                    <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? 'Hide Form' : 'Show Form'}</button>
                    </div>
        <Animation pose= {visible ? 'visible' : 'hidden'}>
        <div className="card">
            <div className="card-header">
                <h4>Add User Form</h4>
            </div>
            <div className="card-body">

                <form >

                    <div className="form-group mb-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="id" placeholder="Enter   name" className="form-control"/>
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="department">department</label>
                        <input type="text" name="department" id="department" placeholder="Enter department" className="form-control"/>
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="salary">salary</label>
                        <input type="text" name="salary" id="salary" placeholder="Enter salary" className="form-control"/>
                    </div>

                    <div className="d-grid gap-1">
                    <button className="btn btn-danger btn-block" type="submit">Add User</button>
                    </div>
                </form>
            </div>
        </div>
        </Animation>
      </div>
    )
  }
}

export default AddUser;
