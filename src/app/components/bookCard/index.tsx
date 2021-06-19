import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../button";
import { Marginer } from "../marginer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
  flex
  justify-center
  items-center
  rounded-md
  bg-white
  pt-1
  pb-1
  pr-2
  pl-2
  md:pt-2
  md:pb-2
  md:pl-9
  md:pr-9
  `};
`;

const ItemContainer = styled.div`
  ${tw`
    flex
    `};
`;

const Icon = styled.div`
  ${tw`
    text-purple-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3

    `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `};
`;

const Name = styled.div`
  ${tw`
    text-black
    text-xs
    md:text-sm
    cursor-pointer
    select-none
    `};
`;

const LineSeparator = styled.div`
  width: 2px;
  height: 45%;

  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
    `};
`;

const DataCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 40.5em;
  left: 9em;
`;

export function BookCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);

  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  console.log("Value: ", startDate);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DataCalendar value={startDate} onChange={setStartDate as any} />
        )}
      </ItemContainer>

      <LineSeparator />

      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DataCalendar value={returnDate} onChange={setReturnDate as any} />
        )}
      </ItemContainer>

      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book your e-Ride" />
    </CardContainer>
  );
}
