import React, { useState } from "react";
import "./index.css"

const Forms = () => {

    // here fullName is an object having two attributes "fname and lname"
    const [fullName, setInputs] = useState(
        {
            fname: "",
            lname: "",
            email: "",
            phone: ""
        }
    );

    const inputEvent = (event) => {
        const { value, name } = event.target;
        // updating the values using setInputs 
        setInputs((preVal) => {
            if (name === 'fname') {
                return {
                    fname: value,
                    lname: preVal.lname,
                    email: preVal.email,
                    phone: preVal.phone
                };
            }
            else if (name === "lname") {
                return {
                    fname: preVal.fname,
                    lname: value,
                    email: preVal.email,
                    phone: preVal.phone
                };
            }
            else if (name === "email") {
                return {
                    fname: preVal.fname,
                    lname: preVal.lname,
                    email: value,
                    phone: preVal.phone
                };
            }
            else if (name === 'phone') {
                return {
                    fname: preVal.fname,
                    lname: preVal.lname,
                    email: preVal.email,
                    phone: value,
                };
            }
        })
    };
    // preventDefault prevents the default behaviour of form tag
    const onSubmits = (event) => {
        event.preventDefault();
        alert('Form Submitted')
    };
    // onSubmit event in form tag can be written in button tag using onClick function
    return (
        <>
            <form onSubmit={onSubmits}>
                <div>
                    {/* for name */}
                    <h1>Hello {fullName.fname} {fullName.lname} </h1>
                    <p>{fullName.email}</p>
                    <br />
                    <p>{fullName.phone}</p>
                    <br />
                    <input type="text" placeholder="Enter your first name"
                        name="fname"
                        onChange={inputEvent} value={fullName.fname}
                    />
                    <br />
                    {/* for password */}

                    <input type="text" placeholder="Enter your last name"
                        name="lname"
                        onChange={inputEvent} value={fullName.lname}
                    />
                    <br />

                    <input type="email" placeholder="Enter your email"
                        name="email"
                        onChange={inputEvent} value={fullName.email}
                        autoComplete="off"
                    />
                    <br />

                    <input type="number" placeholder="Enter your number"
                        name="phone"
                        onChange={inputEvent} value={fullName.phone}
                    />
                    <br />
                    <button type="submit">Click Me</button>
                </div>
            </form>

        </>
    );
};


export default Forms;