import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  background-color: #010d11;
`;

export const Left = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 45px;
`;

export const Desc = styled.p`
  margin: 20px 0px;
  color:#ffffff;
  font-size: 15px;
`;

export const SocialContainer = styled.div`
  display: flex;
  margin-left: 35px;
`;

export const SocialIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  margin-top: 10px;
  transform: scale(2);
`;

export const Center = styled.div`
  flex: 0.8;
  padding: 20px;
  margin-right: 85px;
  margin-left: 100px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 100%;
  margin-bottom: 2px;
  margin-top:2px;
  color:#ffffff;
  font-size: 15px;
`;

export const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 28px;
  margin-left: 20px;
  color:#ffffff;
`;

export const Right = styled.div`
  flex: 0.8;
  padding: 10px;
`;


export const Containernav = styled.div`
  flex: 1;
  margin: 0px;
  height: 20vh;
  width: 100vw;
  position: relative;
`;

export const Infonav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
`;

export const Titlenav = styled.h1`
    color:black;
    margin-bottom: -20px;
    margin-top: 0px;
    margin-left: 110px;
    color: #ffffff;
    font-size: 67px;
`;

export const Navcontainer = styled.div`
display: flex;
padding: 0px;
width: 100%;
height:16vh;
`;
