import React from "react"

export default function Footer({ copyrightYear }) {
  return (
    <footer>
      <div className="footer-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 pt-2 mx-auto text-center bg-theme-footer text-dark">
              <h6>Awesome copyright footer &copy; {copyrightYear}</h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
