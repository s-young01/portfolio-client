import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { MdPlaylistAddCheck } from "react-icons/md";
import './WritePage.scss';
import axios from 'axios';
import { API_URL } from '../config/config';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const WritePage = ({isButtonTrue}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        isButtonTrue();
    },[isButtonTrue]);

    // 글 등록 상태관리
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });

    // change 이벤트 
    const onChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    // 폼 전송 이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        if(formData.title === '' ) {
            alert('제목을 입력해주세요.');
            //document.querySelector('.title_input').placeholder.color = 'red';
        }else {
            axios.post(`${API_URL}/postUpdate`, formData)
            .then(res => {
                alert('등록되었습니다.');
                navigate('/posts');
            })
            .catch(e => console.log(e));
        }
    }

    return (
        <div className='write'>
            <Header/>
            <div className='write_zone inner2'>
                <input className='title_input' type='text' name='title'
                placeholder='제목을 입력하세요' value={formData.title} onChange={onChange}/>
                <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        setFormData({
                            ...formData,
                            content: data
                        });
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
            <div className='footer'>
                <nav className='inner'>
                    <Link to='http://speller.cs.pusan.ac.kr/'>
                        <span>맞춤법 검사하기</span>
                        <MdPlaylistAddCheck className='check_icon'/>
                    </Link>
                    <button onClick={onSubmit}>등록하기</button>
                </nav>
            </div>
        </div>
    );
};

export default WritePage;