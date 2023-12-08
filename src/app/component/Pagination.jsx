"use client"
import { useEffect, useState } from 'react';
import getBlogs from '../libs/getBlogs';
import { useRouter } from 'next/router';
import Link from 'next/link';


// eslint-disable-next-line react/prop-types
const Pagination = ({ pageNo, perPageNo = 10, isBorder = false, border = 'green', background = false }) => {

    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch(`https://blogify-server.vercel.app/api/v1/blog`, {
            cache:'no-store'
        }).then(res => res.json()).then(res => setDatas(res))
    });
    const data = datas?.data?.data;

    const defaultPageNo = perPageNo;

    const [number, setNumber] = useState(defaultPageNo);
    const [buttonNumber, setButtonNumber] = useState(defaultPageNo);
    const [modifiedButtonNumber, setModifiedButtonNumber] = useState()

    // eslint-disable-next-line react/prop-types
    const roundedDataLength = Math.ceil(data?.length / defaultPageNo);
    const totalDataLength = roundedDataLength * defaultPageNo
    // console.log(totalDataLength)

    const arrayOfObjects = [];
    for (let id = 1; id <= (totalDataLength / defaultPageNo); id++) {
        const newObj = { id: id };
        arrayOfObjects.push(newObj);
    }

    let mappedArray = arrayOfObjects.map((obj) => {
        return {
            ...obj,
        };
    });

    // console.log(mappedArray.length);

        useEffect(() => {
            const pageNumber = pageNo * defaultPageNo;
            setNumber(pageNumber)
        },[pageNo,defaultPageNo])
  



    useEffect(() => {
        const makeLastDigitZero = (number) => {
            if (number % defaultPageNo !== 0) {
                number = Math.ceil(number / defaultPageNo) * defaultPageNo;
            }
            setModifiedButtonNumber(number)
        }
        makeLastDigitZero(mappedArray?.length)
        if (modifiedButtonNumber < buttonNumber) {
            setButtonNumber(defaultPageNo)

        }
    }, [buttonNumber, mappedArray, modifiedButtonNumber, defaultPageNo]);



    const handlePageButton = (value) => {
        if (value === 'decrease' && buttonNumber > defaultPageNo) {
            setButtonNumber(buttonNumber - defaultPageNo)
        } else if (value === 'increase') {
            setButtonNumber(buttonNumber + defaultPageNo)
        }
    }
    

    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        const paginatedData = data?.slice((number - defaultPageNo), number);
        const pageNumber = number / defaultPageNo
               
    }, [ number, defaultPageNo, data])


    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div onClick={() => handlePageButton('decrease')}> <p style={{ fontSize: '15px', marginRight: '25px', cursor:'pointer' }}>prev</p> </div>
            {
                mappedArray?.slice((buttonNumber - defaultPageNo), buttonNumber).map(m => {
                    return (
                        <Link 
                        key={m.id} 
                        href={`/blogs?page=${m.id}`}
                        style={{textDecoration:'none'}}
                        >
                            <div
                            style={{
                                height: '25px',
                                width: '25px',
                                border: `${isBorder ? `1px solid ${m.id === (number / defaultPageNo) ? `${border}` : 'red'}` : ''}`,
                                borderRadius: '5px',
                                margin: '5px', display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backgroundColor: `${background ? `${m.id === (number / defaultPageNo) ? 'lightGray' : ''}` : ''}`
                            }}
                        >
                            <p >{m.id}</p>
                        </div>
                        </Link>
                    )
                })
            }
            <div onClick={() => handlePageButton('increase')}> <p style={{ fontSize: '15px', marginLeft: '15px', cursor:'pointer' }}>next</p> </div>
        </div>
    );
};

export default Pagination;