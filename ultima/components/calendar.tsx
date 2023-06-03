import { DateRange, Range, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CalendarProps {
  value: Range;
  onChange: (value: Range) => void;
}

const Calendar: React.FC<CalendarProps> = ({ value, onChange }) => {
  const handleSelect = (rangesByKey: RangeKeyDict) => {
    onChange(rangesByKey.selection);
  };

  return (
    <DateRange
      ranges={[value]}
      onChange={handleSelect}
      showDateDisplay={false}
    />
  );
};

export default Calendar;