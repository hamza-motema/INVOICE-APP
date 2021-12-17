import React, { Component } from 'react'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            invoces: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:3000/invoice")
            .then((response) => response.json())
            .then((json) => {
                this.setState({ invoces: json });
            });
    }

    handleSubmit(event) {


        event.preventDefault();
        try {
            let response = fetch('http://localhost:3000/invoice', {
                method: 'POST',
                headers: {
                    'tenantid': '1',
                    'Content-Type': 'application/json',
                    'language': '0',

                },
                body: JSON.stringify({

                    total: 4071,


                })
            })
            let json = response.json();
            console.log("This is response" + json)
        } catch (error) {
            this.setState({ errorMessage: error })
            console.log("This is error" + error)
        }
    };

    render() {
        return (
            <div id="signup">
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="First Name" type="text" name="first_name" /><br />
                    <input placeholder="Last Name" type="text" name="last_name" /><br />
                    <button type="Submit">Start</button>
                </form>

            </div>
        )
    }
}
