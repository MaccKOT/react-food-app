import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';
import Preloader from '../components/Preloader';

const Reciepe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className='recipe'>
          <img
            className='recipeImg'
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
          <h1>{recipe.strMeal}</h1>
          <h4>Category: {recipe.strCategory}</h4>
          {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
          {recipe.strYoutube ? (
            <div className='row'>
              {/* <h5>
                Watch{' '}
                <a target='_blank' rel='noreferrer' href={recipe.strYoutube}>
                  video recipe on YouTube
                </a>
              </h5> */}
              <iframe
                id='ytplayer'
                type='text/html'
                width='640'
                height='360'
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                frameBorder='0'
                style={{ marginTop: '1rem' }}
              />
            </div>
          ) : null}

          <table className='centered highlight'>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {/* !TODO разбивать предложения на параграфы, а не на предложения через br */}
          <p
            className='flow-text'
            dangerouslySetInnerHTML={{
              __html: recipe.strInstructions.replace(
                /(?:\r\n|\r|\n)/g,
                '<br />'
              ),
            }}></p>
        </div>
      )}

      <button onClick={goBack} className='btn' style={{ marginBottom: '1rem' }}>
        Return to page with recipes
      </button>
    </>
  );
};

export default Reciepe;
