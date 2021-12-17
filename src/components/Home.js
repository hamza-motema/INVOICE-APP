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



        try {
            let response = fetch('http://localhost:3000/invoice', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                body: JSON.stringify({

                    total: 4071,


                })
            })

            console.log("This is response" + response)
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
