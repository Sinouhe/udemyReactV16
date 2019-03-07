import React, {Component} from "react"
import { Field, reduxForm } from "redux-form"
import * as actions from "../actions"
import { connect } from "react-redux"

const FIELDS = {email : "email", password: "password"}

class Signin extends Component {
    handleSubmit(){

    }

    render() {
        return (
            <from onSubmit={this.props.handleSubmit(this.handleSubmit)}>
            <div className="row justify-content-mdr-center">
            <h1>Connexion</h1>
            </div>
            <div className="row justify-content-mdr-center">
            <fieldset className="col-md-4 form-group">
            <label className="bmb-label-floating">Email</label>
            <Field
                name= {FIELDS.email}
                component="input"
                type="text"
                className="form-control"
            />
            </fieldset>
            </div>
            <div className="row justify-content-mdr-center">
            <fieldset className="col-md-4 form-group">
            <label className="bmb-label-floating">password</label>
            <Field
                name= {FIELDS.email}
                component="input"
                type="password"
                className="form-control"
            />
            </fieldset>
            </div>
            <div className="row juustify-content-mdr-center">
            <button className="btn btn-primary btn-raised" type="submit">
            Connexion
            </button>
            </div>
            </from>
        )
    }
}

const signinForm = reduxForm({
    form:"signin",
    fields :Object.keys(FIELDS)
})(Signin)

export default connect(null,actions)(signinForm)
