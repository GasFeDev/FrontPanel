import "../styles/globals.css";
 import { useState, useEffect } from 'react';
 import { useRouter } from 'next/router';
 
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import "@rainbow-me/rainbowkit/styles.css";
 import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
 import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
 import { publicProvider } from "wagmi/providers/public";
 
 import { userService } from '../services';
 import { Nav } from "../src/components/Nav/Nav";
 import { CssBaseline, ThemeProvider } from "@mui/material";
 import theme3S from "../styles/theme.css";
 
 const { chains, provider } = configureChains(
   [
     chain.polygon,
     chain.polygonMumbai,    
     chain.goerli,
   ],
   [publicProvider()]
 );
 
 const { connectors } = getDefaultWallets({
   appName: "Reactor Deployer",
   chains,  
 });
 
 const wagmiClient = createClient({
   autoConnect: true,
   connectors,
   provider,
 });
 
 

 function MyApp({ Component, pageProps }) {
   const router = useRouter();
   const [authorized, setAuthorized] = useState(false);
 
   useEffect(() => {
     authCheck(router.asPath);
 
     const hideContent = () => setAuthorized(false);
     router.events.on('routeChangeStart', hideContent);
 
     router.events.on('routeChangeComplete', authCheck)
 
     return () => {
         router.events.off('routeChangeStart', hideContent);
         router.events.off('routeChangeComplete', authCheck);
     }
   }, []);
 
   function authCheck(url) {
     const publicPaths = ['/'];
     const path = url.split('?')[0];
     if (!userService.userValue && !publicPaths.includes(path)) {
         setAuthorized(false);
         router.push({
             pathname: '/',
             query: { returnUrl: router.asPath }
         });
     } else {
         setAuthorized(true);
     }
   }
 
   return (
    <ThemeProvider  theme={theme3S}>
      <CssBaseline /> 
       <WagmiConfig client={wagmiClient}>
         <RainbowKitProvider chains={chains} coolMode>
           
           { authorized && <> <Nav/> <Component {...pageProps} /> </>  }
           <ToastContainer />
         </RainbowKitProvider>
       </WagmiConfig>
   </ThemeProvider >
   );
 }
 
 export default MyApp;