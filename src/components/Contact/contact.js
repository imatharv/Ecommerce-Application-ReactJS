import React from 'react'
import Heading from '../Reusable/Heading'

export default function contact() {
    return (
        <section className="py-5">
            <Heading title="Contact us" />
            <div className="row justify-content-center">
                <div className="col-sm-5 col-10">
                    <form action="https://formspree.io/f/xbjpzwpv" method="POST">
                        <div className="input-group mb-3">
                            <input type="text" name="name" id="name" placeholder="Your name" className="form-control" required />
                        </div>
                        <div className="input-group mb-3">
                            <input type="email" name="email" id="email" placeholder="Your email" className="form-control" required />
                        </div>
                        <div className="input-group mb-3">
                            <input type="number" name="mobile" id="mobile" placeholder="Your mobile" className="form-control" required />
                        </div>
                        <div className="input-group mb-3">
                            <textarea type="text" name="description" id="description" placeholder="Your message" rows="6" className="form-control" required />
                        </div>
                        <button type="submit" className="btn w-100 btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
