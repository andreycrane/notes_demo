// @flow

import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { lorem } from 'faker';

import type { Node } from 'react';

export default function Note(): Node {
  return (
    <Card color="success">
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>
          Card title
        </CardTitle>
        <CardSubtitle>
          Card subtitle
        </CardSubtitle>
        <CardText>
          {lorem.paragraph()}
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
}
