import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  chakra,
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  useColorModeValue,
  Textarea,
  Text,
  Spinner,
} from "@chakra-ui/react";

function Profile({ updateProfile, profile, localDid }) {
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");
  const [Job, setJob] = useState("");
  const [checker, setChecker] = useState(false);

  return (
    <Box align="center" margin="4rem auto 0" w="80%">
      <Flex py={10} justifyContent={"space-between"}>
        <Flex alignItems="flex-start" flexDirection="column">
          {" "}
          <Heading fontSize="3vw" fontFamily="Inter">
            Your Profile
          </Heading>
          <Text fontSize="1vw" fontFamily="Inter" px={2}>
            ({localDid && localDid.id})
          </Text>
        </Flex>

        <Button
          boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
          color="#000"
          fontFamily="Inter"
          onClick={() => {
            !bio && setBio(profile.bio);
            !name && setName(profile.name);
            updateProfile(bio, name, Job setChecker);
          }}
        >
          {checker && <Spinner mr={4} />}
          {checker ? "Saving.." : "Save"}
        </Button>
      </Flex>
      <chakra.form
        // method="POST"
        shadow="base"
        rounded={[null, "md"]}
        overflow={{ sm: "hidden" }}
      >
        <Stack
          px={3}
          py={5}
          bg={useColorModeValue("white", "gray.700")}
          spacing={6}
          p={{ sm: 6 }}
        >
          <FormControl>
            <FormLabel
              fontSize="md"
              fontFamily="Inter"
              fontWeight="md"
              color={useColorModeValue("gray.700", "gray.50")}
            >
              Name
            </FormLabel>
            <InputGroup size="sm">
              <Input
                fontFamily="Inter"
                type="text"
                placeholder={profile.name ? profile.name : "Ghost"}
                focusBorderColor="gray.700"
                rounded="md"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel
              fontSize="md"
              fontFamily="Inter"
              fontWeight="md"
              color={useColorModeValue("gray.700", "gray.50")}
            >
              Life Story
            </FormLabel>
            <InputGroup size="sm">
              <Textarea
                fontFamily="Inter"
                type="text"
                placeholder={profile.bio ? profile.bio : "😈"}
                focusBorderColor="gray.700"
                rounded="md"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
              />
               Job
            </FormLabel>
            <InputGroup size="sm">
              <Input
                fontFamily="Inter"
                type="text"
                placeholder={profile.Job ? profile.Job : "Ghost"}
                focusBorderColor="green.700"
                rounded="md"
                onChange={(e) => setJob(e.target.value)}
                value={job}
              />
            </InputGroup>
          </FormControl>
        </Stack>
      </chakra.form>
    </Box>
  );
}

export default Profile;
