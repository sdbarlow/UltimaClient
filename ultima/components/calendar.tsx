import { DateRange, Range } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CalendarProps {
  value: Range;
  onChange: (value: Range) => void;
}

const Calendar: React.FC<CalendarProps> = ({ value }) => {

  return (
    <DateRange
      ranges={[value]}
      showDateDisplay={false}
    />
  );
};

export default Calendar;