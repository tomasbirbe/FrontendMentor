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
          src="../dist/image-equilibrium.jpg"
          alt="A photo of a cube"
          borderRadius={'15px'}
        />
        <Overlay display="flex" justify="center" align="center">
          <Icon src="../public/icon-view.svg" color="white" opacity={'1'} />
        </Overlay>
      </Box>

      <Box
        hover={{ color: 'cyan' }}
        color="soft-blue"
        cursor="pointer"
        transition="all 0.2s ease"
      >
        <Text fontSize="20px" fontWeight="bold">
          Equilibrium #3429
        </Text>
      </Box>
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
          <Icon
            boxSize="20px"
            src="../public/icon-ethereum.svg"
            color={'cyan'}
          />
          <Text color="cyan">0.041 ETH</Text>
        </Stack>
        <Stack direction="row" gap="7px" align="center">
          <Icon
            boxSize="17px"
            src="../public/icon-clock.svg"
            color={'soft-blue'}
          />
          <Text color="soft-blue">3 days left</Text>
        </Stack>
      </Stack>
      <Hr />
      <Stack direction="row" gap="15px" width="100%" align="center">
        <Box border={'1px solid white'} borderRadius={'50%'}>
          <Img
            width="30px"
            src="../public/image-avatar.png"
            color={'soft-blue'}
          />
        </Box>
        <Text color="soft-blue" fontSize="13px">
          Creation of{' '}
          <Box
            cursor={'pointer'}
            hover={{ color: 'cyan' }}
            transition="all 0.2s ease"
            color={'white'}
          >
            <Text>Jules Wyvern</Text>
          </Box>
        </Text>
      </Stack>
    </Stack>
  </Container>
);

export default App;
