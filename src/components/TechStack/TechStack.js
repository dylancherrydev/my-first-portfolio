// current relevant tech stack = js, css, html, react, git, sql, nodeJS, sass, firebase

// styles
import "./TechStack.scss";

// images
import logo_css from "../../assets/logo_css.png"
import logo_firebase from "../../assets/logo_firebase.png"
import logo_git from "../../assets/logo_git.png"
import logo_html from "../../assets/logo_html.png"
import logo_javascript from "../../assets/logo_javascript.png"
import logo_node from "../../assets/logo_node.png"
import logo_python from "../../assets/logo_python.png"
import logo_react from "../../assets/logo_react.png"
import logo_sass from "../../assets/logo_sass.png"
import logo_sql from "../../assets/logo_sql.png"

export default function TechStack() {
  return (
    <div className="container-ts">
      <div className="container-ts-desktop">
        <h1 className="section-title">Tech Stack</h1>
        <p className="ts-msg">(Hover over each color)</p>
        <div className="ts-list">
          <div className="ts-wrapper">
            <div className="ts-item ts-git">
              <div className="ts-box">
                <img src={logo_git} alt="git logo" />
                <p>git</p>
              </div>
            </div>
            <div className="ts-item ts-css">
              <div className="ts-box">
                <img src={logo_css} alt="CSS logo" />
                <p>CSS</p>
              </div>
            </div>
            <div className="ts-item ts-sql">
              <div className="ts-box">
                <img src={logo_sql} alt="SQL logo" />
                <p>SQL</p>
              </div>
            </div>
            <div className="ts-item ts-react">
              <div className="ts-box">
                <img src={logo_react} alt="React logo" />
                <p>React</p>
              </div>
            </div>
            <div className="ts-item ts-node">
              <div className="ts-box">
                <img src={logo_node} alt="Node JS logo" />
                <p>Node JS</p>
              </div>
            </div>
            <div className="ts-item ts-js">
              <div className="ts-box">
                <img src={logo_javascript} alt="JavaScript logo" />
                <p>JavaScript</p>
              </div>
            </div>
            <div className="ts-item ts-firebase">
              <div className="ts-box">
                <img src={logo_firebase} alt="Firebase logo" />
                <p>Firebase</p>
              </div>
            </div>
            <div className="ts-item ts-html">
              <div className="ts-box">
                <img src={logo_html} alt="HTML logo" />
                <p>HTML</p>
              </div>
            </div>
            <div className="ts-item ts-sass">
              <div className="ts-box">
                <img src={logo_sass} alt="Sass logo" />
                <p>Sass</p>
              </div>
            </div>
            <div className="ts-item ts-python">
              <div className="ts-box">
                <img src={logo_python} alt="Python logo" />
                <p>Python</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-ts-mobile">
        <h1 className="section-title">Tech Stack</h1>
        <div className="ts-wrapper-mobile">
          <div className="ts-box-mobile">
            <img src={logo_git} alt="git logo" />
            <p>git</p>
          </div>
          <div className="ts-box-mobile">
            <img src={logo_css} alt="CSS logo" />
            <p>CSS</p>
          </div>
          <div className="ts-box-mobile">
            <img src={logo_sql} alt="SQL logo" />
            <p>SQL</p>
          </div>
          <div className="ts-box-mobile">
            <img src={logo_react} alt="React logo" />
            <p>React</p>
          </div>
          <div className="ts-box-mobile">
            <img src={logo_node} alt="Node JS logo" />
            <p>Node JS</p>
          </div>
          <div className="ts-box-mobile">
            <img src={logo_javascript} alt="JavaScript logo" />
            <p>JavaScript</p>
          </div>
          <div className="ts-box-mobile">
            <img src={logo_firebase} alt="Firebase logo" />
            <p>Firebase</p>
          </div>
          <div className="ts-box-mobile">
            <img src={logo_html} alt="HTML logo" />
            <p>HTML</p>
          </div>
          <div className="ts-box-mobile">
            <img src={logo_sass} alt="Sass logo" />
            <p>Sass</p>
          </div>
          <div className="ts-box-mobile"></div>
          <div className="ts-box-mobile">
            <img src={logo_python} alt="Python logo" />
            <p>Python</p>
          </div>
        </div>
      </div>
    </div>
  )
}
