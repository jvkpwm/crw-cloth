import React from "react";
import {useParams} from "react-router-dom";

import "./collection.styles.scss";
import { useSelector} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";


// eslint-disable-next-line react-hooks/rules-of-hooks
const CollectionPage = (state) => {
    // console.log("state from collection page: ", state)
    let {collectionId} = useParams();

    const collection = useSelector(selectCollection(collectionId))

    const {title, items} = collection;



    return (
        <div className={"collection-page"}>
            <h2 className={"title"}>{title}</h2>
            <div className={"items"}>
                {
                    items.map(
                        item => {
                            return <CollectionItem key={item.id} item={item}/>
                        }
                    )
                }
            </div>
        </div>
    )
}

// const GetParams = () => {
//
//     const {collectionId} = useParams();
//     // console.log(params);
//     return collectionId;
// }

// const mapStateToProps = (state, ownProps) => {
//     let collectionId = GetParams();
//
//     console.log("state from map sta.f. ", ownProps)
//
//     return ({
//         collection: selectCollection(collectionId)(state)
//     })
// }

export default CollectionPage;