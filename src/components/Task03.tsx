import React, {ChangeEvent, useEffect, useMemo, useState} from 'react';
import dataNames from '../data.json'
import DownArrow from '../assets/downArrow.png'
import CloseIcon from '../assets/close.png'

const Task03 = () => {

    const [isOptionsVisible, setIsOptionsVisible] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [isSortedArrayEmpty, setIsSortedArrayEmpty] = useState<boolean>(false);
    const [isSortedListVisible, setIsSortedListVisible] = useState<boolean>(false);

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
        setIsSortedListVisible(true);
    }
    const sortedArr = useMemo(() => {
        return [...dataNames].filter(el => el.name.toLowerCase().includes(inputValue.toLowerCase()));
    }, [dataNames, inputValue]);

    const showOptionList = () => {
        setIsOptionsVisible(true);
    }
    const hideOptionList = () => {
        setIsOptionsVisible(false);
        setIsSortedListVisible(false);
    }
    const addOptionToInput = (value: string) => {
        setInputValue(value);
        hideOptionList();
    }
    const clearSelect = () => {
        setInputValue('');
        hideOptionList();
    }
    useEffect(() => {
        if (sortedArr.length === 0) {
            setIsSortedArrayEmpty(true);
        } else {
            setIsSortedArrayEmpty(false);
        }
    }, [sortedArr]);

    return (
        <div className={'customSelect'} onClick={hideOptionList}>
            <div className={'inputLabel'}>
                <input type="text" placeholder={'Name'} value={inputValue} className={'inputSelect'}
                       onChange={onChangeHandle}
                       onClick={(e) => {
                           e.stopPropagation();
                           showOptionList();
                       }}/>
                <button className={`btnControl ${isOptionsVisible && 'visible'}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOptionsVisible(!isOptionsVisible);
                        }}>
                    <img src={DownArrow} alt="arrow" className={'iconImg'}/>
                </button>
                {inputValue &&
                    <button className={'btnClear'} onClick={e => {
                        clearSelect();
                    }}>
                        <img src={CloseIcon} alt="close" className={'iconArrow'}/>
                    </button>}
                {isOptionsVisible && <ul className={'optionList'} onClick={e => e.preventDefault()}>
                    {isSortedArrayEmpty && isSortedListVisible && <li className='notFoundItem'>Not Found</li>}
                    {isSortedListVisible ? sortedArr.map((item, index) => {
                        const onClickHandler = () => {
                            addOptionToInput(item.name);
                        }
                        return (
                            <li key={index} className={'optionItem'} onClick={onClickHandler}>
                                {item.name}
                            </li>
                        )
                    }) : dataNames.map((item, index) => {
                        const onClickHandler = () => {
                            addOptionToInput(item.name);
                        }
                        return (
                            <li key={index} className={'optionItem'} onClick={onClickHandler}>
                                {item.name}
                            </li>
                        )
                    })}
                </ul>}
            </div>
        </div>
    );
};

export default Task03;