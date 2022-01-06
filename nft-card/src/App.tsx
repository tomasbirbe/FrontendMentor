import React, { useState } from 'react';
import { Stack, Text, Container, Img, Icon } from './components/style';
import styled from 'styled-components';

const Hr = styled.hr`
  border-block-start: 1px solid gray;
  opacity: 0.1;
  margin-block-end: 5px;
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  border: 1px solid white;
  background-size: cover;
  object-fit: cover;
`;

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Container bg="red" width={{ md: '200px', lg: '500px' }}>
      <Stack
        gap={'12px'}
        bg={'darker-blue'}
        padding={'20px'}
        borderRadius={'14px'}
      >
        <Img
          width="280px"
          src="../public/image-equilibrium.jpg"
          alt="A photo of a cube"
        />
        <Text fontSize="20px" fontWeight="bold" color="white">
          Equilibrium #3429
        </Text>
        <Text color="soft-blue" fontWeight="300" width="250px" fontSize="16px">
          Our equilibrium collection promotes balance and calm
        </Text>
        <Stack direction="column"></Stack>
        <Stack
          direction="row"
          justify="space-between"
          width="100%"
          align="center"
        >
          <Stack direction="row" gap="5px" align="center">
            <Icon boxSize="20px" src="../public/icon-ethereum.svg" />
            <Text color="cyan">0.041 ETH</Text>
          </Stack>
          <Stack direction="row" gap="7px" align="center">
            <Icon boxSize="17px" src="../public/icon-clock.svg" />
            <Text color="soft-blue">3 days left</Text>
          </Stack>
        </Stack>
        <Hr />
        <Stack direction="row" gap="15px" width="100%" align="center">
          <ProfilePic
            width="30px"
            height="30px"
            src="../public/image-avatar.png"
          />
          <Text color="soft-blue" fontSize="13px">
            Creation of <Text color="white">Jules Wyvern</Text>
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};

export default App;
