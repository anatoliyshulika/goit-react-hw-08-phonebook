import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'app/selectors';
import { setFilter } from './filterSlice';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './Filter.styled';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(setFilter(e.currentTarget.value));
  }

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        type="text"
        value={filter}
        onChange={handleChange}
        autoComplete="off"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}
