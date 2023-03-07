import { useEffect, useState } from "react";
import axios from "axios";
import { Text, Box, Flex } from "@chakra-ui/react";
export default function Time(props: any) {
  useEffect(() => {
    const timeFunc = async () => {
      const res = await axios.get(
        "https://timezoneapi.io/api/ip/?token=asFwdRjOWzGPFZxRymYj"
      );
      const data = await res.data;
      console.log(data);
      props.setCountry(data.data.timezone.id);
      props.setTime(data.data.datetime.time.slice(0, 5));
      props.setTimeDay(data.data.datetime.timeday_gen);
      props.setWeek(data.data.datetime.week);
      props.setDay(data.data.datetime.day);
      props.setPmAm(data.data.datetime.hour_am_pm);
      props.setCountryCity(
        ` ${data.data.timezone.capital}, ${data.data.country}`
      );
      props.setYearDay(
        data.data.datetime.week * 7 - data.data.datetime.day + 1
      );
    };
    timeFunc();
  }, []);
  return (
    <Box
      overflow="hidden"
      backgroundColor={props.pmAm == "pm" ? "black" : "bg"}
    >
      <Box
        h={{ sm: "256px", md: "440px", xl: "400px" }}
        p={{ sm: "26px", md: "64px", xl: "74px" }}
        w="100%"
        backdropFilter="blur(40.7742px)"
        backgroundColor={props.pmAm == "pm" ? "black" : "white"}
        position="absolute"
        mt={{ sm: "-256px", md: "-440px", xl: "-400px" }}
      >
        <Flex
          mt="33px"
          flexDir="column"
          display={{ sm: "flex", md: "grid" }}
          gridTemplateColumns="auto auto"
          gap="18px"
        >
          <Flex
            flexDir={{ sm: "row", md: "column" }}
            mt={{ sm: "12px", md: "0px" }}
            h="28px"
            w="100%"
            alignItems={{ sm: "center", md: "flex-start" }}
            justifyContent="space-between"
          >
            <Text
              fontSize={{ sm: "10px", mt: "13px", xl: "15px" }}
              letterSpacing={{ sm: "2px", mt: "2.6px" }}
              fontWeight="400"
              color={props.pmAm == "pm" ? "white" : "textBlack"}
            >
              CURRENT TIMEZONE
            </Text>
            <Text
              color={props.pmAm == "pm" ? "white" : "textBlack"}
              fontSize={{ sm: "20px", md: "40px", xl: "56px" }}
              lineHeight={{ sm: "24.2px", md: "48.41px", xl: "56px" }}
              fontWeight="700"
            >
              {props.countryCity}
            </Text>
          </Flex>
          <Flex
            flexDir={{ sm: "row", md: "column" }}
            alignItems={{ sm: "center", md: "flex-start" }}
            h="28px"
            w="100%"
            justifyContent="space-between"
          >
            <Text
              fontSize={{ sm: "10px", mt: "13px", xl: "15px" }}
              letterSpacing={{ sm: "2px", mt: "2.6px" }}
              fontWeight="400"
              color={props.pmAm == "pm" ? "white" : "textBlack"}
            >
              Day of the year
            </Text>
            <Text
              color={props.pmAm == "pm" ? "white" : "textBlack"}
              fontSize={{ sm: "20px", md: "40px", xl: "56px" }}
              lineHeight={{ sm: "24.2px", md: "48.41px", xl: "56px" }}
              fontWeight="700"
            >
              {props.yearDay}
            </Text>
          </Flex>
          <Flex
            flexDir={{ sm: "row", md: "column" }}
            alignItems={{ sm: "center", md: "flex-start" }}
            mt={{ sm: "", md: "77px" }}
            h="28px"
            w="100%"
            justifyContent="space-between"
          >
            <Text
              fontSize={{ sm: "10px", mt: "13px", xl: "15px" }}
              letterSpacing={{ sm: "2px", mt: "2.6px" }}
              fontWeight="400"
              color={props.pmAm == "pm" ? "white" : "textBlack"}
            >
              Day of the week
            </Text>
            <Text
              color={props.pmAm == "pm" ? "white" : "textBlack"}
              fontSize={{ sm: "20px", md: "40px", xl: "56px" }}
              lineHeight={{ sm: "24.2px", md: "48.41px", xl: "56px" }}
              fontWeight="700"
            >
              {props.day}
            </Text>
          </Flex>
          <Flex
            flexDir={{ sm: "row", md: "column" }}
            mb="18px"
            alignItems={{ sm: "center", md: "flex-start" }}
            h="28px"
            w="100%"
            mt={{ sm: "", md: "77px" }}
            justifyContent="space-between"
          >
            <Text
              fontSize={{ sm: "10px", mt: "13px", xl: "15px" }}
              letterSpacing={{ sm: "2px", mt: "2.6px" }}
              fontWeight="400"
              color={props.pmAm == "pm" ? "white" : "textBlack"}
            >
              Week number
            </Text>
            <Text
              color={props.pmAm == "pm" ? "white" : "textBlack"}
              fontSize={{ sm: "20px", md: "40px", xl: "56px" }}
              lineHeight={{ sm: "24.2px", md: "48.41px", xl: "56px" }}
              fontWeight="700"
            >
              {props.week}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
