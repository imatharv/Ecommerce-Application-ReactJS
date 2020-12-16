import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"

const getCategory = items => {
  let holdItems = items.map(items => items.node.category)
  let holdCategories = new Set(holdItems)
  let categories = Array.from(holdCategories)
  categories = ["All", ...categories]
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
        return { mycourses: keepitsafe }
      })
    } else {
      let holdme = keepitsafe.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { mycourses: holdme }
      })
    }
  }

  render() {
    return (
      <section className="p-lg-5 p-md-4 p-sm-3 bg-light">
        <div className="py-5 container">
          <Heading title="Courses" />
          <div className="row my-4">
            <div className="mx-auto text-center">
              {this.state.mycategories.map((category, index) => {
                return (
                  <button
                    type="button"
                    className="btn btn-outline-secondary px-5 py-1 mx-2 mb-5"
                    key={index}
                    onClick={() => {
                      this.categoryClicked(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-9">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {this.state.mycourses.map(({ node }) => {
                  return (
                    <div key={node.id} className="">
                      <div class="col">
                        <div className="card border-light shadow-sm ">
                          <div className="row g-0">
                            <div className="col-md-6">
                              <Img fixed={node.image.fixed} className="" />
                            </div>
                            <div className="col-md-6">
                              <div className="card-body">
                                <div className="">
                                  <h5 className="card-title">{node.title}</h5>
                                </div>
                                <p className="card-text text-capitalize">
                                  {node.description.description}
                                </p>
                                <div className="row justify-content-between">
                                  <div className="col-4">
                                    <button className="btn btn-light">
                                      ${node.price}
                                    </button>
                                  </div>
                                  <div className="col-8">
                                    <button
                                      data-item-id={node.id}
                                      data-item-name={node.title}
                                      data-item-price={node.price}
                                      data-item-image={node.image.fixed.src}
                                      data-item-url="https://myfirstreactapplication.netlify.app/"
                                      className="btn btn-warning snipcart-add-item w-75 shadow-sm float-end"
                                    >
                                      Join now
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
