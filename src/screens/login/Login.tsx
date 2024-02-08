import { SafeAreaView } from "react-native";
import {
  Container,
  ContentHeader,
  ContentBody,
  ContentFooter,
  Title,
  Description,
  ViewButton,
} from "./AuthStyled";
import { ButtonGoogle } from "../../components/ButtonSocial/ButtonGoogle";

const Login: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Seja Bem Vindo(a) {"\n"} a Murasaki</Title>
          <Description>Entrar com redes sociais</Description>
          <ViewButton>
            <ButtonGoogle title="Google" />
          </ViewButton>
        </ContentHeader>
        <ContentBody></ContentBody>
        <ContentFooter></ContentFooter>
      </Container>
    </SafeAreaView>
  );
};

export { Login };
