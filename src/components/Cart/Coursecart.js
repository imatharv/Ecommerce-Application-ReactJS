import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import Img from 'gatsby-image'

const getCategory = items => {
    let holdItems = items.map(items => items.node.category)
    let holdCategories = new Set(holdItems)
    let categories = Array.from(holdCategories)
    categories = ["All",...categories]
    return categories
}

export default class Coursecart extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            courses: props.courses.edges,
            mycourses: props.courses.edges,
            mycategories: getCategory(props.courses.edges),
        }
    }

    categoryClicked = category => {
        let keepitsafe = [...this.state.courses]

        if (category === "All") {
            this.setState(() => {
                return { mycourses:keepitsafe }
            })
        } else {
            let holdme = keepitsafe.filter(({node}) => node.category === category )
            this.setState(() => {
                return { mycourses: holdme }
            })
        }
    }

    render() {
        return (
            <section className="py-5 ">
                <div className="container">
                    <Heading title="Courses" />
                    <div className="row my-4">
                        <div className="col-10 mx-auto text-center">
                            {
                                this.state.mycategories.map((category, index) => {
                                    return (
                                      <button
                                        type="button"
                                        className="btn btn-primary m-3"
                                        key={index}
                                        onClick={() => {
                                            this.categoryClicked(category)
                                        }}
                                      >
                                          {category}
                                      </button>
                                    )
                                })
                            }
                        </div>
                    </div>
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

