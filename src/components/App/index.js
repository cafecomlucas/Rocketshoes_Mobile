import styled from 'styled-components/native';
import bgImage from '../../assets/app-background.png';

export const Container = styled.ImageBackground.attrs({
  source: bgImage,
  resizeMode: 'cover',
})`
  flex: 1;
  background-color: #191920;
`;

export const Header = styled.Text`
  color: #fff;
`;
