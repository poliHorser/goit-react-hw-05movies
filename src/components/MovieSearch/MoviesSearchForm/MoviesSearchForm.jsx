import { useState, useEffect, useRef, useMemo } from 'react';
import { nanoid } from 'nanoid';
import './MoviesSearchForm.css'

const MoviesSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({
      search: '',
    });
  };

  const searchId = useMemo(() => nanoid(), []);

  return (
    <div className='form-div'>
      <form onSubmit={handleSubmit} className='form'>
          <div>
              <label className='form-label' htmlFor={searchId}>Search movie</label>
                <div >
                    <input className='form-input'
                      id={searchId}
                      ref={inputRef}
                      value={state.search}
                      onChange={handleChange}
                      required
                      type="text"
                      name="search"
                      placeholder="Enter movie name"/>
                    <button type="submit" className='form-btn'>
                      Search
                    </button>
                </div>
          </div>
        </form>
    </div>
  );
};

export default MoviesSearchForm;