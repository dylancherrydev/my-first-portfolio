// current relevant tech stack = js, css, html, react, git, sql, nodeJS, sass, firebase

import "./TechStack.scss"

export default function TechStack() {
  return (
    <div className="container-ts">
      <h1 className="section-title">Tech Stack</h1>
      <div className="ts-list">
        <div className="ts-wrapper">
          <div className="ts-item ts-git">
            <div className="ts-box">
              <p>Git</p>
            </div>
          </div>
          <div className="ts-item ts-css">
            <div className="ts-box">
              <p>CSS 3</p>
            </div>
          </div>
          <div className="ts-item ts-sql">
            <div className="ts-box">
              <p>SQL</p>
            </div>
          </div>
          <div className="ts-item ts-react">
            <div className="ts-box">
              <p>React</p>
            </div>
          </div>
          <div className="ts-item ts-node">
            <div className="ts-box">
              <p>Node</p>
            </div>
          </div>
          <div className="ts-item ts-js">
            <div className="ts-box">
              <p>JavaScript ES6</p>
            </div>
          </div>
          <div className="ts-item ts-firebase">
            <div className="ts-box">
              <p>Firebase</p>
            </div>
          </div>
          <div className="ts-item ts-html">
            <div className="ts-box">
              <p>HTML 5</p>
            </div>
          </div>
          <div className="ts-item ts-sass">
            <div className="ts-box">
              <p>Sass</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
