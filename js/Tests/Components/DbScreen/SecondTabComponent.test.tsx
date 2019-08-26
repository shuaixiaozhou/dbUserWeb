import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import SecondTabComponent from '../../../App/Components/DbScreenTabs/SecondTabComponent'

test("Renders Correctly", () => {
    const tree = renderer.create(<SecondTabComponent />).toJSON();
    expect(tree).toMatchSnapshot();
});
