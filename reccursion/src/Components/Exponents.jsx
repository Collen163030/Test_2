import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Exponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            calculate: undefined,
            answer: "",
        }
    }
    handleChange = e => {
        e.preventDefault()
        this.setState({
            number: e.target.value
        })
    }
    onSubmit = () => {
        var { number, calculate } = this.state
        calculate = eval(number * number);
        this.setState({
            answer: calculate,
        })
    }
    render() {
        const { answer } = this.state
        return (
            <div>
                <div>
                    <h2>Calculate exponent reccursion</h2>
                    <form>
                        <input type="number" onChange={this.handleChange} />
                    </form>
                    <button onClick={this.onSubmit}>Submit</button>
                </div>
                <div>
                    <label>Answer:</label>
                    <span>{answer}</span>
                </div>
            </div>
        );
    }
}

Exponents.propTypes = {

};

export default Exponents;