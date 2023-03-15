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
            // html 형식을 텍스트 형식으로 바꿀 때 dangerouslySetInnerHTML 사용해야 함
            // 사용하려면 {params: {넘겨줄 값: 넘겨줄 값}}
            axios.post(`${API_URL}/postUpdate`, formData)
            .then(res => {
                alert('등록되었습니다.');
                navigate('/posts');
            })
            .catch(e => console.log(e));
        }
    }

    // 나가기 버튼 눌렀을 때
    const useConfirm = (message=null, onConfirm, onCancel) => {
        if(!onConfirm || typeof onConfirm !== 'function') {
            return;
        }
        if(onCancel && typeof onCancel !== 'function') {
            return;
        }
        const confirmAction = () => {
            if(window.confirm(message)) {
                onConfirm();
            }else {
                onCancel();
            }
        }
        return confirmAction;
    }
    const goConfirm = () => navigate('/posts');
    const cancleConfirm = () => null;
    
    return (
        <div className='write'>
            <Header/>
            <div className='write_zone'>
                <div className='inner2'>
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
            </div>
            <div className='footer'>
                <nav className='inner'>
                    <Link to='http://speller.cs.pusan.ac.kr/'>
                        <span>맞춤법 검사하기</span>
                        <MdPlaylistAddCheck className='check_icon'/>
                    </Link>
                    <div className='write_btn'>
                        <button onClick={onSubmit} className='ok_btn'>등록하기</button>
                        <button onClick={useConfirm('작성중인 글이 저장되지 않을 수도 있습니다. 정말 나가시겠습니까?',
                        goConfirm, cancleConfirm)} 
                        className='exit_btn'>나가기</button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default WritePage;