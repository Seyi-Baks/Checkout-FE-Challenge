import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import moment from "moment";
import {
  CommentContainer,
  ChildContainer,
  SmallFont,
} from "../../styles/Styles";

const CommentsSection = (props) => {
  const { data } = props;
  return (
    <>
      {data.length > 0 ? (
        data.map((data) => (
          <CommentContainer key={data.id}>
            <ChildContainer>
              <UserAvatar />
              <CommentContainer>
                <p>{data.customerName}</p>
                <SmallFont>
                  Reviewed on{" "}
                  {moment(data.dateCreated).format(
                    "dddd, MMMM Do YYYY, h:mm:ss a"
                  )}
                </SmallFont>
                <SmallFont>Rating: {data.customerRating} out of 5</SmallFont>
                <p>{data.customerComment}</p>
              </CommentContainer>
            </ChildContainer>
          </CommentContainer>
        ))
      ) : (
        <p>This product doesnt have any customer reviews</p>
      )}
    </>
  );
};

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
export default CommentsSection;
