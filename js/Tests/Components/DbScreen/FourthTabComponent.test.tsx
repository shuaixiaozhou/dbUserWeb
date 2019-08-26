import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import FourthTabComponent from '../../../App/Components/DbScreenTabs/FourthTabComponent'

test("Renders Correctly", () => {
    const tree = renderer.create(<FourthTabComponent />).toJSON();
    expect(tree).toMatchSnapshot();
});
