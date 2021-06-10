import { Component } from 'react'
import { Link } from 'react-router-dom'
class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue ">
            <Link to="/"><h4>Examination Depertment</h4></Link>
          </div>
        </nav>
      </div>
    )
  }

}
export default Nav