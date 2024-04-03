import React from 'react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const RecipeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 800px;
  margin: auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const RecipeHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const RecipeCategory = styled.span`
  display: inline-block;
  background-color: #f2f2f2;
  color: #333;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  font-size: 0.8em;
`;

const Tags = styled.div`
  text-align: center;
  margin: 10px 0;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const RecipeMeta = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  padding: 10px 0;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const IngredientSection = styled.section`
  margin-top: 20px;
`;

const InstructionSection = styled.section`
  margin-top: 20px;
`;

const TimeInfo = styled.p`
  font-style: italic;
  color: #666;
  margin-bottom: 10px;
`;

const IngredientList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Instructions = styled.div`
  margin-top: 20px;
`;


const RecipeTemplate = ({ pageContext: { data } }) => {
    // verify that the expected data is present
    console.log('Recipe data:', data);

  //check if the data object exists and has properties
  if (!data) {
    console.error('Recipe data is undefined');
    return <div>No recipe data available</div>;
  }

  // Destructure recipe data
  const { 
    title, 
    cookingTime, 
    preparationTime, 
    numberOfServings, 
    recipeInstruction, 
    ingredients,
    difficulty,
    mediaImage 
  } = data;

 // Use the URL directly for the img tag
 const imageUrl = mediaImage?.mediaImage?.url;

  return (
    <RecipeLayout>
      <RecipeHeader>
        <h1>{title}</h1>
      </RecipeHeader>
      {imageUrl && <img src={imageUrl} alt={`Image of ${title}`} />}
      <RecipeMeta>
        <MetaItem>
          <StaticImage alt="Prep Time" src="../images/knife.svg" />
          <TimeInfo>Prep Time: {preparationTime} mins</TimeInfo>
        </MetaItem>
  
        <MetaItem>
          <StaticImage alt="Cooking Time" src="../images/timer.svg" />
          <TimeInfo>Cook Time: {cookingTime} mins</TimeInfo>
        </MetaItem>
  
        <MetaItem>
          <StaticImage alt="Servings" src="../images/serves.svg" />
          <TimeInfo>Servings: {numberOfServings}</TimeInfo>
        </MetaItem>
  
        <MetaItem>
          <StaticImage alt="Difficulty" src="../images/difficulty.svg" />
          <TimeInfo>Difficulty: {difficulty}</TimeInfo>
        </MetaItem>
      </RecipeMeta>
      <IngredientSection>
        <h2>Ingredients</h2>
        <IngredientList>
          {(ingredients || []).map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </IngredientList>
      </IngredientSection>
      <InstructionSection>
        <h2>Instructions</h2>
        <Instructions dangerouslySetInnerHTML={{ __html: recipeInstruction?.processed }} />
      </InstructionSection>
    </RecipeLayout>
  );
  
};

export default RecipeTemplate;
