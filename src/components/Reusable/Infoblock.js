import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'
 
export default function Infoblock({ heading }) {
  return (
    <section className="my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-dark mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              obcaecati suscipit eius, omnis, incidunt sapiente dolorum officia
              iste distinctio quas earum doloremque non itaque et laborum
              praesentium nam, quam aliquid saepe perspiciatis fugit iusto eos
              fuga. Et fuga quibusdam consectetur! Esse dicta fuga nesciunt
              placeat dignissimos vero tempora. Distinctio quod minus earum
              sequi nisi repellat a iusto aperiam consectetur provident?
            </p>
            <Link to="/about/">
                <button className="btn btn-warning btn-lg btn-about-us">
                    {heading}
                </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
