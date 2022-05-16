import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from 'utils/Search';
import 'styles/SearchBar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ setSearchWritings }) {
	const navigate = useNavigate();

	const [searchValue, setSearchValue] = useState('');
	const handleSearchValue = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<div className="searchBar">
			<input
				className="searchBar__input"
				placeholder="게시글 검색.."
				value={searchValue}
				onChange={handleSearchValue}
				onKeyDown={async (e) => {
					if (e.key === 'Enter') {
						if (searchValue === '') {
							alert('검색어를 입력해주세요!');
							return;
						}
						const searchResult = await Search(searchValue);
						if (searchResult.status === 404) {
							console.log(searchResult.message);
							setSearchWritings([]);
							return;
						}
						setSearchWritings(searchResult);
						navigate('/');
					}
				}}
			/>
			<div className="searchBar__icon">
				<FontAwesomeIcon
					icon={faSearch}
					onClick={async () => {
						if (searchValue === '') {
							alert('검색어를 입력해주세요!');
							return;
						}
						const searchResult = await Search(searchValue);
						if (searchResult.status === 404) {
							console.log(searchResult.message);
							setSearchWritings([]);
							return;
						}
						setSearchWritings(searchResult);
						navigate('/');
					}}
				/>
			</div>
		</div>
	);
}

export default SearchBar;
