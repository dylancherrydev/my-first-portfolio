// current relevant tech stack = js, css, html, react, git, sql, firebase, scss

import "./TechStack.scss"

export default function TechStack() {
  return (
    <div className="container-ts">
      <h1 className="section-title">Tech Stack</h1>
      <div className="ts-list">
        <div className="ts-wrapper">
          <div className="ts-logo ts-git">
            Git
          </div>
          <div className="ts-logo ts-css">
            CSS
          </div>
          <div className="ts-logo ts-sql">
            SQL
          </div>
          <div className="ts-logo ts-react">
            React
          </div>
          <div className="ts-logo ts-js">
            JavaScript
          </div>
          <div className="ts-logo ts-firebase">
            FireBase
          </div>
          <div className="ts-logo ts-html">
            HTML
          </div>
          <div className="ts-logo ts-scss">
            SCSS
          </div>
        </div>
      </div>
    </div>
  )
}
