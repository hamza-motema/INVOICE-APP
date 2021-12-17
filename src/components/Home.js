import React, { Component } from 'react'
import axios from "axios";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            invoces: [],
            description: "",
            paymentTerms: 0,
            status: false,
            total: 0,
            itemList: [],
            isLoading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
        this.deleteInvoce = this.deleteInvoce.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:3000/invoice")
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    isLoading: true,
                    invoces: json
                });
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios
            .post("http://localhost:3000/invoice", {
                "description": this.state.description,
                "paymentTerms": this.state.paymentTerms,
                "status": this.state.status,
                "total": this.state.total,
                "itemList": this.state.itemList,
                "paymentDue": "2018-03-29T00:00:00.000Z",
            })
            .then((response) => {
                this.componentDidMount()
            });
    };

    deleteAll = () => {
        axios
            .delete("http://localhost:3000/invoice", {
            });
        this.componentDidMount()
    };

    deleteInvoce(id) {
        axios
            .delete("http://localhost:3000/invoice/" + id.target.value, {
            });
        this.componentDidMount()
    };


    render() {
        return (
            <div id="">
                <button onClick={this.deleteAll}>Supprimer all</button>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Description:
                        <input type="text" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} />
                    </label>
                    <label>
                        Total:
                        <input type="text" value={this.state.total} onChange={e => this.setState({ total: e.target.value })} />
                    </label>
                    <label>
                        paymentTerms:
                        <input type="text" value={this.state.paymentTerms} onChange={e => this.setState({ paymentTerms: e.target.value })} />
                    </label>
                    <button type="Submit">Valider</button>
                </form>

                {this.state.invoces.map((item) => {
                    return (
                        <div key={item._id}>
                            <p>{item.description}</p>
                            <button value={item._id} onClick={this.deleteInvoce}  >X</button>
                        </div>
                    )
                })
                }
            </div >
        )
    }
}
