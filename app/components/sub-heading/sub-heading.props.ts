import { StyleProp, ViewStyle } from "react-native";

export interface SubHeadingProps {
  /**
   * Text for heading
   */
  text: string;
  /**
   * Container style overrides
   */
  style?: StyleProp<ViewStyle>;
}