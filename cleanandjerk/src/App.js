import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = { loading: false };

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Clean and Jerk</h2>
                </div>

                <div className="container">


                    <a className="logo" href="https://themes.krucial.com.au/fitnessgym-1/">


                        <img src="https://themes.krucial.com.au/fitnessgym-1/wp-content/themes/fitnessgym/assets/img/logo/logo-dark@2x.png" className="has-retina dark-logo" alt="logo" width="152" height="50" />


                        <img src="https://themes.krucial.com.au/fitnessgym-1/wp-content/themes/fitnessgym/assets/img/logo/logo-light@2x.png" className="has-retina light-logo" alt="logo" width="152" height="50" />
                    </a>

                    <div className="main-menu">
                        <ul id="menu-main-menu" className="primary-menu"><li id="menu-item-376" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-376"><a href="https://themes.krucial.com.au/fitnessgym-1/" aria-current="page">Home</a></li>
                            <li id="menu-item-367" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-367"><a >Pages</a>
                                <ul className="sub-menu">
                                    <li id="menu-item-374" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-374"><a href="https://themes.krucial.com.au/fitnessgym-1/about/">About</a></li>
                                    <li id="menu-item-380" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-380"><a href="https://themes.krucial.com.au/fitnessgym-1/trainers/">Trainers</a></li>
                                    <li id="menu-item-379" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-379"><a href="https://themes.krucial.com.au/fitnessgym-1/testimonial-layouts/">Testimonials</a></li>
                                    <li id="menu-item-382" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-382"><a href="https://themes.krucial.com.au/fitnessgym-1/bmi-calculator/">BMI Calculator</a></li>
                                    <li id="menu-item-378" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-378"><a href="https://themes.krucial.com.au/fitnessgym-1/contact/">Contact</a></li>
                                    <li id="menu-item-373" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-373"><a href="https://themes.krucial.com.au/fitnessgym-1/404">404 Page</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-375" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-375"><a href="https://themes.krucial.com.au/fitnessgym-1/our-classes/">Classes</a></li>
                            <li id="menu-item-377" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-377"><a href="https://themes.krucial.com.au/fitnessgym-1/blog/">Blog</a></li>
                            <li id="menu-item-381" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-381"><a href="https://themes.krucial.com.au/fitnessgym-1/shop/">Shop</a></li>
                        </ul>
                    </div>
                </div>


                <p>{ this.state.loading.toString() }</p>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
