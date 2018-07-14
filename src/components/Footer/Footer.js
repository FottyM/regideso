import React from 'react'
import Heart from 'react-feather/dist/icons/heart'

const Footer = () => {
  return (
    <footer className="container-fluid" id="footer">
      <div className="row">
        <div className="col-12 bg-dark py-5 text-white text-center">
          <p>
            Made with
            <span className="text-danger">
              <Heart className="feathre" color="red" />
            </span>in Tallinn, Estonia, <br /> by
            <a
              href="https://www.linkedin.com/in/fortunat-mutunda-06820a2b/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-weight-bold font-italic"
            >
              Fortunat Mutunda
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
