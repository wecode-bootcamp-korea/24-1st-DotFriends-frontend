import React, { Component } from 'react';
import './Category.scss';

class Category extends Component {
  handleMenu = () => {};
  render() {
    const { category } = this.props;
    const { subCategory } = category;
    return (
      <>
        <li className="category">
          <a href="#" key={category.id} className="categoryLink">
            {category.title}
            {subCategory && subCategory.length > 0 && (
              <i className="fas fa-chevron-down" />
            )}
          </a>
          {category.subCategory && (
            <ul className="subCategories">
              {category.subCategory.map((sub, idx) => (
                <li className="subCategory">
                  <a href="#" key={idx}>
                    {sub}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      </>
    );
  }
}

export default Category;
