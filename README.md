# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements
- [X] Add a metric conversion tool.
- [X] Integrate a task list **with** array storage.
- [ ] Add JavaScript logic **for** a live clock.
- [X] Add a weekly task goal calculator.

## Weekly Task Goals
The Weekly Task Goals feature calculates a user's total weekly task goal based on their daily task goal and any additional weekly bonus tasks. It multiplies the user's daily goal by five to calculate the weekly goal, then adds the bonus tasks to determine the user's total weekly task target.

## Magic Eight Ball
The Magic Eight Ball is an interactive game that allows users to enter a yes/no question and click the Eight Ball to receive a randomly selected answer. Users can reset the game to ask another question.

## Imperial/Metric Converter
The Imperial/Metric Converter allows users to convert values between Imperial and Metric units. The application supports conversions involving inches, feet, yards, and miles, as well as centimeters, meters, and kilometers.

### Logic and Pseudocode
BEGIN

DISPLAY "Metric Converter"
DISPLAY "Enter a numeric value:"
INPUT value

DISPLAY "Select a conversion:"
DISPLAY "1. Inches to Centimeters"
DISPLAY "2. Centimeters to Inches"
DISPLAY "3. Feet to Meters"
DISPLAY "4. Meters to Feet"
DISPLAY "5. Yards to Meters"
DISPLAY "6. Meters to Yards"
DISPLAY "7. Miles to Kilometers"
DISPLAY "8. Kilometers to Miles"
INPUT conversion

IF conversion = 1 THEN
    SET result = value * 2.54
    DISPLAY result

ELSE IF conversion = 2 THEN
    SET result = value / 2.54
    DISPLAY result

ELSE IF conversion = 3 THEN
    SET result = value * 0.3048
    DISPLAY result

ELSE IF conversion = 4 THEN
    SET result = value / 0.3048
    DISPLAY result

ELSE IF conversion = 5 THEN
    SET result = value * 0.9144
    DISPLAY result

ELSE IF conversion = 6 THEN
    SET result = value / 0.9144
    DISPLAY result

ELSE IF conversion = 7 THEN
    SET result = value * 1.60934
    DISPLAY result

ELSE IF conversion = 8 THEN
    SET result = value / 1.60934
    DISPLAY result

ELSE
    DISPLAY "Invalid conversion selected."

END IF

END