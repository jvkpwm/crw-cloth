import React from "react";
// import PreviewCollection from "../../components/preview-collection/preview-collection.component";
// import {connect} from "react-redux";
// import {createStructuredSelector} from "reselect";
// import {selectCollections} from "../../redux/shop/shop.selectors";
import CollectionOverview from "../../components/collections-overview/collection-overview.component";
import {Route, Routes} from "react-router-dom";
import CollectionPage from "../collection/collection.component";


const ShopPage = () => {

    return(
        <div>
            <Routes>
                <Route path={"/"} element={<CollectionOverview/>}/>
                <Route path={`/:collectionId`} element={<CollectionPage/>} />
            </Routes>
        </div>
    )
}



export default ShopPage;