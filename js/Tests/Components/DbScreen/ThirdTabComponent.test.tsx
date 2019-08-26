import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import ThirdTabComponent from '../../../App/Components/DbScreenTabs/ThirdTabComponent'

test("Renders Correctly", () => {
    const tree = renderer.create(<ThirdTabComponent />).toJSON();
    expect(tree).toMatchSnapshot();
});
