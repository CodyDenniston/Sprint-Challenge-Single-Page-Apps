import React from "react";
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Name: {props.name}</CardTitle>
          <CardSubtitle>Status: {props.status}</CardSubtitle>
          <CardSubtitle>Species: {props.species}</CardSubtitle>
        </CardBody>
        <img width="100%" src= {props.img} alt="Character Card" />
      </Card>
    </div>
  );
}
