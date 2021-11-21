import React, { Component } from 'react';
import { CustomerDataService } from "../services/customer.service";

class AddCustomerComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            birthdate: '',
            jobTitle: '',
            category: '',
            emailAddress: '',
            street: '',
            houseNumber: '',
            state: '',
            country: '',
            city: '',
            zipCode: '',
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeBirthdateHandler = this.changeBirthdateHandler.bind(this);
        this.changeJobTitleHandler = this.changeJobTitleHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeEmailAddressHandler = this.changeEmailAddressHandler.bind(this);
        this.changeStreetHandler = this.changeStreetHandler.bind(this);
        this.changeHouseNumberHandler = this.changeHouseNumberHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeZipCodeHandler = this.changeZipCodeHandler.bind(this);
        this.addCustomer = this.addCustomer.bind(this);
    }

    addCustomer = (e) => {
        e.preventDefault();
        console.log("ADD Customer", e)

        let customer = {firstName: this.state.firstName, lastName: this.state.lastName,
                        birthdate: this.state.birthdate, jobTitle: this.state.jobTitle,
                        category: this.state.category, emailAddress: this.state.emailAddress,
                        customerAddress: {
                            street: this.state.street, houseNumber: this.state.houseNumber, state: this.state.state,
                            country: this.state.country, city: this.state.city, zipCode: this.state.zipCode,
                        }
                       
                    }

        console.log('Customer: '+JSON.stringify(customer));

        CustomerDataService.addCustomer(customer).then(res => {
            this.props.history.push("/customers");
        })
    }

    cancel(){
        this.props.history.push('/customers');
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeBirthdateHandler = (event) => {
        this.setState({birthdate: event.target.value});
    }

    changeJobTitleHandler = (event) => {
        this.setState({jobTitle: event.target.value});
    }

    changeCategoryHandler = (event) => {
        this.setState({category: event.target.value});
    }

    changeEmailAddressHandler = (event) => {
        this.setState({emailAddress: event.target.value});
    }

    changeStreetHandler = (event) => {
        this.setState({street: event.target.value});
    }
    
    changeHouseNumberHandler = (event) => {
        this.setState({houseNumber: event.target.value});
    }
    
    changeStateHandler = (event) => {
        this.setState({state: event.target.value});
    }
    
    changeCountryHandler = (event) => {
        this.setState({country: event.target.value});
    }
    
    changeCityHandler = (event) => {
        this.setState({city: event.target.value});
    }
    
    changeZipCodeHandler = (event) => {
        this.setState({zipCode: event.target.value});
    }
    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                       <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Customer</h3>
                            <div className="card-body">
                                <form className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-2">
                                            <label>First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} required/>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label>Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control"
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label>Birthdate: </label>
                                            <input placeholder="Birth Date" name="birthdate" className="form-control" type="Date"
                                                value={this.state.birthdate} onChange={this.changeBirthdateHandler}/>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label>Job Title: </label>
                                            <input placeholder="Job Title" name="jobTitle" className="form-control"
                                                value={this.state.jobTitle} onChange={this.changeJobTitleHandler}/>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label>Category: </label>
                                            <select name="category" className="form-control" value={this.state.category} onChange={this.changeCategoryHandler}>
                                                <option selected hidden></option>
                                                <option>EXISTING_CUSTOMER</option>
                                                <option>NEW_CUSTOMER</option>
                                                <option>INACTIVE_CUSTOMER</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label>Email Address: </label>
                                            <input placeholder="Email Address" type="email" name="emailAddress" className="form-control"
                                                value={this.state.emailAddress} onChange={this.changeEmailAddressHandler}/>
                                        </div>
                                        <button className="btn btn-success w-100 mt-2" onClick={this.addCustomer}>Add</button>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-2">
                                            <label>Street: </label>
                                            <input placeholder="Street" name="street" className="form-control"
                                                value={this.state.street} onChange={this.changeStreetHandler}/>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label>House Number: </label>
                                            <input placeholder="House Number" type = "number" name="houseNumber" className="form-control"
                                                value={this.state.houseNumber} onChange={this.changeHouseNumberHandler}/>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label>State: </label>
                                            <input placeholder="State" name="state" className="form-control"
                                                value={this.state.state} onChange={this.changeStateHandler}/>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label>Country: </label>
                                            <input placeholder="Country" name="country" className="form-control"
                                                value={this.state.country} onChange={this.changeCountryHandler}/>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label>City: </label>
                                            <input placeholder="City" name="city" className="form-control"
                                                value={this.state.city} onChange={this.changeCityHandler}/>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label>zipCode: </label>
                                            <input placeholder="zip code" name="zipCode" className="form-control"
                                                value={this.state.zipCode} onChange={this.changeZipCodeHandler}/>
                                        </div>
                                        <button className="btn btn-danger w-100 mt-2" onClick={this.cancel.bind(this)} >Cancel</button>
                                    </div>
                                </form>
                            </div>
                       </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default AddCustomerComponent;
