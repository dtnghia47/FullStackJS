// import { shallow } from "enzyme";
import renderer from 'react-test-renderer';

import PostItem from "../src/components/PostItem";

describe('My first test suite', () => {
  it('adds two numbers', () => {
    expect(2 + 2).toBe(4)
  })

  it('substracts two numbers', () => {
    expect(2 - 2).toBe(0)
  })
})


// snapshot test
it('renders correctly', () => {
  const data = { id: 1, title: 'title', desctiption: 'desc' }
  const tree = renderer
    .create(<PostItem data={data} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});