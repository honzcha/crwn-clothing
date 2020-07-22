import React from "react";

import Shop_Data from "./shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      collections: Shop_Data,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
