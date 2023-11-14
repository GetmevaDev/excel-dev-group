import { gql } from "@apollo/client";

export const HOMEPAGE = gql`
  query home {
    homePage {
      data {
        attributes {
          banner {
            title
            alt
            description
            text_button
            text_button_phone
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          PressNews {
            title
            description
            Slider {
              title
              description
              id
              alt
              button
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }

          Portfolio {
            title
            Slider {
              title
              description
              id
              alt
              button
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }

          SliderTeam {
            title
            description
            slider {
              id
              alt
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }

          block {
            title
            description
            alt
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
