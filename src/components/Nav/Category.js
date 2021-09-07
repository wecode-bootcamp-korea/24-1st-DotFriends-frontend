import React, { Component } from 'react';
import './Category.scss';

class Category extends Component {
  render() {
    const { category } = this.props;
    const { subCategory } = category;
    return (
      <li className="category">
        <div
          key={category.id}
          className="categoryLink"
          onClick={this.props.goToProductList}
        >
          {category.title}
          {subCategory && subCategory.length > 0 && (
            <i className="fas fa-chevron-down" />
          )}
        </div>
        {category.subCategory && (
          <div className="subCategoriesBox">
            <ul className="subCategories">
              {category.subCategory.map((sub, idx) => (
                <li className="subCategory" key={idx}>
                  <div>{sub}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    );
  }
}

export default Category;
