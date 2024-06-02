import Image from "next/image"
import React from "react"

export function ScreenFooter() {
  return (
    <div align="right" className="logo">
      <div>
        <div>
          <div
            className="logo"
            style={{ verticalAlign: "top", paddingight: "0px" }}
          >
            <small>
              <strong>
                webMUSHRA
                {/* <!-- build:template:dev Dev/build --> */}
                1.4.3 by
              </strong>
            </small>
          </div>
          <div className="logo">
            <a href="https://www.audiolabs-erlangen.de/" className="ui-link">
              <Image src="design/images/alabs_new.png" className="logo" />
            </a>
          </div>
          <div className="logo">
            <a href="http://www.iis.fraunhofer.de/" className="ui-link">
              <Image src="design/images/iis.svg" className="logo" />
            </a>
          </div>
          <div className="logo">
            <a href="https://www.fau.eu/" className="ui-link">
              <Image src="design/images/techfak.svg" className="logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
