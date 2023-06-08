import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import Button from '../src/components/Button';

describe('<Button/>', () => {
    it('should render correctly', () => {
        const components = render.create(<Button />)
        const tree = components.toJSON();
        // expect(tree).toMatchSnapshot()
    })
})