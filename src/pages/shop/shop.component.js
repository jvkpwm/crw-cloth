import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

export class  ShopPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }

    render() {
        return(
            <div>
                {
                    this.state.collections.map(({id, ...otherCollection}) => {
                        return <PreviewCollection key={id} {...otherCollection} />
                    })
                }
            </div>
        )
    }
}