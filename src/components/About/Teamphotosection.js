import React from "react"

export default function Teamphotosection() {
  return (
    <div className="row mb-5">
        <div className="col-10 col-sm-10 mx-auto">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card shadow-sm h-100">
                        <img src="https://images.pexels.com/photos/3808822/pexels-photo-3808822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top h-50" alt="image goes here" />
                        <div className="card-body">
                            <h5 className="card-title">Amelia</h5>
                            <p className="card-text">
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                            </p>
                            <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm h-100">
                        <img src="https://images.pexels.com/photos/3771045/pexels-photo-3771045.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top h-50" alt="image goes here" />
                        <div className="card-body">
                            <h5 className="card-title">George</h5>
                            <p className="card-text">
                            This card has supporting text below as a natural lead-in to
                            additional content.
                            </p>
                            <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm h-100">
                        <img src="https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top h-50" alt="image goes here" />
                        <div className="card-body">
                            <h5 className="card-title">Jacob</h5>
                            <p className="card-text">
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This card has even longer content
                            than the first to show that equal height action.
                            </p>
                            <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
