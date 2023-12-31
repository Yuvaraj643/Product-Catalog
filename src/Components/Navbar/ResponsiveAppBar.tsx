import React, { useState } from 'react';
const ResponsiveAppBar = () => {
  return (
    <>
      <nav className="navbar-expand-lg navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ZORO Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className="btn btn-success" type="submit">
          Search
        </button>
      </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default ResponsiveAppBar;
