import { Box } from "@mui/system";
import Header from "../Header";
import Footer from "../Footer"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import styles from "../../../styles/Home.module.css";


const HomePage = () => {

  return (
    <Box>
            <Header/>
            <HorizontalRuleIcon className={styles.Homehorizicon}/>
            <Footer/>
    </Box>
  );
};

export default HomePage;
