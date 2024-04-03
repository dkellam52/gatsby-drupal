import React from 'react';
import styled from 'styled-components';

// Styled components
const Title = styled.h1`
  font-size: 2em;
  color: #333;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0.5em;
`;

const DateStyled = styled.p`
  font-size: 0.9em;
  color: #666;
  text-align: center;
  margin-top: 0;
  margin-bottom: 2em;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1em;
  line-height: 1.6;
  color: #333;
`;

const articleTemplate = ({ pageContext: { data } }) => {
    console.log({ nodeArticle: data });
  
    return (
      <>
        <Title>{data?.title}</Title>
        <DateStyled>{new Date(data?.created).toLocaleDateString()}</DateStyled>
        <Content dangerouslySetInnerHTML={{ __html: data?.body?.value }} />
      </>
    );
  };
  
  export default articleTemplate;
