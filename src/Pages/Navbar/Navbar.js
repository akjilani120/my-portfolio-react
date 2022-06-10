import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white  w-100 ">
                    <div class="container">
                        <a class="navbar-brand" href="#">Abdul kader Jilani</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Blogs</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">News</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
        </div>
    );
};

export default Navbar;