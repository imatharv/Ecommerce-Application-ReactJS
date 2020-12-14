import React from 'react'
import Heading from './Heading'

export default function Inverteddualinfoblock({ heading, image }) {
  return (
    <section className="p-5 bg-light">
      <div className="container">
        <Heading title={heading} />
        <div className="row pb-4 mt-4">
        <div className="col-4 px-5">
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
          <div className="col-8 mx-auto px-5">
            <p className="lead text-dark mb-4">
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
