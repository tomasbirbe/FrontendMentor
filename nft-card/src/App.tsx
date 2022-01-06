import React from 'react';
import { Overlay } from './components/style';
import { Stack, Text, Container, Img, Icon, Hr } from './components/style/base';
import Box from './components/style/base/Box';

const App = () => (
  <Container bg="darkest-blue">
    <Stack
      gap={'12px'}
      bg={'darker-blue'}
      padding={'20px'}
      borderRadius={'14px'}
    >
      <Box position="relative">
        <Img
          width="280px"
          src="../public/image-equilibrium.jpg"
          alt="A photo of a cube"
          borderRadius={'15px'}
        />
        <Overlay display="flex" justify="center" align="center">
          <Text>Hola!</Text>
        </Overlay>
      </Box>

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
        <Box border={'1px solid white'} borderRadius={'50%'}>
          <Icon boxSize={'30px'} src="../public/image-avatar.png" />
        </Box>
        <Text color="soft-blue" fontSize="13px">
          Creation of <Text color="white">Jules Wyvern</Text>
        </Text>
      </Stack>
    </Stack>
  </Container>
);

export default App;
