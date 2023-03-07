import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Box } from "@chakra-ui/react";
import Time from "./components/Time/Time";
import FirstBox from "./components/FirstBox/FirstBox";
function App() {
  const [author, setAuthor] = useState("");
  const [txt, setTxt] = useState("");
  const [country, setCountry] = useState("");
  const [time, setTime] = useState("");
  const [timeDay, setTimeDay] = useState("");
  const [week, setWeek] = useState("");
  const [pmAm, setPmAm] = useState("");
  const [yearDay, setYearDay] = useState(Number);
  const [day, setDay] = useState("");
  const [countryCity, setCountryCity] = useState("");
  const [active, setActive] = useState(false);
  return (
    <Box backgroundColor="bg">
      <FirstBox
        setAuthor={setAuthor}
        setActive={setActive}
        active={active}
        txt={txt}
        setTxt={setTxt}
        pmAm={pmAm}
        author={author}
        setPmAm={setPmAm}
        country={country}
        countryCity={countryCity}
        setCountryCity={setCountryCity}
        yearDay={yearDay}
        day={day}
        setDay={setDay}
        setYearDay={setYearDay}
        setCountry={setCountry}
        time={time}
        setTime={setTime}
        timeDay={timeDay}
        setTimeDay={setTimeDay}
        week={week}
        setWeek={setWeek}
      />
      <Time
        country={country}
        countryCity={countryCity}
        setCountryCity={setCountryCity}
        yearDay={yearDay}
        day={day}
        setPmAm={setPmAm}
        pmAm={pmAm}
        setDay={setDay}
        setYearDay={setYearDay}
        setCountry={setCountry}
        time={time}
        active={active}
        setTime={setTime}
        timeDay={timeDay}
        setTimeDay={setTimeDay}
        week={week}
        setWeek={setWeek}
      />
    </Box>
  );
}

export default App;
