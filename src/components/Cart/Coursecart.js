import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import Img from 'gatsby-image'

export default class Coursecart extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            courses: props.courses.edges,
            mycourses: props.courses.edges,
        }
    }
    render() {
        return (
            <section className="py-5 ">
                <div className="container">
                    <Heading title="Courses" />
                    <div className="row">
                        {
                            this.state.mycourses.map(({node}) => {
                                return (
                                    <div
                                    key={node.id}
                                    className="col-11 col-md-6 d-flex mx-auto mb-4"
                                    >
                                        <Img fixed={node.image.fixed} />
                                        <div className="flex-grow-1 px-4">
                                            <div className="d-flex">
                                                <h6 className="">{node.title}</h6>
                                                <h6 className="ms-5"><span className="badge bg-success">${node.price}</span></h6>
                                            </div>
                                            <p className="text-muted">
                                                <small>{node.description.description}</small>
                                            </p>
                                            <button 
                                            data-item-id={node.id}
                                            data-item-name={node.title}
                                            data-item-price={node.price}
                                            data-item-image={node.image.fixed.src}
                                            data-item-url="https://myfirstreactapplication.netlify.app/"
                                            className="btn btn-warning snipcart-add-item">Join now</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
