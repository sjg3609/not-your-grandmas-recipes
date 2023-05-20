import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function RecipeCard() {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    return (
        <>
            <h1>Recipe Card</h1>
        </>
    )
}

export default RecipeCard;