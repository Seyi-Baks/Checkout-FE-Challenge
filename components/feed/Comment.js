import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChildContainer = styled.div`
  display: flex;
`;
const Container = styled.div``;

const SmallFont = styled.p`
  font-size: 10pt;
`;

const Comment = () => {
  return (
    <Container>
      <ChildContainer>
        <UserAvatar />
        <Container>
          <p>Recipeients name</p>
          <SmallFont>Reviewed on 31 December 2020 10:30pm</SmallFont>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum will uncover many web sites
            still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </Container>
      </ChildContainer>
    </Container>
  );
};

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
export default Comment;
