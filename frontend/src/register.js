import React from "react";
import './register.css';

function addBoard(){

}

function Register(){
    return(
    <div className="regContainer">
        <form onSubmit={addBoard}>

            <div>
                <label class="form-label">Billboard Image</label>
                <div className="imgUpload mb-3">
                </div>
            </div>

            <div>
                <label class="form-label">Billboard Title</label>
                <input type="text" class="form-control" id="exampleInputEmail1" />
            </div>

            <div>
                <label class="form-label">Billboard Address</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>

            <div>
                <label class="form-label">Company Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" />
            </div>

            <div>
                <label class="form-label">Contact No.</label>
                <input type="text" class="form-control" id="exampleInputEmail1" />
            </div>

            <div>
                <label class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" />
            </div>
            <br />
            <div>
                <button type="submit" class="btn-primary">Submit</button>
                &nbsp;
                <button type="submit" class="btn-danger">Reset</button>
            </div>
        </form>
    </div>
    )
}

export default Register;