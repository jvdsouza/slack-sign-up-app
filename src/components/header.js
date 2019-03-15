import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className='ma0 pa0'
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <div
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontFamily: 'Arial',
            padding: 10
          }}
        >
          {siteTitle}
        </div>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
