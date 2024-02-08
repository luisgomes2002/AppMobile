import { Button, IconeGoogle, Title } from "./SocialStyled";
import { RectButtonProps } from "react-native-gesture-handler";
import PngGoogle from "../../assets/google.png";

interface Props extends RectButtonProps {
  title: string;
}

const ButtonGoogle: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <Button {...rest}>
      <IconeGoogle source={PngGoogle} resizeMode="contain" />
      <Title>{title}</Title>
    </Button>
  );
};

export { ButtonGoogle };
