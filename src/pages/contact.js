import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        address:'',
        city:'',
        state:'',
        zip:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted with data:", formData);

        setFormData({
            name:"",
            email:"",
            address:"",
            city:"",
            state:"",
            zip:"",
        })
    }

    return(
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                <form onSubmit={handleSubmit} className="">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Name</label>
                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} id="inputEmail4" placeholder="Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Email</label>
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} id="inputPassword4" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" className="form-control" name="zip" value={formData.zip} onChange={handleChange} id="inputZip" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Contact us</button>
                </form>
            </div>
        </div>
    );
}
export default Contact;