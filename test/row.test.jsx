import { render } from "@testing-library/react";
import React from "react";
import Row from "./../src/components/Row";
import { describe, test } from "vitest";
import Column from './../src/components/Column';
import Form from './../src/components/Form';

describe("<Row />", () => {
  test("Should render correctly", () => {
    const component = render(<Row>
      <Column className="col-md-6 offset-md-3">
        <Form />
      </Column>
    </Row>);
    expect(component).toMatchSnapshot("./snapshot/row.output.html");
  });
});
