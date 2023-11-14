import { gql } from "@apollo/client";

export const PORTFOLIOPAGE = gql`
  query portfolio {
    portfolioPage {
      data {
        attributes {
          banner {
            title
            alt
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          BlockSlider {
            id
            SliderImage {
              alt
              id
              image {
                data {
                  attributes {
                    url
                    name
                  }
                }
              }
            }
            BlockItem {
              title
              description
              image {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
