// current relevant tech stack = js, css, html, react, git, sql, firebase, scss

import "./TechStack.scss"

export default function TechStack() {
  return (
    <div className="container-ts">
      <h1 className="section-title">Tech Stack</h1>
      <div className="ts-list">
        <div className="ts-wrapper">
          <div className="ts-item ts-git">
            Git
          </div>
          <div className="ts-item ts-css">
            CSS
          </div>
          <div className="ts-item ts-sql">
            SQL
          </div>
          <div className="ts-item ts-react">
            React
          </div>
          <div className="ts-item ts-js">
            JavaScript
          </div>
          <div className="ts-item ts-firebase">
            FireBase
          </div>
          <div className="ts-item ts-html">
            HTML
          </div>
          <div className="ts-item ts-scss">
            SCSS
          </div>
        </div>
      </div>
    </div>
  )
}
