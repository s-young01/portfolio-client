import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config/config';
import { getData } from '../modules/Data';
import EditPostPage from '../pages/EditPostPage';

const EditPostContainer = ({isButtonTrue}) => {
    const { no } = useParams();
    const { loading, data, error } = useSelector(state => state.postData.post);
    const dispatch = useDispatch();

    const editpost = async () => {
        const data = await axios.get(`${API_URL}/modifypost/${no}`);
        return data;
    }

    useEffect(() => {
        dispatch(getData(editpost));
    }, [dispatch, no]);

    if(loading) return <div>로딩중..</div>
    if(!data) return <div>데이터가 없습니다.</div>
    if(error) return <div>에러 발생 !</div>
    return (
        <EditPostPage data={data} isButtonTrue={isButtonTrue}/>
    ); 
};

export default EditPostContainer;