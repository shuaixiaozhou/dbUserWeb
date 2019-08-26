import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import FirstTabComponent from '../../../App/Components/DbScreenTabs/FirstTabComponent'

test("Renders Correctly", () => {
    const tree = renderer.create(<FirstTabComponent />).toJSON();
    expect(tree).toMatchSnapshot();
});
