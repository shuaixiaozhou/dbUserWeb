import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import FifthTabComponent from '../../../App/Components/DbScreenTabs/FifthTabComponent'
import {colorScheme} from "../../../App/Themes/Colors";

test("Renders Correctly", () => {
const tree = renderer.create(<FifthTabComponent locale="fa" colorScheme={colorScheme(true)} />).toJSON();
expect(tree).toMatchSnapshot();
});
