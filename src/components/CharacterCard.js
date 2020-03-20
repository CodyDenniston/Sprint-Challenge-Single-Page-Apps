import React from "react";
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import styled from "styled-components";

const MyTitle = styled.h2`
font-size: 1.7rem;
`
const MyImg = styled.img`
border: darkviolet solid 3px;
margin-bottom: 40px;
`

export default function CharacterCard(props) {
  
  return (
    <div>
      <Card>
        <CardBody>
          <MyTitle>Name: {props.name}</MyTitle>
          <CardSubtitle>Status: {props.status}</CardSubtitle>
          <CardSubtitle>Species: {props.species}</CardSubtitle>
        </CardBody>
        <MyImg width="100%" src= {props.img} alt="Character Card" />
      </Card>
    </div>
  );
}
