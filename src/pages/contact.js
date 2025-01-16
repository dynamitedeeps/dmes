import React from "react";

const Contact = () => {
    return(
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                <form className="">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Name</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Email</label>
                            <input type="email" className="form-control" id="inputPassword4" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" />
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
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Contact us</button>
                </form>
            </div>
        </div>
    );
}
export default Contact;