import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import { format } from "date-fns";

import * as S from "./styles";

import { api } from "../../api";

import location from "../../assets/location.png";
import website from "../../assets/website.png";
import twitter from "../../assets/twitter.png";
import company from "../../assets/company.png";

import { Response, User } from "../../types/devfinder";

const Home = () => {
  const { theme, themeLoaded, toggleTheme } = useTheme();
  const [switchIsActive, setSwitchIsActive] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(theme);

  const [username, setUsername] = useState("Auguxto");
  const [user, setUser] = useState<User>();
  const [date, setDate] = useState("");

  function handleToggleTheme() {
    setSwitchIsActive(!switchIsActive);
    toggleTheme();
  }

  async function getUser() {
    if (!username || username.length === 0) return;
    const query = `query user($user: String!) {
      user(login: $user) {
        name
        login
        avatarUrl
        createdAt
        bio
        repositories {
          totalCount
        }
        followers {
          totalCount
        }
        following {
          totalCount
        }
        location
        twitterUsername
        websiteUrl
        company
      }
    }`;

    const response: Response = await api.post("", {
      query: query,
      variables: {
        user: username,
      },
    });

    setUser(response.data.data.user);
    const formattedDate = format(
      new Date(response.data.data.user.createdAt),
      `dd/MM/yyyy`
    );
    setDate(formattedDate);
  }

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <S.Container>
            <S.Content>
              <S.Header>
                <S.Title>Devfinder</S.Title>
                <S.Switch onClick={() => handleToggleTheme()}>
                  <S.SwitchText>{theme.name}</S.SwitchText>
                  {theme.name === "Dark" ? (
                    <S.SwitchSunIcon alt="sun" />
                  ) : (
                    <S.SwitchMoonIcon alt="moon" />
                  )}
                </S.Switch>
              </S.Header>
              <S.SearchContainer>
                <S.SearchInputWrapper>
                  <S.SearchInputIcon />
                  <S.SearchInput
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </S.SearchInputWrapper>
                <S.SearchButton onClick={() => getUser()}>
                  <S.SearchButtonText>Search</S.SearchButtonText>
                </S.SearchButton>
              </S.SearchContainer>
              <S.InfosContainer>
                <S.UserAvatar src={user?.avatarUrl} alt="avatar" />
                <S.UserInfos>
                  <S.UserInfosHeader>
                    <S.UserName>{user?.name}</S.UserName>
                    <S.UserJoined>{date}</S.UserJoined>
                  </S.UserInfosHeader>
                  <S.UserCompany>{user?.login}</S.UserCompany>
                  <S.UserBio>{user?.bio}</S.UserBio>
                  <S.Analytics>
                    <S.AnalyticsWrapper>
                      <S.AnalyticsInfo>Repos</S.AnalyticsInfo>
                      <S.AnalyticsValue>
                        {user?.repositories.totalCount}
                      </S.AnalyticsValue>
                    </S.AnalyticsWrapper>
                    <S.AnalyticsWrapper>
                      <S.AnalyticsInfo>Followers</S.AnalyticsInfo>
                      <S.AnalyticsValue>
                        {user?.followers.totalCount}
                      </S.AnalyticsValue>
                    </S.AnalyticsWrapper>
                    <S.AnalyticsWrapper>
                      <S.AnalyticsInfo>Following</S.AnalyticsInfo>
                      <S.AnalyticsValue>
                        {user?.following.totalCount}
                      </S.AnalyticsValue>
                    </S.AnalyticsWrapper>
                  </S.Analytics>
                  <S.Details>
                    <S.DetailWrapper>
                      <S.DetailIcon src={location} alt="location" />
                      <S.DetailValue>{user?.location}</S.DetailValue>
                    </S.DetailWrapper>
                    <S.DetailWrapper>
                      <S.DetailIcon src={twitter} alt="location" />
                      <S.DetailValue disabled>
                        {user?.twitterUsername}
                      </S.DetailValue>
                    </S.DetailWrapper>
                    <S.DetailWrapper>
                      <S.DetailIcon src={website} alt="location" />
                      <S.DetailLinkValue href={user?.websiteUrl}>
                        Website
                      </S.DetailLinkValue>
                    </S.DetailWrapper>
                    <S.DetailWrapper>
                      <S.DetailIcon src={company} alt="location" />
                      <S.DetailValue>{user?.company}</S.DetailValue>
                    </S.DetailWrapper>
                  </S.Details>
                </S.UserInfos>
              </S.InfosContainer>
            </S.Content>
          </S.Container>
        </ThemeProvider>
      )}
    </>
  );
};

export default Home;
