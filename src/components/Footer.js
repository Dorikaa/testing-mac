import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { year: new Date().getFullYear() };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <footer>
                <ul className="site-link">
                    <div className="panel">
                        <h4>Do you want to buy this artwork? Write us an e-mail!</h4>
                        <textarea
                            style={{ width: "100%", height: "100%" }}
                            onChange={this.handleChange}
                            defaultValue={this.state.value} />
                    </div>
                    <li>
                        &copy; {this.state.year} Alexandra Caluseri
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer;