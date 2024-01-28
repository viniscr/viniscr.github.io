import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Still curious about me?</h2>
      <p>
        You can check all my available projects on my GitHub profile
      </p>
      <ul className="actions">
        <li>
          <a href="https://github.com/viniscr" className="button">
            Check my GitHub profile
          </a>
        </li>
      </ul>
    </section>
    <section>
      <h2>Follow me</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>Florianopolis &bull; Santa Catarina &bull; Brasil</dd>
        <dt>Email</dt>
        <dd>
          <a href="https://codebushi.com">alencarvi@gmail.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/vinisport"
            className="icon fab fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vinicius-barbosa" className="icon fab fa-linkedin alt">
            <span className="label">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/viniscr"
            className="icon fab fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        
      </ul>
    </section>
    <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a> & implementation <a href="https://github.com/viniscr">Vinícius Barbosa</a>.
    </p>
  </footer>
)

export default Footer
