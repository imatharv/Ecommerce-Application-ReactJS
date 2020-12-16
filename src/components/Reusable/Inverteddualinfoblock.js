import React from 'react'
import Heading from './Heading'

export default function Inverteddualinfoblock({ heading, image }) {
  return (
    <section className="p-lg-5 p-md-4 p-sm-3 bg-light">
      <div className="container pt-5 pb-2">
        <Heading title={heading} className="" />
        <div className="row pb-4 mt-3 mx-auto">
        <div className="col-lg-4 col-md-5 px-lg-5 px-md-4 px-sm-3 mb-4">
            <div className="card shadow border-0">
              <img
                src={image}
                className="card-img-top"
                alt="image goes here"
              />
              <div className="card-body">
                <h5 className="card-title">Photos</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  omnis inventore harum corporis nemo, quasi eaque maiores
                  veritatis rem non consequuntur tempore earum aliquid
                  distinctio culpa vitae officia, suscipit cupiditate!
                </p>
                <a href="#" className="btn btn-primary w-100">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7 px-sm-5 px-md-4 px-sm-4">
            <p className="lead text-dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto adipisci aut numquam illo. Error repudiandae commodi
              officiis atque aspernatur voluptatum tempore enim dolorem
              similique, quidem, alias exercitationem quia dignissimos minus
              architecto unde modi asperiores quos, delectus accusantium
              deserunt sed rerum officia possimus. Vel facere dignissimos
              voluptate libero a deleniti similique. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dicta perspiciatis maxime impedit
              alias magni eligendi non, distinctio magnam molestiae ducimus.
              Voluptate obcaecati aliquid perspiciatis voluptas impedit porro
              autem tempore expedita ducimus, quam quas numquam molestiae
              temporibus suscipit, amet dolor recusandae quibusdam voluptatem
              sit quisquam, iusto placeat quaerat. Quasi laudantium ex fugiat,
              in quaerat sint. Quis aut quos nemo laboriosam ad porro, alias
              tempore assumenda repellendus dolor. Eius dicta unde molestiae
              suscipit inventore, dolor tenetur, facilis rem reprehenderit, cum
              exercitationem cumque officia nulla veritatis perspiciatis? Sed
              ipsam quos quo nisi consequatur ipsum est velit praesentium nobis!
              Asperiores voluptatum illo corporis dolores. Eius dicta unde
              molestiae suscipit inventore, dolor tenetur, facilis rem
              reprehenderit, cum exercitationem cumque officia nulla veritatis
              perspiciatis? 
            </p>
          </div>
          
        </div>
      </div>
    </section>
  )
}
