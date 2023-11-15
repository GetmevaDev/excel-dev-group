import { gql } from "@apollo/client";

export const NEWSPAGE = gql`
  query news {
    newsPage {
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
          cards {
            title
            description
            Card {
              id
              title
              description
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              alt
            }
          }
        }
      }
    }
  }
`;
