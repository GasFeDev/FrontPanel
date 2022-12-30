import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import InvertColorsSharpIcon from '@mui/icons-material/InvertColorsSharp';
import logo from "../../../assets/3s.png";
import Image from 'next/image';
import styles from "../../../styles/Home.module.css";
import { Center, Container, Desc, Left, List, ListItem, Right, SocialContainer, SocialIcon, Title } from '../../../styles/styledComponents';

const Footer = () => {
  return (
    <Container>
      <Left>
        <Desc>
        Más de 10 años de estudios y resultados verificados nos respaldan, 
        como la mejor alternativa para lograr mejoras en parámetros de calidad de agua, 
        mejorar la oxigenación y recuperar la integridad ecológica de los cuerpos de agua 
        afectados por presiones antrópicas leves, moderadas o severas.
        </Desc>
        <SocialContainer>
          <SocialIcon className={styles.Listisocicon}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FacebookSharpIcon />
          </a>
          </SocialIcon>
          <SocialIcon className={styles.Listisocicon}>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
          </SocialIcon>
          <SocialIcon className={styles.Listisocicon}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          </SocialIcon>
          <SocialIcon className={styles.Listisocicon}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <List>
        <Image src={logo} alt="Logo" width="350px" height="250px"/>
        </List>
      </Center>
      <Right>
      <Title>Tecnologías</Title>
      <List>
          <ListItem>
          <InvertColorsSharpIcon className={styles.Listitemicon}/>
            Phycore
          </ListItem>
          <ListItem>
          <InvertColorsSharpIcon className={styles.Listitemicon}/>
            CMPM Phycore
          </ListItem>
          <ListItem>
          <InvertColorsSharpIcon className={styles.Listitemicon}/>
            BPP BioPowerPlant
          </ListItem>
          <ListItem>
          <InvertColorsSharpIcon className={styles.Listitemicon}/>
            BFPlus II
          </ListItem>
          <ListItem>
          <InvertColorsSharpIcon className={styles.Listitemicon}/>
            RvCM
          </ListItem>
        </List>
      </Right>
    </Container>
  );
};

export default Footer;