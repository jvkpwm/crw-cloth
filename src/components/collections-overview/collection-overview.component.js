import React from "react";


import "./collection-overview.styles.scss";
import PreviewCollection from "../preview-collection/preview-collection.component";
import {createStructuredSelector} from "reselect";
import {selectCollectionForPreview} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";


const CollectionOverview = ({collections}) => {

    return (
        <div className={"collections-overview"}>
            {
                collections.map(({id, ...otherCollection}) => {
                    return <PreviewCollection key={id} {...otherCollection} />
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview)
