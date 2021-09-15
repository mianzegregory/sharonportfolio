import styled from "styled-components";
import instagram from "../../assets/ig.svg";
import twitter from "../../assets/tw.svg";
import linkedin from "../../assets/in.svg";

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <p id="greeting">It all start with saying hello</p>
        <p>sharonjaoko@gmail.com</p>
      </div>
      <div>
        <img src={instagram} alt="Instagram" />
        <img src={twitter} alt="Twitter" />
        <img src={linkedin} alt="LinkedIn" />
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  padding: 1rem 9%;
  img {
    width: 3rem;
    margin: 0.5rem;
  }
  p {
    font-weight: 400;
    color: #707070;
    font-family: "Fira Sans", sans-serif;
    font-size: 0.7rem;
    margin: 0.3rem;
  }
  #greeting {
    color: #a5a5a5;
  }
  @media(max-width: 500px){
    flex-direction: column;
    margin-bottom: 3rem;
  }
`;
