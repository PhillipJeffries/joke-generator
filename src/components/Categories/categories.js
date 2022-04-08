import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';



import './categories.scss';


const Categories = ({categories, dispatch}) => {

    const [categoriesList, setCategoriesList] = useState([])

    useEffect(()=>{
        dispatch({type: 'CATEGORIES'})
        setCategoriesList(categories)
    },[categories])

    return(
        <div>
            <h3>categories</h3>
            
        </div>
    )
}


const mapStateToProps = store => {
    console.log('categories', store)
    const {categories} = store
    return {categories}
}


export default connect(mapStateToProps)(Categories)