import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import cities from "../../city.list.json";
import SearchIcon from "../../assets/icons/Search-icon.svg";
import Cancel from "../../assets/icons/Cancel-cross.svg";

import s from "./Search.module.scss";

export const Search = () => {
  const { search, toggleSearch, setSearch, setCoords, current } = useContext(
    AppContext
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<Array<any>>([]);

  const cleanupWord = (word: string) => {
    return word.trim().toLowerCase().replace(/( )+/g, " ");
  };

  useEffect(() => {
    const filterData = (word: string) => {
      const formatedWord = cleanupWord(word);
      // @ts-ignore
      return cities.filter(
        (item: any) =>
          item.name.toLowerCase().includes(formatedWord) ||
          item.country.toLowerCase().includes(formatedWord)
      );
    };
    if (inputValue.length > 0) {
      setResult(filterData(inputValue));
    } else {
      setResult([]);
    }
  }, [inputValue]);

  const hilightText = (text: string) => {
    const formatedWord = cleanupWord(inputValue);
    const splitedText = text.toLowerCase().split(formatedWord);
    const hilightedText = `<span>${formatedWord}</span>`;
    const finalText = splitedText.join(hilightedText);
    return finalText;
  };

  const cleanInput = () => {
    setInputValue("");
  };

  const handleClick = (data: any) => {
    setCoords(data.coord);
    setSearch(false);
    cleanInput();
  };

  let navStyle = `${s.container}`;
  if (search) {
    navStyle = `${s.container} ${s.open}`;
  }

  return (
    <div className={navStyle}>
      <div className={s.navbar}>
        <button type="button" onClick={() => toggleSearch()}>
          Done
        </button>
        <div className={s.title}>
          <div className={s.tag}>Location</div>
          <div className={s.city}>{current.city}</div>
        </div>
      </div>
      <div className={s.searchInput}>
        <img src={SearchIcon} alt="" className={s.searchIcon} />
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button className={s.cancel} onClick={() => cleanInput()}>
          <img src={Cancel} alt="" />
        </button>
      </div>
      <div className={s.results}>
        {result.length
          ? result.map(
              (item: any, ind: number) =>
                ind < 40 && (
                  <div
                    className={s.singleResult}
                    onClick={() => handleClick(item)}
                    tabIndex={0}
                    key={item.id}
                    dangerouslySetInnerHTML={{ __html: hilightText(item.name) }}
                  />
                )
            )
          : null}
      </div>
    </div>
  );
};
