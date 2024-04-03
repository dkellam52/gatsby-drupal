import React from 'react'
import styled from 'styled-components';

const Time = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const PrepTime = ({children})  => (
    <Time>
        Prep Time: 
        {children}
    </Time>
)

export default PrepTime