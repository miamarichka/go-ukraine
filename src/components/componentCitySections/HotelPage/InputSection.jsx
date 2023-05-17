import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { MdDateRange } from 'react-icons/md';
import './reactDates.css';

const DateRangePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const DateRangePickerInput = styled.div`
  flex: 1;
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
`;

const DateRangePickerIcon = styled(MdDateRange)`
  font-size: 24px;
  color: #333;
`;

const DateRangePickerSeparator = styled.div`
  height: 100%;
  width: 2px;
  background-color: #e5e7eb;
`;

export const InputSection = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedFocusedInput, setSelectedFocusedInput] = useState(null);

  const handleDatesChange = ({ startDate, endDate }) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };

  return (
    <DateRangePickerWrapper>
      <DateRangePickerInput>
        <div>
          {selectedStartDate
            ? selectedStartDate.format('MMM D, YYYY')
            : 'Check-in'}
        </div>
        <DateRangePickerIcon />
      </DateRangePickerInput>
      <DateRangePickerSeparator />
      <DateRangePickerInput>
        <div>
          {selectedEndDate
            ? selectedEndDate.format('MMM D, YYYY')
            : 'Check-out'}
        </div>
        <DateRangePickerIcon />
      </DateRangePickerInput>
      <DateRangePicker
        startDate={selectedStartDate}
        startDateId="startDate"
        endDate={selectedEndDate}
        endDateId="endDate"
        onDatesChange={handleDatesChange}
        focusedInput={selectedFocusedInput}
        onFocusChange={focusInput => setSelectedFocusedInput(focusInput)}
        numberOfMonths={1}
        minimumNights={0}
        hideKeyboardShortcutsPanel
        showClearDates
        startDatePlaceholderText="Check-in"
        endDatePlaceholderText="Check-out"
      />
    </DateRangePickerWrapper>
  );
};
