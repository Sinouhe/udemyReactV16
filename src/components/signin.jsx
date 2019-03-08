import React, {Component} from "react"
import { Field, reduxForm } from "redux-form"
import * as actions from "../actions"
import { connect } from "react-redux"

const FIELDS = {email : "email", password: "password"}

class Signin extends Component {
    handleSubmit = (credential) => {
        this.props.signinUser(credential, this.props.history)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
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
                            name= {FIELDS.password}
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
            </form>
        )
    }
}

const signinForm = reduxForm({
    form:"signin",
    fields :Object.keys(FIELDS)
})(Signin)

export default connect(null,actions)(signinForm)
