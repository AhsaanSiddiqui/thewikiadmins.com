import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PostData from '../data/wikipedia-help.json';
import ModalForm from '../components/ModalForm'


export default class HelpYou extends Component {
    
    render() {
        return (
            <section className="help">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h1 className="reg-heading">How can a <span className="h-red">Wikipedia</span> <br/>page help you ?</h1>
                        </div>
                    </div>
                    <div className="boxes-wrap">
                        <div className="row justify-content-center">
                            {PostData.map((postDetail, index) => {
                                return (
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="helpbox">
                                            <div className="icon">
                                                <i className="fas fa-arrow-down"></i>
                                            </div>
                                            <div className="bodybox">
                                                <h1>{postDetail.title}</h1>
                                                <p>{postDetail.contentPara}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="geta text-center">
                            <ModalForm />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
