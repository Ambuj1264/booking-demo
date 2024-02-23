import { Box, Container } from "@mui/material";

import { styled } from "@mui/material/styles";
import StatusImage from "../utility/assets/images/status/404.svg";
const MainContent = styled(Box)(
  ({ theme }) => `
      height: 100%;
      display: flex;
      flex: 1;
      overflow: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `
);

function Status404() {
  return (
    <>
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center">
            <img alt="404" height={180} src={StatusImage} />
          </Box>
        </Container>
      </MainContent>
    </>
  );
}

export default Status404;
