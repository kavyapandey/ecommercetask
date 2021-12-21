import React from "react";

function Header({ getSearchTerm }) {
  return (
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-secondary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={getSearchTerm}
              />
              <button class="btn btn-outline-success" type="submit" onClick = {getSearchTerm}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
