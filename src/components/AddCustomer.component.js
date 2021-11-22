/*
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

        //console.log('Customer: '+JSON.stringify(customer));
        console.log(customer)
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



*/

import {useFormik} from 'formik';
import * as yup from 'yup';
import {CustomerDataService} from "../services/customer.service"


function AddCustomerComponent(props) {

    console.log(props)

    const validationSchema = yup.object({
        firstName: yup.string().required('This is a required Field.'),
        lastName: yup.string().required('This is a required Field.'),
        birthDate: yup.date('Please enter a valid date').required('This is a required Field.'),
        jobTitle: yup.string().required('This is a required Field.'),
        category: yup.string().required('This is a required Field.'),
        emailAddress : yup.string().required('This is a required Field').email('Invalid email format'),
        street: yup.string().required('This is a required Field.'),
        houseNumber: yup.number().required('This is a required Field.'),
        state: yup.string().required('This is a required Field.'),
        country: yup.string().required('This is a required Field.'),
        city: yup.string().required('This is a required Field.'),
        zipCode: yup.string().required('This is a required Field.')
    })

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            birthDate: '',
            jobTitle: '',
            category: '',
            emailAddress : '',
            street: '',
            houseNumber: '',
            state: '',
            country: '',
            city: '',
            zipCode: '',
        },

        onSubmit: (values) => {
            console.log(values);

            let customer = {firstName: values.firstName, lastName: values.lastName,
                birthdate: values.birthDate, jobTitle: values.jobTitle,
                category: values.category, emailAddress: values.emailAddress,
                customerAddress: {
                    street: values.street, houseNumber: values.houseNumber, state: values.state,
                    country: values.country, city: values.city, zipCode: values.zipCode,
                }
               
            }

            CustomerDataService.addCustomer(customer).then(res => {
                props.history.push("/customers");
            })
        },

        validationSchema
    })


    const cancel = () => {
        props.history.push('/customers');
    }

    return (
        <div>
            <div className="container">
                   <div className="row">
                       <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Customer</h3>
                            <div className="card-body">
                                <form className="row">

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                        value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                        {formik.touched.firstName && formik.errors.firstName ? <div className='input__error'>{formik.errors.firstName}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name: </label>
                                        <input onBlur={formik.handleBlur} placeholder="Last Name" name="lastName" className="form-control"
                                               value={formik.values.lastName} onChange={formik.handleChange}/>
                                               {formik.touched.lastName && formik.errors.lastName ? <div className='input__error'>{formik.errors.lastName}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label>Birthdate: </label>
                                        <input onBlur={formik.handleBlur} placeholder="Birth Date" name="birthDate" className="form-control" type="Date"
                                               value={formik.values.birthDate} onChange={formik.handleChange}/>
                                               {formik.touched.birthDate && formik.errors.birthDate ? <div className='input__error'>{formik.errors.birthDate}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label>Job Title: </label>
                                        <input onBlur={formik.handleBlur} placeholder="Job Title" name="jobTitle" className="form-control"
                                               value={formik.values.jobTitle} onChange={formik.handleChange}/>
                                               {formik.touched.jobTitle && formik.errors.jobTitle ? <div className='input__error'>{formik.errors.jobTitle}</div> : null}
                                    </div>
                                    <div className="form-group">
                                    <label>Category: </label>
                                            <select value={formik.values.category} onChange={formik.handleChange} name="category" className="form-control" >
                                                <option selected hidden></option>
                                                <option>EXISTING_CUSTOMER</option>
                                                <option>NEW_CUSTOMER</option>
                                                <option>INACTIVE_CUSTOMER</option>
                                            </select>

                                            {formik.touched.category && formik.errors.category ? <div className='input__error'>{formik.errors.category}</div> : null}
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address: </label>
                                        <input onBlur={formik.handleBlur} placeholder="Email Address" name="emailAddress" className="form-control"
                                               value={formik.values.emailAddress} onChange={formik.handleChange}/>
                                               {formik.touched.emailAddress && formik.errors.emailAddress ? <div className='input__error'>{formik.errors.emailAddress}</div> : null}
                                    </div>
                                    <button className="btn btn-success w-100 mt-2" type='submit' onClick={formik.handleSubmit}>Add</button>
                                    </div>

                                    <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Street: </label>
                                        <input onBlur={formik.handleBlur} placeholder="Stree number etc" name="street" className="form-control"
                                               value={formik.values.street} onChange={formik.handleChange}/>
                                               {formik.touched.street && formik.errors.street ? <div className='input__error'>{formik.errors.street}</div> : null}
                                    </div>

                                    <div className="form-group">
                                        <label>House #: </label>
                                        <input onBlur={formik.handleBlur} placeholder="House number" name="houseNumber" className="form-control" type="number"
                                               value={formik.values.houseNumber} onChange={formik.handleChange}/>
                                               {formik.touched.houseNumber && formik.errors.houseNumber ? <div className='input__error'>{formik.errors.houseNumber}</div> : null}
                                    </div>

                                    <div className="form-group">
                                        <label>State: </label>
                                        <input onBlur={formik.handleBlur} placeholder="State" name="state" className="form-control"
                                               value={formik.values.state} onChange={formik.handleChange}/>
                                               {formik.touched.state && formik.errors.state ? <div className='input__error'>{formik.errors.state}</div> : null}
                                    </div>

                                    <div className="form-group">
                                        <label>Country: </label>
                                        <input onBlur={formik.handleBlur} placeholder="Country" name="country" className="form-control"
                                               value={formik.values.country} onChange={formik.handleChange}/>
                                               {formik.touched.country && formik.errors.country ? <div className='input__error'>{formik.errors.country}</div> : null}
                                    </div>

                                    <div className="form-group">
                                        <label>City: </label>
                                        <input onBlur={formik.handleBlur} placeholder="City" name="city" className="form-control"
                                               value={formik.values.city} onChange={formik.handleChange}/>
                                               {formik.touched.city && formik.errors.city ? <div className='input__error'>{formik.errors.city}</div> : null}
                                    </div>

                                    <div className="form-group">
                                        <label>Zip Code: </label>
                                        <input onBlur={formik.handleBlur} placeholder="Zip Code" name="zipCode" className="form-control"
                                               value={formik.values.zipCode} onChange={formik.handleChange}/>
                                               {formik.touched.zipCode && formik.errors.zipCode ? <div className='input__error'>{formik.errors.zipCode}</div> : null}
                                    </div>
                                    <button className="btn btn-danger w-100 mt-2" onClick={cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </div>

                                    
                                    
                                </form>
                            </div>
                       </div>
                   </div>
               </div>
        </div>
    )
}

export default AddCustomerComponent
