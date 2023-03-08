import { Box, Image, Button, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import backgroundAM from "../../assets/mobile/bg-image-daytime.jpg";
import backgroundPM from "../../assets/mobile/bg-image-nighttime.jpg";
import axios from "axios";
import sun from "../../assets/desktop/icon-sun.svg";
import moon from "../../assets/desktop/icon-moon.svg";
import refresh from "../../assets/desktop/icon-refresh.svg";
import backgroundPMtab from "../../assets/tablet/bg-image-nighttime.jpg";
import backgroundAMtab from "../../assets/tablet/bg-image-daytime.jpg";
import backgroundPMdesk from "../../assets/desktop/bg-image-nighttime.jpg";
import backgroundAMdesk from "../../assets/desktop/bg-image-daytime.jpg";
import arrowDown from "../../assets/desktop/icon-arrow-down.svg";
import arrowUp from "../../assets/desktop/icon-arrow-up.svg";
export default function FirstBox(props: any) {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const isDesktop = window.matchMedia("(min-width: 1440px)").matches;
  let count = 0;
  const active = () => {
    props.active == true ? props.setActive(false) : props.setActive(true);
  };
  const randomTxt = async () => {
    const res = await axios.get("https://api.quotable.io/random");
    const data = await res.data;
    props.setAuthor(data.author);
    props.setTxt(data.content);
  };
  useEffect(() => {
    randomTxt();
  }, []);
  return (
    <Box
      overflowX="hidden"
      overflow={{ sm: "", md: "", xl: "hidden" }}
      position="relative"
      zIndex="2999"
      transform={{
        sm: props.active ? "translateY(-256px)" : "",
        md: props.active ? "translateY(-440px)" : "",
        xl: props.active ? "translateY(-400px)" : "",
      }}
      transition="0.5s"
      backgroundColor="#000000"
      w="100vw"
      h="100vh"
      minHeight="100%"
    >
      <Flex
        p={{ sm: "26px", md: "64px", xl: "56px" }}
        paddingX={{ sm: "", md: "", xl: "165px" }}
        flexDir="row"
        w={{ sm: "100%", xl: "1000px" }}
        justifyContent="space-between"
      >
        <Flex
          gap={{ sm: "8px", md: "13px" }}
          maxH={{ sm: "97px", md: "125px" }}
          flexDir="column"
        >
          <Text
            fontSize={{ sm: "12px", md: "18px" }}
            lineHeight={{ sm: "22px", md: "28px" }}
            color="white"
            maxW="90%"
            position="relative"
            zIndex="1001"
          >
            {props.txt}
          </Text>
          <Text
            fontWeight="700"
            fontSize={{ sm: "12px", md: "18px" }}
            lineHeight={{ sm: "22px", md: "28px" }}
            color="white"
            zIndex="1000"
            position="relative"
          >
            {props.author}
          </Text>
        </Flex>
        <Button zIndex="1002" onClick={randomTxt}>
          <Image minW="17px" src={refresh} alt="refresh" />
        </Button>
      </Flex>
      <Flex
        mt={{ sm: "201px", md: "324px", xl: "233px" }}
        flexDirection="column"
        paddingX={{ sm: "", md: "", xl: "165px" }}
        color="white"
        p={{ sm: "26px", md: "64px" }}
      >
        <Flex gap="16px">
          <Image
            zIndex="1000"
            position="relative"
            fill="white"
            src={props.pmAm == "pm" ? moon : sun}
            alt="sun"
          />
          <Text
            fontSize={{ sm: "15px", md: "18px" }}
            lineHeight="25px"
            letterSpacing="3px"
            textTransform="uppercase"
            zIndex="1000"
            position="relative"
          >
            GOOD {props.timeDay}
          </Text>
        </Flex>
        <Flex>
          <Text
            zIndex="1000"
            position="relative"
            fontWeight="700"
            fontSize={{ sm: "100px", md: "175px", xl: "200px" }}
            lineHeight={{ sm: "100px", md: "175px", xl: "200px" }}
            letterSpacing={{ sm: "-2.5px", md: "-4.8px", xl: "-5px" }}
          >
            {props.time}
          </Text>
          <Text
            ml="12px"
            fontWeight="300"
            mt={{ sm: "65px", md: "115px", xl: "120px" }}
            zIndex="1000"
            position="relative"
            fontSize={{ sm: "15px", md: "32px" }}
          >
            BST
          </Text>
        </Flex>
        <Text
          fontWeight="700"
          fontSize={{ sm: "15px", md: "18px" }}
          lineHeight="28px"
          mt="16px"
          letterSpacing={{ sm: "3px", md: "3.8px" }}
          textTransform="uppercase"
          zIndex="1000"
          position="relative"
        >
          IN {props.countryCity}
        </Text>
        <Button
          w={{ sm: "115px", md: "146px" }}
          h={{ sm: "39px", md: "56px" }}
          mt={{ sm: "48px", md: "80px" }}
          transform={{ sm: "", md: "", xl: "translate(70vw, -170px)" }}
          borderRadius="28px"
          backgroundColor="white"
          zIndex="1000"
          display="flex"
          justifyContent="space-between"
          position="relative"
        >
          <Text
            color="gray"
            fontWeight="700"
            fontSize={{ sm: "12px", md: "16px" }}
            letterSpacing="3.75px"
          >
            {props.active ? "LESS" : "MORE"}
          </Text>{" "}
          <Box
            _hover={{ opacity: "60%", transition: "0.4s" }}
            onClick={active}
            h="32px"
            borderRadius="50%"
            backgroundColor="black"
            display="flex"
            alignItems="center"
            ml={{ sm: "62px", md: "78px" }}
            position="absolute"
            justifyContent="center"
            w="32px"
          >
            <Image
              h="6px"
              w="12.5px"
              src={arrowDown}
              transform={props.active ? "rotate(180deg)" : ""}
              transition="0.4s"
            />
          </Box>{" "}
        </Button>
      </Flex>
      {isMobile ? (
        <Image
          opacity="70%"
          src={props.pmAm == "pm" ? backgroundPM : backgroundAM}
          position="absolute"
          top="0"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      ) : (
        <Image
          opacity="70%"
          src={props.pmAm == "pm" ? backgroundPMtab : backgroundAMtab}
          position="absolute"
          top="0"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      )}
      {isDesktop ? (
        <Image
          opacity="70%"
          src={props.pmAm == "pm" ? backgroundPMdesk : backgroundAMdesk}
          position="absolute"
          top="0"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      ) : (
        ""
      )}
    </Box>
  );
}
