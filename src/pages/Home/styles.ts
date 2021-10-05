import styled from "styled-components";

import sunIcon from "../../assets/sun.png";
import moonIcon from "../../assets/moon.png";
import searchIcon from "../../assets/search.png";

export const Container = styled.div`
  display: flex;
  flex: 1;

  height: 100vh;

  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.background};
`;

export const Content = styled.div`
  width: 941px;
  height: 756px;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: "Fira Code";
  font-size: 22px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.1em;

  color: ${(props) => props.theme.header.title};
`;

export const Switch = styled.button`
  display: flex;

  align-items: center;

  background: transparent;
  border: none;

  cursor: pointer;

  padding: 5px;

  :hover {
    border-radius: 5px;
    background: ${(props) => props.theme.search.background};
  }
`;

export const SwitchText = styled.p`
  font-family: Fira Code;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.1em;

  margin-right: 10px;

  color: ${(props) => props.theme.header.switch};
`;

export const SwitchSunIcon = styled.img.attrs({
  src: sunIcon,
})``;

export const SwitchMoonIcon = styled.img.attrs({
  src: moonIcon,
})``;

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 70px;

  margin-top: 35px;

  border-radius: 10px;

  background: ${(props) => props.theme.search.background};
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  flex: 1;

  flex-direction: row;

  align-items: center;

  margin-left: 10px;
`;

export const SearchInputIcon = styled.img.attrs({
  src: searchIcon,
})`
  width: 30px;
  height: 30px;
`;

export const SearchInput = styled.input.attrs({
  placeholder: "Search Github username...",
})`
  width: 90%;
  background: transparent;
  border: none;

  margin-left: 10px;

  font-family: Fira Code;
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 0.1em;

  color: ${(props) => props.theme.search.text};

  ::placeholder {
    font-family: Fira Code;
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0.1em;

    color: ${(props) => props.theme.search.text};
  }
`;

export const SearchButton = styled.button.attrs({})`
  display: flex;

  width: 120px;
  height: 60px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: none;

  margin-right: 5px;

  cursor: pointer;

  background: ${(props) => props.theme.search.button};

  :hover {
    filter: brightness(0.8);
  }
`;

export const SearchButtonText = styled.p.attrs({})`
  font-family: Fira Code;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.1em;

  color: ${(props) => props.theme.search.buttonText};
`;

export const InfosContainer = styled.div`
  display: flex;
  flex: 1;

  height: 603px;

  margin-top: 20px;

  border-radius: 10px;

  background: ${(props) => props.theme.infos.background};
`;

export const UserAvatar = styled.img`
  width: 150px;
  height: 150px;

  border-radius: 150px;

  margin: 50px 0 0 50px;
`;

export const UserInfos = styled.div`
  display: flex;

  flex-direction: column;

  width: 643px;
  height: auto;

  margin: 50px 0 0 50px;
`;

export const UserInfosHeader = styled.div`
  display: flex;
  width: 100%;
  height: 27px;

  flex-direction: space-between;

  justify-content: space-between;
  align-items: center;
`;

export const UserName = styled.p`
  font-family: Fira Code;
  font-size: 22px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0.1em;

  color: ${(props) => props.theme.infos.user.user};
`;

export const UserJoined = styled.p`
  font-family: Fira Code;
  font-size: 18px;
  font-weight: 450;
  line-height: 22px;
  letter-spacing: 0.1em;

  color: ${(props) => props.theme.infos.user.date};
`;

export const UserCompany = styled.p`
  font-family: Fira Code;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;

  color: ${(props) => props.theme.infos.user.company};

  margin-top: 10px;
`;

export const UserBio = styled.p`
  height: 70px;

  font-family: Fira Code;
  font-size: 18px;
  font-weight: 450;
  line-height: 22px;
  letter-spacing: 0.1em;
  overflow-y: scroll;

  color: ${(props) => props.theme.infos.user.bio};

  margin-top: 20px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.infos.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.background};
    border-radius: 5px;
  }
`;

export const Analytics = styled.div`
  display: flex;

  width: 100%;
  height: 120px;

  justify-content: space-around;

  margin-top: 10px;

  border-radius: 10px;

  background: ${(props) => props.theme.background};
`;

export const AnalyticsWrapper = styled.div`
  display: flex;

  flex-direction: column;

  margin-top: 20px;
`;

export const AnalyticsInfo = styled.p`
  font-family: Fira Code;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.1em;

  color: ${(props) => props.theme.analytics.info};
`;

export const AnalyticsValue = styled.p`
  font-family: Fira Code;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0.1em;

  color: ${(props) => props.theme.analytics.value};

  margin-top: 10px;
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 40px;
`;

export const DetailWrapper = styled.div`
  display: flex;

  margin-bottom: 20px;
`;

export const DetailIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const DetailValue = styled.p<{ disabled?: boolean }>`
  font-family: Fira Code;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  color: ${(props) =>
    props.disabled
      ? props.theme.details.text_disabled
      : props.theme.details.text};

  margin-left: 10px;
`;

export const DetailLinkValue = styled.a<{ disabled?: boolean }>`
  font-family: Fira Code;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  color: ${(props) =>
    props.disabled
      ? props.theme.details.text_disabled
      : props.theme.details.text};

  margin-left: 10px;
`;
