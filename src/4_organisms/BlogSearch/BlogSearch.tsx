import React from 'react';

function BlogSearch() {
    return (
        <div className="blogSearch">
            <h2 className="blogSearch__title">Blog</h2>

            <p className="blogSearch__p">
                Search on title, driver or team to find your specific article. Or go through the list and read them all.
            </p>

            <form className="blogSearch__form">
                <label className="blogSearch__form__label"><input className="blogSearch__form__input" type="text" placeholder="Search on title" /></label>
                <button className="button button-primary skew"><span>Search <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></button>
            </form>
        </div>
    );
}

export default BlogSearch;