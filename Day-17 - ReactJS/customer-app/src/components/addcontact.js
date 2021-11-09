import React from "react";
import './customer.css'



class AddContact extends React.Component {
    state = {
        sid: "",
        sname: "",
        address: "",
        coursename: "",
    };

    add = (e) => {
        e.preventDefault()
        if (this.state.sname === "" || this.state.sid === "") {
            alert("All fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);

        this.setState({ sid: "", sname: "", address: "", coursename: "" });

    };
    render() {
        return (
            <div className="ui main">
                <h2 className="table-header"> ADD DETAILS</h2>
                <form className="stud-table" onSubmit={this.add}>
                    <div className="field">
                        <label>Student ID: </label>
                        <input
                            type="text"
                            name="id"
                            value={this.state.sid}
                            onChange={(e) => this.setState({ sid: e.target.value })}
                        />
                    </div>

                    <div className="field">
                        <label>Student Name:</label>
                        <input
                            type="text"
                            name="name"

                            value={this.state.sname}
                            onChange={(e) => this.setState({ sname: e.target.value })}
                        />
                    </div>

                    <div className="field">
                        <label>Address:</label>
                        <input
                            type="text"
                            name="address"

                            value={this.state.address}
                            onChange={(e) => this.setState({ address: e.target.value })}
                        />
                    </div>


                    <div className="field">
                        <label>Course Name:</label>
                        <input
                            type="text"
                            name="coursename"

                            value={this.state.coursename}
                            onChange={(e) => this.setState({ coursename: e.target.value })}
                        />
                    </div>


                    <button className="cust-btn">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;